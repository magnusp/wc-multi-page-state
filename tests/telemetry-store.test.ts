import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { TelemetryStore } from '../src/core/store/telemetry-store.js';

describe('TelemetryStore (Decoupled EventTarget Domain Store)', () => {
  let store: TelemetryStore;

  beforeEach(() => {
    store = new TelemetryStore();
  });

  afterEach(() => {
    store.destroy();
  });

  it('initializes with default telemetry nodes', () => {
    const nodes = store.getNodes();
    expect(nodes.length).toBe(4);
    expect(nodes.every(n => !n.isCordoned)).toBe(true);
  });

  it('sheds load on cordoned node to idle values', () => {
    const targetId = 'node-alpha';
    const initialTarget = store.getNodeById(targetId)!;
    expect(initialTarget.isCordoned).toBe(false);

    store.toggleCordon(targetId);

    const updatedTarget = store.getNodeById(targetId)!;
    expect(updatedTarget.isCordoned).toBe(true);
    expect(updatedTarget.cpuLoad).toBe(8); // idle CPU
    expect(updatedTarget.memoryUsage).toBe(20); // idle Mem
    expect(updatedTarget.status).toBe('healthy');
    expect(updatedTarget.latencyMs).toBe(0);
  });

  it('redistributes shed load onto surviving uncordoned nodes when a node is cordoned', () => {
    const initialNodes = store.getNodes();
    const otherInitialActive = initialNodes.filter(n => n.id !== 'node-beta' && !n.isCordoned);

    store.toggleCordon('node-beta');

    const updatedNodes = store.getNodes();
    const cordonedNode = updatedNodes.find(n => n.id === 'node-beta')!;
    expect(cordonedNode.isCordoned).toBe(true);

    const otherUpdatedActive = updatedNodes.filter(n => n.id !== 'node-beta');
    // Each active node should have received extra CPU & Memory load
    otherUpdatedActive.forEach((updatedNode, i) => {
      const originalNode = otherInitialActive[i];
      expect(updatedNode.cpuLoad).toBeGreaterThanOrEqual(originalNode.cpuLoad);
      expect(updatedNode.memoryUsage).toBeGreaterThanOrEqual(originalNode.memoryUsage);
    });
  });

  it('uncordoning re-balances cluster load evenly across all active nodes', () => {
    // Cordon node-alpha
    store.toggleCordon('node-alpha');
    const nodesAfterCordon = store.getNodes();
    const otherNodeLoadAfterCordon = nodesAfterCordon.find(n => n.id === 'node-beta')!.cpuLoad;

    // Uncordon node-alpha
    store.toggleCordon('node-alpha');
    const nodesAfterUncordon = store.getNodes();
    const uncordonedAlpha = nodesAfterUncordon.find(n => n.id === 'node-alpha')!;
    const uncordonedBeta = nodesAfterUncordon.find(n => n.id === 'node-beta')!;

    expect(uncordonedAlpha.isCordoned).toBe(false);
    expect(uncordonedAlpha.cpuLoad).toBeGreaterThan(8);
    // Beta's load should be relieved compared to when alpha was cordoned
    expect(uncordonedBeta.cpuLoad).toBeLessThan(otherNodeLoadAfterCordon);
  });

  it('dispatches telemetry-tick event on cordon toggle', () => {
    let tickFired = false;
    store.addEventListener('telemetry-tick', (e: Event) => {
      tickFired = true;
      const nodes = (e as CustomEvent).detail.nodes;
      expect(nodes.length).toBe(4);
    });

    store.toggleCordon('node-delta');
    expect(tickFired).toBe(true);
  });
});
