import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import type { TelemetryIncident } from '../core/store/telemetry-store.js';

/**
 * <incident-modal>: Native HTML <dialog> showcase.
 * - Uses native this.dialogRef.showModal()
 * - Native ::backdrop styling
 * - Standard <form method="dialog"> for cancellation
 */
@customElement('incident-modal')
export class IncidentModal extends LitElement {
  @property({ type: Object })
  public incident: TelemetryIncident | null = null;

  @query('dialog')
  private dialogEl!: HTMLDialogElement;

  static styles = css`
    dialog {
      background: var(--color-bg-surface-elevated, #1a2236);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-lg, 12px);
      padding: 1.75rem;
      color: var(--color-text-main, #f8fafc);
      max-width: 500px;
      width: 90%;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
    }

    dialog::backdrop {
      background: rgba(4, 8, 16, 0.75);
      backdrop-filter: blur(4px);
    }

    .modal-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .badge {
      background: rgba(248, 113, 113, 0.2);
      color: var(--color-danger, #f87171);
      border: 1px solid var(--color-danger, #f87171);
      padding: 0.2rem 0.6rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    h3 {
      font-size: 1.15rem;
      margin: 0;
    }

    .body {
      font-size: 0.95rem;
      color: var(--color-text-muted, #94a3b8);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
    }

    .btn {
      padding: 0.5rem 1rem;
      border-radius: var(--radius-md, 8px);
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid transparent;
    }

    .btn-secondary {
      background: transparent;
      border-color: var(--color-border, #24304d);
      color: var(--color-text-muted, #94a3b8);
    }

    .btn-primary {
      background: var(--color-primary, #38bdf8);
      color: #04101e;
    }
  `;

  public openModal(): void {
    this.dialogEl.showModal();
  }

  public closeModal(): void {
    this.dialogEl.close();
  }

  private handleResolve() {
    this.dispatchEvent(new CustomEvent('incident-resolved', { bubbles: true, composed: true }));
    this.closeModal();
  }

  render() {
    return html`
      <dialog aria-labelledby="dialog-title" aria-describedby="dialog-desc">
        <div class="modal-header">
          <span class="badge">${this.incident?.severity || 'Alert'}</span>
          <h3 id="dialog-title">Telemetry Alert: ${this.incident?.nodeId}</h3>
        </div>

        <p class="body" id="dialog-desc">
          ${this.incident?.message || 'No active incidents reported.'}
        </p>

        <form method="dialog" class="actions">
          <button class="btn btn-secondary" value="cancel">Dismiss</button>
          <button type="button" class="btn btn-primary" @click=${this.handleResolve}>Acknowledge & Triage</button>
        </form>
      </dialog>
    `;
  }
}
