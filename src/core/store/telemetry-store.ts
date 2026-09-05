export interface TelemetryNode {
  id: string;
  name: string;
  region: string;
  status: 'healthy' | 'warning' | 'critical';
  cpuLoad: number; // percentage
  memoryUsage: number; // percentage
  latencyMs: number;
  lastUpdated: number;
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
      { id: 'node-alpha', name: 'US-East Core Alpha', region: 'us-east-1', status: 'healthy', cpuLoad: 24, memoryUsage: 45, latencyMs: 14, lastUpdated: Date.now() },
      { id: 'node-beta', name: 'EU-Central Edge Beta', region: 'eu-west-1', status: 'healthy', cpuLoad: 38, memoryUsage: 62, latencyMs: 32, lastUpdated: Date.now() },
      { id: 'node-gamma', name: 'AP-Tokyo Gateway Gamma', region: 'ap-northeast-1', status: 'warning', cpuLoad: 78, memoryUsage: 88, latencyMs: 142, lastUpdated: Date.now() },
      { id: 'node-delta', name: 'US-West Replica Delta', region: 'us-west-2', status: 'healthy', cpuLoad: 19, memoryUsage: 33, latencyMs: 22, lastUpdated: Date.now() }
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
    this.activeIncident = null;
    this.dispatchEvent(new CustomEvent('incident-resolved'));
  }

  private startSimulation(): void {
    if (typeof window === 'undefined') return;
    this.timer = window.setInterval(() => {
      this.nodes = this.nodes.map(node => {
        const deltaCpu = (Math.random() - 0.48) * 4;
        const deltaMem = (Math.random() - 0.48) * 2;
        const newCpu = Math.max(5, Math.min(99, Math.round(node.cpuLoad + deltaCpu)));
        const newMem = Math.max(10, Math.min(99, Math.round(node.memoryUsage + deltaMem)));
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
