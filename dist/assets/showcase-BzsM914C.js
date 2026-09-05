import{i as m,b as g,d as l,e as p}from"./app-shell-BuqjQtet.js";import"./ui-card-D-qT5FSJ.js";import{r as c}from"./state-BfeY6vWZ.js";var b=Object.defineProperty,f=Object.getOwnPropertyDescriptor,d=(e,t,i,s)=>{for(var r=s>1?void 0:s?f(t,i):t,a=e.length-1,n;a>=0;a--)(n=e[a])&&(r=(s?n(t,i,r):n(r))||r);return s&&r&&b(t,i,r),r};let o=class extends g{constructor(){super(...arguments),this.items=[],this.page=1,this.isLoading=!1,this.totalSimulated=18,this.categories=["audit","telemetry","network","mesh"]}connectedCallback(){super.connectedCallback(),this.loadInitialBatch()}firstUpdated(){const e=this.renderRoot.querySelector("#feed-sentinel");e&&(this.observer=new IntersectionObserver(t=>{t[0].isIntersecting&&!this.isLoading&&this.items.length<this.totalSimulated&&this.loadNextPage()},{rootMargin:"100px"}),this.observer.observe(e))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.observer)==null||e.disconnect()}loadInitialBatch(){this.items=this.generateBatch(1,4),this.page=1}async loadNextPage(){if(this.isLoading||this.items.length>=this.totalSimulated)return;this.isLoading=!0,await new Promise(i=>setTimeout(i,250));const e=this.page+1,t=this.generateBatch(e,3);this.items=[...this.items,...t],this.page=e,this.isLoading=!1}generateBatch(e,t){const i=(e-1)*t+1;return Array.from({length:t},(s,r)=>{const a=i+r,n=this.categories[(a-1)%this.categories.length];return{id:a,title:`Telemetry Event Record #${1e3+a} (Page ${e})`,source:`mesh-node-${a%6+1}.cluster.local`,timestamp:new Date(Date.now()-(100-a)*45e3).toLocaleTimeString(),category:n}})}resetFeed(){this.loadInitialBatch()}render(){return l`
      <div class="header-bar">
        <span>Loaded: <strong>${this.items.length}</strong> / ${this.totalSimulated} events (Page ${this.page})</span>
        <button class="btn-reset" @click=${this.resetFeed}>↺ Reset Feed</button>
      </div>

      <div class="feed-container" role="feed" aria-busy=${this.isLoading} aria-label="IntersectionObserver Stream">
        ${this.items.map(e=>l`
            <article class="feed-item" role="article">
              <div class="item-meta">
                <span class="item-title">${e.title}</span>
                <span class="item-sub">${e.source} &bull; ${e.timestamp}</span>
              </div>
              <span class="tag ${e.category}">${e.category}</span>
            </article>
          `)}

        <div id="feed-sentinel" class="sentinel-box">
          ${this.isLoading?l`<span>⏳ Paging in next chunk via IntersectionObserver...</span>`:this.items.length>=this.totalSimulated?l`<span>✓ All stream events paged in</span>`:l`<span>↓ Scroll down to trigger sentinel</span>`}
        </div>
      </div>
    `}};o.styles=m`
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
  `;d([c()],o.prototype,"items",2);d([c()],o.prototype,"page",2);d([c()],o.prototype,"isLoading",2);d([c()],o.prototype,"totalSimulated",2);o=d([p("infinite-feed-demo")],o);
