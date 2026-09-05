export interface TelemetryNode {
  id: string;
  name: string;
  region: string;
  status: 'healthy' | 'warning' | 'critical';
  cpuLoad: number; // percentage
  memoryUsage: number; // percentage
  latencyMs: number;
  lastUpdated: number;
  isCordoned?: boolean;
}

export interface TelemetryIncident {
  id: string;
  severity: 'high' | 'medium' | 'low';
  message: string;
  timestamp: number;
  nodeId: string;
}

/**
 * TelemetryStore: Framework-agnostic store using EventTarget.
 * Simulates real-time IoT/cluster monitoring metrics.
 */
export class TelemetryStore extends EventTarget {
  private nodes: TelemetryNode[] = [];
  private activeIncident: TelemetryIncident | null = null;
  private timer: number | null = null;

  constructor() {
    super();
    this.initDefaultNodes();
    this.startSimulation();
  }

  private initDefaultNodes(): void {
    this.nodes = [
      { id: 'node-alpha', name: 'US-East Core Alpha', region: 'us-east-1', status: 'healthy', cpuLoad: 24, memoryUsage: 45, latencyMs: 14, lastUpdated: Date.now(), isCordoned: false },
      { id: 'node-beta', name: 'EU-Central Edge Beta', region: 'eu-west-1', status: 'healthy', cpuLoad: 38, memoryUsage: 62, latencyMs: 32, lastUpdated: Date.now(), isCordoned: false },
      { id: 'node-gamma', name: 'AP-Tokyo Gateway Gamma', region: 'ap-northeast-1', status: 'warning', cpuLoad: 78, memoryUsage: 88, latencyMs: 142, lastUpdated: Date.now(), isCordoned: false },
      { id: 'node-delta', name: 'US-West Replica Delta', region: 'us-west-2', status: 'healthy', cpuLoad: 19, memoryUsage: 33, latencyMs: 22, lastUpdated: Date.now(), isCordoned: false }
    ];
  }

  public getNodes(): TelemetryNode[] {
    return [...this.nodes];
  }

  public getNodeById(id: string): TelemetryNode | undefined {
    return this.nodes.find(n => n.id === id);
  }

  public getIncident(): TelemetryIncident | null {
    return this.activeIncident;
  }

  public triggerMockIncident(nodeId: string = 'node-gamma'): void {
    this.activeIncident = {
      id: `inc-${Date.now().toString(36)}`,
      severity: 'high',
      message: `Memory threshold exceeded on [${nodeId}] (>85% sustained for 300s). Potential threadpool exhaustion.`,
      timestamp: Date.now(),
      nodeId
    };
    this.dispatchEvent(new CustomEvent('incident-raised', { detail: this.activeIncident }));
  }

  public resolveIncident(): void {
    if (!this.activeIncident) return;
    this.activeIncident = null;
    this.dispatchEvent(new CustomEvent('incident-resolved'));
  }

  /**
   * Baseline idle values for cordoned nodes.
   */
  private static readonly IDLE_CPU = 8;
  private static readonly IDLE_MEM = 20;

