import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { telemetryContext } from '../core/context/tokens.js';
import type { TelemetryStore, TelemetryNode, TelemetryIncident } from '../core/store/telemetry-store.js';
import './node-popover.js';
import './incident-modal.js';
import type { IncidentModal } from './incident-modal.js';

/**
 * <telemetry-grid>: Real-time node status grid with CSS @container queries.
 * Integrates native <dialog> for alerts and native Popovers for node inspection.
 */
@customElement('telemetry-grid')
export class TelemetryGrid extends LitElement {
  @consume({ context: telemetryContext, subscribe: true })
  @property({ attribute: false })
  public telemetryStore?: TelemetryStore;

  @state() private nodes: TelemetryNode[] = [];
  @state() private activeIncident: TelemetryIncident | null = null;

  @query('incident-modal')
  private modalEl!: IncidentModal;

  private onTick = (e: Event) => {
    this.nodes = (e as CustomEvent).detail.nodes;
  };

  private onIncident = (e: Event) => {
    this.activeIncident = (e as CustomEvent).detail;
  };

  private onIncidentResolved = () => {
    this.activeIncident = null;
    this.telemetryStore?.resolveIncident();
  };

  connectedCallback(): void {
    super.connectedCallback();
    if (this.telemetryStore) {
      this.nodes = this.telemetryStore.getNodes();
      this.activeIncident = this.telemetryStore.getIncident();
      this.telemetryStore.addEventListener('telemetry-tick', this.onTick);
      this.telemetryStore.addEventListener('incident-raised', this.onIncident);
      this.telemetryStore.addEventListener('incident-resolved', this.onIncidentResolved);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.telemetryStore) {
      this.telemetryStore.removeEventListener('telemetry-tick', this.onTick);
      this.telemetryStore.removeEventListener('incident-raised', this.onIncident);
      this.telemetryStore.removeEventListener('incident-resolved', this.onIncidentResolved);
    }
  }

  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
      container-name: telemetry-container;
    }

    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-text-main, #f8fafc);
    }

    .incident-alert-banner {
      background: rgba(248, 113, 113, 0.15);
      border: 1px solid var(--color-danger, #f87171);
      border-radius: var(--radius-md, 8px);
      padding: 0.75rem 1rem;
      margin-bottom: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .btn-alert {
      background: var(--color-danger, #f87171);
      color: #04101e;
      border: none;
      padding: 0.4rem 0.8rem;
      border-radius: var(--radius-sm, 4px);
      font-weight: 700;
      font-size: 0.8rem;
      cursor: pointer;
    }

    .btn-trigger {
      background: var(--color-bg-surface-elevated, #1a2236);
      border: 1px solid var(--color-border, #24304d);
      color: var(--color-text-muted, #94a3b8);
      padding: 0.5rem 0.85rem;
      border-radius: var(--radius-md, 8px);
      font-size: 0.85rem;
      cursor: pointer;
    }

    .btn-trigger:hover {
      border-color: var(--color-primary, #38bdf8);
      color: var(--color-primary, #38bdf8);
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }

    /* CSS Container Query for modular card responsiveness */
    @container telemetry-container (min-width: 650px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @container telemetry-container (min-width: 950px) {
      .grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .card {
      background: var(--color-bg-surface, #111726);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-lg, 12px);
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      position: relative;
    }

    .card.status-healthy { border-left: 4px solid var(--color-success, #34d399); }
    .card.status-warning { border-left: 4px solid var(--color-warning, #fbbf24); }
    .card.status-critical { border-left: 4px solid var(--color-danger, #f87171); }

    .node-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .node-name {
      font-weight: 600;
      font-size: 0.95rem;
      color: var(--color-text-main, #f8fafc);
    }

    .node-region {
      font-size: 0.75rem;
      color: var(--color-text-faint, #64748b);
      font-family: var(--font-family-mono);
    }

    .metrics {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .metric-row {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      color: var(--color-text-muted, #94a3b8);
    }

    .bar {
      height: 6px;
      background: var(--color-bg-base, #0a0d14);
      border-radius: 9999px;
      overflow: hidden;
    }

    .bar-fill {
      height: 100%;
      background: var(--color-primary, #38bdf8);
      transition: width 300ms ease;
    }

    .bar-fill.warning { background: var(--color-warning, #fbbf24); }
    .bar-fill.critical { background: var(--color-danger, #f87171); }

    .card-footer {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 0.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
  `;

  private handleOpenModal() {
    this.modalEl.openModal();
  }

  private handleSimulateIncident() {
    this.telemetryStore?.triggerMockIncident('node-gamma');
  }

  render() {
    return html`
      <div class="header-bar">
        <div>
          <h2 class="title">Active Telemetry Cluster</h2>
          <p style="font-size: 0.85rem; color: var(--color-text-muted);">
            Real-time node telemetry stream via decoupled EventTarget store
          </p>
        </div>

        <button class="btn-trigger" @click=${this.handleSimulateIncident}>
          Simulate Incident
        </button>
      </div>

      ${this.activeIncident ? html`
        <div class="incident-alert-banner" role="alert">
          <div>
            <strong>Incident Detected:</strong> ${this.activeIncident.message}
          </div>
          <button class="btn-alert" @click=${this.handleOpenModal}>
            Open Incident Dialog
          </button>
        </div>
      ` : null}

      <div class="grid">
        ${this.nodes.map(node => html`
          <div class="card status-${node.status}">
            <div class="node-header">
              <div>
                <div class="node-name">${node.name}</div>
                <div class="node-region">${node.region}</div>
              </div>
            </div>

            <div class="metrics">
              <div class="metric-row">
                <span>CPU Load</span>
                <span>${node.cpuLoad}%</span>
              </div>
              <div class="bar">
                <div
                  class="bar-fill ${node.cpuLoad > 85 ? 'critical' : node.cpuLoad > 70 ? 'warning' : ''}"
                  style="width: ${node.cpuLoad}%"
                ></div>
              </div>

              <div class="metric-row" style="margin-top: 0.25rem;">
                <span>Memory</span>
                <span>${node.memoryUsage}%</span>
              </div>
              <div class="bar">
                <div
                  class="bar-fill ${node.memoryUsage > 85 ? 'critical' : node.memoryUsage > 70 ? 'warning' : ''}"
                  style="width: ${node.memoryUsage}%"
                ></div>
              </div>
            </div>

            <div class="card-footer">
              <span style="font-size: 0.75rem; color: var(--color-text-faint);">
                Ping: ${node.latencyMs}ms
              </span>
              <!-- Native Popover element -->
              <node-popover .node=${node}></node-popover>
            </div>
          </div>
        `)}
      </div>

      <!-- Native <dialog> Modal -->
      <incident-modal
        .incident=${this.activeIncident}
        @incident-resolved=${this.onIncidentResolved}
      ></incident-modal>
    `;
  }
}
