import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { telemetryContext, authContext } from '../core/context/tokens.js';
import type { TelemetryStore, TelemetryNode } from '../core/store/telemetry-store.js';
import type { AuthStore } from '../core/store/auth-store.js';
import './ui-card.js';

/**
 * <nodes-view>: Second sub-page view within dashboard domain.
 * Focuses on node cluster topology and demonstrates that ambient Web Audio
 * soundscape continues playing without interruption across View Transitions.
 */
@customElement('nodes-view')
export class NodesView extends LitElement {
  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  public authStore?: AuthStore;

  @consume({ context: telemetryContext, subscribe: true })
  @property({ attribute: false })
  public telemetryStore?: TelemetryStore;

  @state() private nodes: TelemetryNode[] = [];

  private onTick = (e: Event) => {
    this.nodes = (e as CustomEvent).detail.nodes;
  };

  connectedCallback(): void {
    super.connectedCallback();
    this.syncStore();
  }

  willUpdate(changedProps: Map<string, unknown>): void {
    if (changedProps.has('telemetryStore')) {
      this.syncStore();
    }
  }

  private syncStore(): void {
    if (this.telemetryStore) {
      this.nodes = this.telemetryStore.getNodes();
      this.telemetryStore.removeEventListener('telemetry-tick', this.onTick);
      this.telemetryStore.addEventListener('telemetry-tick', this.onTick);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.telemetryStore) {
      this.telemetryStore.removeEventListener('telemetry-tick', this.onTick);
    }
  }

  static styles = css`
    :host {
      display: block;
    }

    .header {
      margin-bottom: 2rem;
    }

    .title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text-main, #f8fafc);
      margin-bottom: 0.25rem;
    }

    .subtitle {
      color: var(--color-text-muted, #94a3b8);
      font-size: 0.9rem;
    }

    .callout {
      background: rgba(56, 189, 248, 0.08);
      border: 1px solid rgba(56, 189, 248, 0.25);
      border-radius: var(--radius-md, 8px);
      padding: 1rem 1.25rem;
      margin-bottom: 2rem;
      font-size: 0.9rem;
      color: var(--color-text-main, #f8fafc);
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .table-container {
      background: var(--color-bg-surface, #111726);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-lg, 12px);
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.875rem;
    }

    th {
      background: var(--color-bg-surface-elevated, #1a2236);
      padding: 0.85rem 1.25rem;
      color: var(--color-text-muted, #94a3b8);
      font-weight: 600;
      border-bottom: 1px solid var(--color-border, #24304d);
    }

    td {
      padding: 1rem 1.25rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      color: var(--color-text-main, #f8fafc);
    }

    tr:last-child td {
      border-bottom: none;
    }

    .badge-status {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .status-healthy { background: rgba(52, 211, 153, 0.15); color: var(--color-success, #34d399); }
    .status-warning { background: rgba(251, 191, 36, 0.15); color: var(--color-warning, #fbbf24); }
    .status-critical { background: rgba(248, 113, 113, 0.15); color: var(--color-danger, #f87171); }
  `;

  render() {
    if (this.authStore && !this.authStore.isAuthenticated) {
      return html`
        <ui-card
          title="Access Restricted"
          description="Node cluster topology is restricted to authenticated operators."
          actionLabel="Return to Gateway Login"
          actionHref="index.html"
        ></ui-card>
      `;
    }

    return html`
      <div class="header">
        <h2 class="title">Active Relay Registry</h2>
        <p class="subtitle">Deep inspection of distributed edge relay nodes</p>
      </div>

      <div class="callout" role="note">
        <span style="font-size: 1.25rem;">🔊</span>
        <div>
          <strong>Audio Continuity Verified:</strong> If the ambient soundscape was playing on the main dashboard,
          notice how audio playback continued completely uninterrupted across this client-side View Transition!
        </div>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Node Name</th>
              <th>Region</th>
              <th>Status</th>
              <th>CPU Load</th>
              <th>Memory</th>
              <th>Latency</th>
            </tr>
          </thead>
          <tbody>
            ${this.nodes.map(node => html`
              <tr>
                <td><strong>${node.name}</strong></td>
                <td><code>${node.region}</code></td>
                <td><span class="badge-status status-${node.status}">${node.status}</span></td>
                <td>${node.cpuLoad}%</td>
                <td>${node.memoryUsage}%</td>
                <td>${node.latencyMs} ms</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `;
  }
}
