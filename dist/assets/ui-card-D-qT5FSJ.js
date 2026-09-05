import{i as p,n,b,d as a,e as h}from"./app-shell-BuqjQtet.js";var m=Object.defineProperty,g=Object.getOwnPropertyDescriptor,i=(d,e,s,o)=>{for(var t=o>1?void 0:o?g(e,s):e,c=d.length-1,l;c>=0;c--)(l=d[c])&&(t=(o?l(e,s,t):l(t))||t);return o&&t&&m(e,s,t),t};let r=class extends b{constructor(){super(...arguments),this.title="",this.description="",this.actionLabel="",this.actionHref=""}render(){return a`
      <div class="card" role="region" aria-label=${this.title||"Notification Card"}>
        <div class="icon-badge">🔒</div>
        ${this.title?a`<h2 class="title">${this.title}</h2>`:null}
        ${this.description?a`<p class="description">${this.description}</p>`:null}
        
        <div class="actions">
          <slot name="action">
            ${this.actionHref&&this.actionLabel?a`
              <a href=${this.actionHref} class="btn-action">
                ${this.actionLabel}
              </a>
            `:null}
          </slot>
        </div>
      </div>
    `}};r.styles=p`
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
  `;i([n({type:String})],r.prototype,"title",2);i([n({type:String})],r.prototype,"description",2);i([n({type:String})],r.prototype,"actionLabel",2);i([n({type:String})],r.prototype,"actionHref",2);r=i([h("ui-card")],r);