  /**
   * Toggles the cordon status of a relay node.
   * When cordoned, node is excluded from traffic routing, load sheds down to baseline idle,
   * and its displaced workload is redistributed across remaining active uncordoned nodes.
   * When uncordoned, cluster workload re-balances evenly across all active nodes.
   */
  public toggleCordon(nodeId: string): void {
    const target = this.nodes.find(n => n.id === nodeId);
    if (!target) return;

    const willCordon = !target.isCordoned;

    if (willCordon) {
      // Calculate shed compute/memory load above idle
      const shedCpu = Math.max(0, target.cpuLoad - TelemetryStore.IDLE_CPU);
      const shedMem = Math.max(0, target.memoryUsage - TelemetryStore.IDLE_MEM);

      const remainingActive = this.nodes.filter(n => n.id !== nodeId && !n.isCordoned);
      const perNodeCpuBonus = remainingActive.length > 0 ? Math.round(shedCpu / remainingActive.length) : 0;
      const perNodeMemBonus = remainingActive.length > 0 ? Math.round(shedMem / remainingActive.length) : 0;

      this.nodes = this.nodes.map(node => {
        if (node.id === nodeId) {
          return {
            ...node,
            isCordoned: true,
            cpuLoad: TelemetryStore.IDLE_CPU,
            memoryUsage: TelemetryStore.IDLE_MEM,
            status: 'healthy',
            latencyMs: 0,
            lastUpdated: Date.now()
          };
        }
        if (!node.isCordoned) {
          const newCpu = Math.min(99, node.cpuLoad + perNodeCpuBonus);
          const newMem = Math.min(99, node.memoryUsage + perNodeMemBonus);
          const status = newCpu > 85 || newMem > 90 ? 'critical' : newCpu > 70 ? 'warning' : 'healthy';
          return {
            ...node,
            cpuLoad: newCpu,
            memoryUsage: newMem,
            status,
            latencyMs: Math.round(node.latencyMs * 1.25),
            lastUpdated: Date.now()
          };
        }
        return node;
      });
    } else {
      // Uncordoning: restore node to normal cluster participation
      const currentlyActive = this.nodes.filter(n => !n.isCordoned);
      // Average load across active nodes to absorb back
      const avgCpu = currentlyActive.length > 0
        ? Math.round(currentlyActive.reduce((acc, n) => acc + n.cpuLoad, 0) / (currentlyActive.length + 1))
        : 35;
      const avgMem = currentlyActive.length > 0
        ? Math.round(currentlyActive.reduce((acc, n) => acc + n.memoryUsage, 0) / (currentlyActive.length + 1))
        : 50;

      this.nodes = this.nodes.map(node => {
        if (node.id === nodeId) {
          const status = avgCpu > 85 || avgMem > 90 ? 'critical' : avgCpu > 70 ? 'warning' : 'healthy';
          return {
            ...node,
            isCordoned: false,
            cpuLoad: avgCpu,
            memoryUsage: avgMem,
            status,
            latencyMs: 25,
            lastUpdated: Date.now()
          };
        }
        if (!node.isCordoned) {
          // Relieve shared burden now that restored node takes its share
          const relievedCpu = Math.max(15, Math.round(node.cpuLoad * 0.8));
          const relievedMem = Math.max(20, Math.round(node.memoryUsage * 0.85));
          const status = relievedCpu > 85 || relievedMem > 90 ? 'critical' : relievedCpu > 70 ? 'warning' : 'healthy';
          return {
            ...node,
            cpuLoad: relievedCpu,
            memoryUsage: relievedMem,
            status,
            latencyMs: Math.max(10, Math.round(node.latencyMs * 0.8)),
            lastUpdated: Date.now()
          };
        }
        return node;
      });
    }

    this.dispatchEvent(new CustomEvent('telemetry-tick', { detail: { nodes: this.nodes } }));
  }

  private startSimulation(): void {
    if (typeof window === 'undefined') return;
    this.timer = window.setInterval(() => {
      const activeCount = this.nodes.filter(n => !n.isCordoned).length;
      // Load multiplier: fewer active nodes carry higher baseline aggregate cluster load
      const loadMultiplier = activeCount === 0 ? 1 : Math.max(1, 4 / activeCount);

      this.nodes = this.nodes.map(node => {
        if (node.isCordoned) {
          // Cordoned node remains isolated in calm idle state
          const idleCpu = Math.max(4, Math.min(12, Math.round(node.cpuLoad + (Math.random() - 0.5) * 1.5)));
          const idleMem = Math.max(15, Math.min(25, Math.round(node.memoryUsage + (Math.random() - 0.5) * 1.0)));
          return {
            ...node,
            cpuLoad: idleCpu,
            memoryUsage: idleMem,
            status: 'healthy',
            latencyMs: 0,
            lastUpdated: Date.now()
          };
        }

        const deltaCpu = (Math.random() - 0.48) * 4;
        const deltaMem = (Math.random() - 0.48) * 2;
        // Floor load based on cluster pressure multiplier
        const baseFloorCpu = Math.round(20 * loadMultiplier);
        const baseFloorMem = Math.round(30 * loadMultiplier);

        const newCpu = Math.max(baseFloorCpu, Math.min(99, Math.round(node.cpuLoad + deltaCpu)));
        const newMem = Math.max(baseFloorMem, Math.min(99, Math.round(node.memoryUsage + deltaMem)));
        const status = newCpu > 85 || newMem > 90 ? 'critical' : newCpu > 70 ? 'warning' : 'healthy';

        return {
          ...node,
          cpuLoad: newCpu,
          memoryUsage: newMem,
          status,
          latencyMs: Math.max(5, Math.round(node.latencyMs + (Math.random() - 0.5) * 6)),
          lastUpdated: Date.now()
        };
      });

      this.dispatchEvent(new CustomEvent('telemetry-tick', { detail: { nodes: this.nodes } }));
    }, 2500);
  }

  public destroy(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
