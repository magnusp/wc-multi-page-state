import{i as u,c,a as m,n as b,t as f,b as g,d as s,e as h}from"./app-shell-BuqjQtet.js";import"./ui-card-D-qT5FSJ.js";var p=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(o,r,a,e)=>{for(var t=e>1?void 0:e?v(r,a):r,i=o.length-1,n;i>=0;i--)(n=o[i])&&(t=(e?n(r,a,t):n(t))||t);return e&&t&&p(r,a,t),t};let d=class extends g{connectedCallback(){var o,r;super.connectedCallback(),!this.authStore&&typeof window<"u"&&((o=window.__AETHER_SHELL__)!=null&&o.authStore)&&(this.authStore=window.__AETHER_SHELL__.authStore),!this.telemetryStore&&typeof window<"u"&&((r=window.__AETHER_SHELL__)!=null&&r.telemetryStore)&&(this.telemetryStore=window.__AETHER_SHELL__.telemetryStore)}willUpdate(o){var r,a,e,t;o.has("authStore")&&((r=o.get("authStore"))==null||r.removeHost(this),(a=this.authStore)==null||a.addHost(this)),o.has("telemetryStore")&&((e=o.get("telemetryStore"))==null||e.removeHost(this),(t=this.telemetryStore)==null||t.addHost(this))}handleToggleCordon(o){var r;(r=this.telemetryStore)==null||r.toggleCordon(o)}render(){var a,e;if(!(((a=this.authStore)==null?void 0:a.isAuthenticated)??!1))return s`
        <ui-card
          title="Access Restricted"
          description="Node cluster topology is restricted to authenticated operators."
          actionLabel="Return to Gateway Login"
          actionHref="index.html"
        ></ui-card>
      `;const r=((e=this.telemetryStore)==null?void 0:e.getNodes())??[];return s`
      <div class="header">
        <h2 class="title">Active Relay Registry</h2>
        <p class="subtitle">Deep inspection and maintenance control for distributed edge relay nodes</p>
      </div>

      <div class="callout" role="note">
        <span style="font-size: 1.25rem;">🔊</span>
        <div>
          <strong>Dynamic Threshold Simulation:</strong> Cordoning an unstable or critical node isolates it from traffic, shedding load and immediately calming the Web Audio alert loop.
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
              <th>Traffic Control</th>
            </tr>
          </thead>
          <tbody>
            ${r.map(t=>s`
              <tr class=${t.isCordoned?"row-cordoned":""}>
                <td>
                  <strong>${t.name}</strong>
                  ${t.isCordoned?s`<span style="margin-left: 0.4rem; font-size: 0.75rem; color: var(--color-warning);">[Cordoned]</span>`:null}
                </td>
                <td><code>${t.region}</code></td>
                <td>
                  <span class="badge-status ${t.isCordoned?"status-cordoned":`status-${t.status}`}">
                    ${t.isCordoned?"DRAINING":t.status}
                  </span>
                </td>
                <td>${t.cpuLoad}%</td>
                <td>${t.memoryUsage}%</td>
                <td>${t.isCordoned?"—":`${t.latencyMs} ms`}</td>
                <td>
                  <button
                    type="button"
                    class="btn-cordon ${t.isCordoned?"active":""}"
                    @click=${()=>this.handleToggleCordon(t.id)}
                    aria-label="${t.isCordoned?`Uncordon node ${t.name}`:`Cordon node ${t.name}`}"
                    title="${t.isCordoned?"Resume live cluster traffic":"Drain and isolate node from cluster traffic"}"
                  >
                    ${t.isCordoned?"✓ Uncordon":"⛔ Cordon"}
                  </button>
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `}};d.styles=u`
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
    .status-cordoned { background: rgba(148, 163, 184, 0.15); color: var(--color-text-muted, #94a3b8); border: 1px dashed var(--color-border); }

    .row-cordoned {
      opacity: 0.7;
      background: rgba(10, 13, 20, 0.4);
    }

    .btn-cordon {
      padding: 0.35rem 0.75rem;
      font-size: 0.8rem;
      font-weight: 600;
      border-radius: var(--radius-sm, 4px);
      cursor: pointer;
      border: 1px solid var(--color-border, #24304d);
      background: var(--color-bg-surface-elevated, #1a2236);
      color: var(--color-text-main, #f8fafc);
      transition: all var(--transition-speed, 200ms);
    }

    .btn-cordon:hover {
      border-color: var(--color-warning, #fbbf24);
      color: var(--color-warning, #fbbf24);
    }

    .btn-cordon.active {
      background: rgba(251, 191, 36, 0.15);
      border-color: var(--color-warning, #fbbf24);
      color: var(--color-warning, #fbbf24);
    }

    .btn-cordon.active:hover {
      background: rgba(52, 211, 153, 0.15);
      border-color: var(--color-success, #34d399);
      color: var(--color-success, #34d399);
    }
  `;l([c({context:m,subscribe:!0}),b({attribute:!1})],d.prototype,"authStore",2);l([c({context:f,subscribe:!0}),b({attribute:!1})],d.prototype,"telemetryStore",2);d=l([h("nodes-view")],d);
