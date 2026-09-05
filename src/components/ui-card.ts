import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * <ui-card>: Purpose-built presentation component.
 * Encapsulates container styling, header, description, and action slots,
 * fully integrated with design tokens and CSS @layer components.
 */
@customElement('ui-card')
export class UiCard extends LitElement {
  @property({ type: String })
  public title = '';

  @property({ type: String })
  public description = '';

  @property({ type: String })
  public actionLabel = '';

  @property({ type: String })
  public actionHref = '';

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .card {
      background: var(--color-bg-surface, #111726);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-lg, 12px);
      padding: 2.5rem 1.75rem;
      text-align: center;
      max-width: 520px;
      margin: 2rem auto;
      box-shadow: var(--shadow-subtle);
    }

    .icon-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 9999px;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid var(--color-border-glow, rgba(56, 189, 248, 0.35));
      color: var(--color-primary, #38bdf8);
      font-size: 1.4rem;
      margin-bottom: 1.25rem;
    }

    .title {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--color-text-main, #f8fafc);
      margin-bottom: 0.75rem;
      line-height: 1.2;
    }

    .description {
      font-size: 0.95rem;
      color: var(--color-text-muted, #94a3b8);
      line-height: 1.6;
      margin-bottom: 1.75rem;
    }

    .actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .btn-action {
      display: inline-block;
      padding: 0.65rem 1.35rem;
      background: var(--color-primary, #38bdf8);
      color: #04101e;
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: var(--radius-md, 8px);
      text-decoration: none;
      transition: background var(--transition-speed, 200ms);
    }

    .btn-action:hover {
      background: var(--color-primary-hover, #0284c7);
      text-decoration: none;
    }
  `;

  render() {
    return html`
      <div class="card" role="region" aria-label=${this.title || 'Notification Card'}>
        <div class="icon-badge">🔒</div>
        ${this.title ? html`<h2 class="title">${this.title}</h2>` : null}
        ${this.description ? html`<p class="description">${this.description}</p>` : null}
        
        <div class="actions">
          <slot name="action">
            ${this.actionHref && this.actionLabel ? html`
              <a href=${this.actionHref} class="btn-action">
                ${this.actionLabel}
              </a>
            ` : null}
          </slot>
        </div>
      </div>
    `;
  }
}
