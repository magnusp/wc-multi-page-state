import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface StreamItem {
  id: number;
  title: string;
  source: string;
  timestamp: string;
  category: 'audit' | 'telemetry' | 'network' | 'mesh';
}

/**
 * <infinite-feed-demo>: Demonstrates native IntersectionObserver paging
 * paired with content-visibility: auto virtualization.
 */
@customElement('infinite-feed-demo')
export class InfiniteFeedDemo extends LitElement {
  @state() private items: StreamItem[] = [];
  @state() private page = 1;
  @state() private isLoading = false;
  @state() private totalSimulated = 18;

  private observer?: IntersectionObserver;
  private readonly categories: Array<'audit' | 'telemetry' | 'network' | 'mesh'> = [
    'audit', 'telemetry', 'network', 'mesh'
  ];

  connectedCallback(): void {
    super.connectedCallback();
    this.loadInitialBatch();
  }

  firstUpdated(): void {
    const sentinel = this.renderRoot.querySelector('#feed-sentinel');
    if (sentinel) {
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !this.isLoading && this.items.length < this.totalSimulated) {
            this.loadNextPage();
          }
        },
        { rootMargin: '100px' }
      );
      this.observer.observe(sentinel);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.observer?.disconnect();
  }

  private loadInitialBatch(): void {
    this.items = this.generateBatch(1, 4);
    this.page = 1;
  }

  private async loadNextPage(): Promise<void> {
    if (this.isLoading || this.items.length >= this.totalSimulated) return;
    this.isLoading = true;

    // Simulate standard asynchronous network latency (250ms)
    await new Promise((resolve) => setTimeout(resolve, 250));

    const nextPage = this.page + 1;
    const newBatch = this.generateBatch(nextPage, 3);
    this.items = [...this.items, ...newBatch];
    this.page = nextPage;
    this.isLoading = false;
  }

  private generateBatch(page: number, count: number): StreamItem[] {
    const startIndex = (page - 1) * count + 1;
    return Array.from({ length: count }, (_, i) => {
      const idx = startIndex + i;
      const cat = this.categories[(idx - 1) % this.categories.length];
      return {
        id: idx,
        title: `Telemetry Event Record #${1000 + idx} (Page ${page})`,
        source: `mesh-node-${(idx % 6) + 1}.cluster.local`,
        timestamp: new Date(Date.now() - (100 - idx) * 45000).toLocaleTimeString(),
        category: cat
      };
    });
  }

  private resetFeed(): void {
    this.loadInitialBatch();
  }

  static styles = css`
    :host {
      display: block;
      margin-top: 1rem;
    }

    .feed-container {
      background: var(--color-bg-base, #0a0d14);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-md, 8px);
      padding: 1rem;
      max-height: 280px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }

    .feed-item {
      background: var(--color-bg-surface, #111726);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-sm, 4px);
      padding: 0.6rem 0.85rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.85rem;
      /* Native Virtualization */
      content-visibility: auto;
      contain-intrinsic-size: auto 42px;
    }

    .feed-item:hover {
      border-color: var(--color-primary, #38bdf8);
    }

    .item-meta {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }

    .item-title {
      color: var(--color-text-main, #f8fafc);
      font-weight: 600;
      font-size: 0.85rem;
    }

    .item-sub {
      color: var(--color-text-muted, #94a3b8);
      font-family: var(--font-family-mono, monospace);
      font-size: 0.75rem;
    }

    .tag {
      font-family: var(--font-family-mono, monospace);
      font-size: 0.7rem;
      padding: 0.15rem 0.45rem;
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: 600;
    }

    .tag.audit { background: rgba(56, 189, 248, 0.15); color: #38bdf8; }
    .tag.telemetry { background: rgba(52, 211, 153, 0.15); color: #34d399; }
    .tag.network { background: rgba(251, 191, 36, 0.15); color: #fbbf24; }
    .tag.mesh { background: rgba(167, 139, 250, 0.15); color: #a78bfa; }

    .sentinel-box {
      padding: 0.5rem;
      text-align: center;
      font-size: 0.75rem;
      color: var(--color-text-faint, #64748b);
      font-family: var(--font-family-mono, monospace);
    }

    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      color: var(--color-text-muted, #94a3b8);
    }

    .btn-reset {
      background: transparent;
      border: 1px solid var(--color-border, #24304d);
      color: var(--color-text-muted, #94a3b8);
      border-radius: var(--radius-sm, 4px);
      padding: 0.2rem 0.5rem;
      font-size: 0.75rem;
      cursor: pointer;
    }

    .btn-reset:hover {
      color: var(--color-primary, #38bdf8);
      border-color: var(--color-primary, #38bdf8);
    }
  `;

  render() {
    return html`
      <div class="header-bar">
        <span>Loaded: <strong>${this.items.length}</strong> / ${this.totalSimulated} events (Page ${this.page})</span>
        <button class="btn-reset" @click=${this.resetFeed}>↺ Reset Feed</button>
      </div>

      <div class="feed-container" role="feed" aria-busy=${this.isLoading} aria-label="IntersectionObserver Stream">
        ${this.items.map(
          (item) => html`
            <article class="feed-item" role="article">
              <div class="item-meta">
                <span class="item-title">${item.title}</span>
                <span class="item-sub">${item.source} &bull; ${item.timestamp}</span>
              </div>
              <span class="tag ${item.category}">${item.category}</span>
            </article>
          `
        )}

        <div id="feed-sentinel" class="sentinel-box">
          ${this.isLoading
            ? html`<span>⏳ Paging in next chunk via IntersectionObserver...</span>`
            : this.items.length >= this.totalSimulated
            ? html`<span>✓ All stream events paged in</span>`
            : html`<span>↓ Scroll down to trigger sentinel</span>`}
        </div>
      </div>
    `;
  }
}
