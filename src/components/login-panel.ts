import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { authContext } from '../core/context/tokens.js';
import type { AuthStore } from '../core/store/auth-store.js';

/**
 * <login-panel>: Form-Associated Custom Element (FACE).
 * - Utilizes native this.attachInternals()
 * - Participates in native form submission & browser validation
 * - Validates credentials (username required, password === 'joshua')
 */
@customElement('login-panel')
export class LoginPanel extends LitElement {
  static readonly formAssociated = true;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  public authStore?: AuthStore;

  @state() private username = '';
  @state() private password = '';
  @state() private errorMessage = '';
  @state() private isSubmitting = false;
  @state() private currentUser: string | null = null;
  @state() private activeTabId: string | null = null;

  private internals: ElementInternals;

  private onAuthChanged = (e: Event) => {
    const detail = (e as CustomEvent).detail;
    this.currentUser = detail.user;
    this.activeTabId = this.authStore?.currentTabId ?? null;
  };

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.syncAuth();
  }

  willUpdate(changedProps: Map<string, unknown>): void {
    if (changedProps.has('authStore')) {
      this.syncAuth();
    }
  }

  private syncAuth(): void {
    if (this.authStore) {
      this.currentUser = this.authStore.currentUser;
      this.activeTabId = this.authStore.currentTabId;
      this.authStore.removeEventListener('auth-changed', this.onAuthChanged);
      this.authStore.addEventListener('auth-changed', this.onAuthChanged);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.authStore) {
      this.authStore.removeEventListener('auth-changed', this.onAuthChanged);
    }
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      max-width: 420px;
      margin: 0 auto;
    }

    .card {
      background: var(--color-bg-surface, #111726);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-lg, 12px);
      padding: 2rem;
      box-shadow: var(--shadow-subtle);
    }

    .title {
      font-size: 1.35rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: var(--color-text-main, #f8fafc);
    }

    .subtitle {
      font-size: 0.875rem;
      color: var(--color-text-muted, #94a3b8);
      margin-bottom: 1.5rem;
    }

    .session-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(52, 211, 153, 0.12);
      border: 1px solid rgba(52, 211, 153, 0.3);
      color: var(--color-success, #34d399);
      padding: 0.4rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 1.25rem;
    }

    .session-info {
      background: var(--color-bg-base, #0a0d14);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-md, 8px);
      padding: 1rem;
      margin-bottom: 1.5rem;
      text-align: left;
    }

    .session-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.875rem;
      padding: 0.35rem 0;
    }

    .session-row:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .session-row .label {
      color: var(--color-text-muted, #94a3b8);
    }

    .session-row .value {
      font-family: var(--font-family-mono);
      color: var(--color-text-main, #f8fafc);
      font-weight: 600;
    }

    .session-actions {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .btn-resume {
      display: block;
      width: 100%;
      box-sizing: border-box;
      text-align: center;
      padding: 0.75rem;
      background: var(--color-primary, #38bdf8);
      color: #04101e;
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: var(--radius-md, 8px);
      text-decoration: none;
      transition: background var(--transition-speed, 200ms);
    }

    .btn-resume:hover {
      background: var(--color-primary-hover, #0284c7);
      text-decoration: none;
    }

    .btn-terminate {
      width: 100%;
      padding: 0.7rem;
      background: transparent;
      border: 1px solid var(--color-danger, #f87171);
      color: var(--color-danger, #f87171);
      border-radius: var(--radius-md, 8px);
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background var(--transition-speed, 200ms), color var(--transition-speed, 200ms);
    }

    .btn-terminate:hover {
      background: rgba(248, 113, 113, 0.15);
    }

    .form-group {
      margin-bottom: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }

    label {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--color-text-muted, #94a3b8);
    }

    input {
      background: var(--color-bg-base, #0a0d14);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-md, 8px);
      padding: 0.65rem 0.85rem;
      color: var(--color-text-main, #f8fafc);
      font-size: 0.95rem;
      transition: border-color var(--transition-speed, 200ms);
    }

    input:focus {
      outline: none;
      border-color: var(--color-primary, #38bdf8);
      box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
    }

    .btn-submit {
      width: 100%;
      padding: 0.75rem;
      border: none;
      border-radius: var(--radius-md, 8px);
      background: var(--color-primary, #38bdf8);
      color: #04101e;
      font-weight: 600;
      font-size: 0.95rem;
      cursor: pointer;
      margin-top: 0.5rem;
      transition: background var(--transition-speed, 200ms), transform 100ms;
    }

    .btn-submit:hover:not(:disabled) {
      background: var(--color-primary-hover, #0284c7);
    }

    .btn-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .error-box {
      background: rgba(248, 113, 113, 0.1);
      border: 1px solid var(--color-danger, #f87171);
      color: var(--color-danger, #f87171);
      padding: 0.65rem;
      border-radius: var(--radius-md, 8px);
      font-size: 0.85rem;
      margin-bottom: 1.25rem;
    }

    .hint {
      margin-top: 1rem;
      font-size: 0.8rem;
      color: var(--color-text-faint, #64748b);
      text-align: center;
    }
  `;

  private handleUsernameChange(e: Event) {
    this.username = (e.target as HTMLInputElement).value;
    this.errorMessage = '';
    this.updateFormValidity();
  }

  private handlePasswordChange(e: Event) {
    this.password = (e.target as HTMLInputElement).value;
    this.errorMessage = '';
    this.updateFormValidity();
  }

  private updateFormValidity() {
    this.internals.setFormValue(`${this.username}`);
    if (!this.username) {
      this.internals.setValidity({ valueMissing: true }, 'Username is required');
    } else {
      this.internals.setValidity({});
    }
  }

  private handleSubmit(e: Event) {
    e.preventDefault();
    if (!this.authStore) return;

    this.isSubmitting = true;
    const res = this.authStore.login(this.username, this.password);
    this.isSubmitting = false;

    if (res.success) {
      // Dispatch standard DOM event to trigger view transition to dashboard
      this.dispatchEvent(new CustomEvent('login-success', {
        bubbles: true,
        composed: true,
        detail: { username: this.username }
      }));
    } else {
      this.errorMessage = res.error || 'Authentication failed.';
    }
  }

  private handleTerminateSession() {
    this.authStore?.logout();
  }

  render() {
    if (this.currentUser) {
      return html`
        <div class="card" role="region" aria-label="Active Session Established">
          <div class="session-badge">
            <span>●</span> Active Session Established
          </div>

          <h2 class="title">Welcome, ${this.currentUser}</h2>
          <p class="subtitle">An authenticated operator session is currently active.</p>

          <div class="session-info">
            <div class="session-row">
              <span class="label">Operator:</span>
              <span class="value">${this.currentUser}</span>
            </div>
            <div class="session-row">
              <span class="label">Tab Instance:</span>
              <span class="value">${this.activeTabId ? this.activeTabId.slice(0, 14) + '…' : 'current-tab'}</span>
            </div>
            <div class="session-row">
              <span class="label">Storage Scope:</span>
              <span class="value">sessionStorage</span>
            </div>
          </div>

          <div class="session-actions">
            <a href="dashboard.html" class="btn-resume">
              Resume Dashboard Matrix &rarr;
            </a>
            <button type="button" class="btn-terminate" @click=${this.handleTerminateSession}>
              Terminate Session
            </button>
          </div>
        </div>
      `;
    }

    return html`
      <div class="card" role="region" aria-label="Sign In Portal">
        <h2 class="title">Gateway Access</h2>
        <p class="subtitle">Authenticate to view live node telemetry</p>

        ${this.errorMessage ? html`
          <div class="error-box" role="alert">
            ${this.errorMessage}
          </div>
        ` : null}

        <form @submit=${this.handleSubmit} novalidate>
          <div class="form-group">
            <label for="username">Operator Call-Sign</label>
            <input
              id="username"
              type="text"
              name="username"
              required
              autocomplete="username"
              placeholder="e.g. operator-01"
              .value=${this.username}
              @input=${this.handleUsernameChange}
            />
          </div>

          <div class="form-group">
            <label for="password">Access Key</label>
            <input
              id="password"
              type="password"
              name="password"
              required
              autocomplete="current-password"
              placeholder="Enter security key"
              .value=${this.password}
              @input=${this.handlePasswordChange}
            />
          </div>

          <button type="submit" class="btn-submit" ?disabled=${this.isSubmitting}>
            ${this.isSubmitting ? 'Verifying...' : 'Establish Session'}
          </button>
        </form>

        <p class="hint">Standards Demo: Any username accepted. Security key is <code>joshua</code>.</p>
      </div>
    `;
  }
}
