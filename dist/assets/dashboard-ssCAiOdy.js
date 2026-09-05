import{i as b,n as p,b as u,d as s,e as v,c as h,a as w,t as $}from"./app-shell-BuqjQtet.js";import"./ui-card-D-qT5FSJ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=(e,r,a)=>(a.configurable=!0,a.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(e,r,a),a);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y(e,r){return(a,i,t)=>{const n=o=>{var f;return((f=o.renderRoot)==null?void 0:f.querySelector(e))??null};return _(a,i,{get(){return n(this)}})}}var S=Object.defineProperty,E=Object.getOwnPropertyDescriptor,x=(e,r,a,i)=>{for(var t=i>1?void 0:i?E(r,a):r,n=e.length-1,o;n>=0;n--)(o=e[n])&&(t=(i?o(r,a,t):o(t))||t);return i&&t&&S(r,a,t),t};let c=class extends u{constructor(){super(...arguments),this.node=null}render(){if(!this.node)return s``;const e=`popover-${this.node.id}`;return s`
      <button class="trigger-btn" popovertarget=${e}>
        Inspect Specs
      </button>

      <div id=${e} popover="auto">
        <div class="pop-title">${this.node.name}</div>
        <div class="row">
          <span>Region:</span>
          <span class="val">${this.node.region}</span>
        </div>
        <div class="row">
          <span>Latency:</span>
          <span class="val">${this.node.latencyMs} ms</span>
        </div>
        <div class="row">
          <span>Node ID:</span>
          <span class="val">${this.node.id}</span>
        </div>
      </div>
    `}};c.styles=b`
    :host {
      display: inline-block;
    }

    .trigger-btn {
      background: transparent;
      border: 1px solid var(--color-border, #24304d);
      color: var(--color-primary, #38bdf8);
      border-radius: var(--radius-sm, 4px);
      padding: 0.25rem 0.6rem;
      font-size: 0.75rem;
      cursor: pointer;
      font-family: var(--font-family-mono);
      transition: background var(--transition-speed, 200ms);
    }

    .trigger-btn:hover {
      background: rgba(56, 189, 248, 0.1);
    }

    /* Native Popover styles */
    [popover] {
      background: var(--color-bg-surface-elevated, #1a2236);
      border: 1px solid var(--color-border, #24304d);
      border-radius: var(--radius-md, 8px);
      padding: 1rem;
      color: var(--color-text-main, #f8fafc);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
      margin: auto;
      max-width: 300px;
    }

    [popover]::backdrop {
      background: rgba(0, 0, 0, 0.25);
    }

    .pop-title {
      font-weight: 700;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      color: var(--color-primary, #38bdf8);
    }

    .row {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      margin-bottom: 0.25rem;
      color: var(--color-text-muted, #94a3b8);
    }

    .val {
      font-family: var(--font-family-mono);
      color: var(--color-text-main, #f8fafc);
    }
  `;x([p({type:Object})],c.prototype,"node",2);c=x([v("node-popover")],c);var O=Object.defineProperty,j=Object.getOwnPropertyDescriptor,g=(e,r,a,i)=>{for(var t=i>1?void 0:i?j(r,a):r,n=e.length-1,o;n>=0;n--)(o=e[n])&&(t=(i?o(r,a,t):o(t))||t);return i&&t&&O(r,a,t),t};let l=class extends u{constructor(){super(...arguments),this.incident=null}openModal(){this.dialogEl.showModal()}closeModal(){this.dialogEl.close()}handleResolve(){this.dispatchEvent(new CustomEvent("incident-resolved",{bubbles:!0,composed:!0})),this.closeModal()}render(){var e,r,a;return s`
      <dialog aria-labelledby="dialog-title" aria-describedby="dialog-desc">
        <div class="modal-header">
          <span class="badge">${((e=this.incident)==null?void 0:e.severity)||"Alert"}</span>
          <h3 id="dialog-title">Telemetry Alert: ${(r=this.incident)==null?void 0:r.nodeId}</h3>
        </div>

        <p class="body" id="dialog-desc">
          ${((a=this.incident)==null?void 0:a.message)||"No active incidents reported."}
        </p>

        <form method="dialog" class="actions">
          <button class="btn btn-secondary" value="cancel">Dismiss</button>
          <button type="button" class="btn btn-primary" @click=${this.handleResolve}>Acknowledge & Triage</button>
        </form>
      </dialog>
    `}};l.styles=b`
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
  `;g([p({type:Object})],l.prototype,"incident",2);g([y("dialog")],l.prototype,"dialogEl",2);l=g([v("incident-modal")],l);var z=Object.defineProperty,L=Object.getOwnPropertyDescriptor,m=(e,r,a,i)=>{for(var t=i>1?void 0:i?L(r,a):r,n=e.length-1,o;n>=0;n--)(o=e[n])&&(t=(i?o(r,a,t):o(t))||t);return i&&t&&z(r,a,t),t};let d=class extends u{constructor(){super(...arguments),this.handleModalResolve=()=>{var e;(e=this.telemetryStore)==null||e.resolveIncident()}}connectedCallback(){var e,r;super.connectedCallback(),!this.authStore&&typeof window<"u"&&((e=window.__AETHER_SHELL__)!=null&&e.authStore)&&(this.authStore=window.__AETHER_SHELL__.authStore),!this.telemetryStore&&typeof window<"u"&&((r=window.__AETHER_SHELL__)!=null&&r.telemetryStore)&&(this.telemetryStore=window.__AETHER_SHELL__.telemetryStore)}willUpdate(e){var r,a,i,t;e.has("authStore")&&((r=e.get("authStore"))==null||r.removeHost(this),(a=this.authStore)==null||a.addHost(this)),e.has("telemetryStore")&&((i=e.get("telemetryStore"))==null||i.removeHost(this),(t=this.telemetryStore)==null||t.addHost(this))}handleOpenModal(){this.modalEl.openModal()}handleSimulateIncident(){var e;(e=this.telemetryStore)==null||e.triggerMockIncident("node-gamma")}render(){var i,t,n;if(!(((i=this.authStore)==null?void 0:i.isAuthenticated)??!1))return s`
        <ui-card
          title="Access Restricted"
          description="You must authenticate at the gateway before accessing real-time telemetry clusters."
          actionLabel="Return to Gateway Login"
          actionHref="index.html"
        ></ui-card>
      `;const r=((t=this.telemetryStore)==null?void 0:t.getIncident())??null,a=((n=this.telemetryStore)==null?void 0:n.getNodes())??[];return s`
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

      ${r?s`
        <div class="incident-alert-banner" role="alert">
          <div>
            <strong>Incident Detected:</strong> ${r.message}
          </div>
          <button class="btn-alert" @click=${this.handleOpenModal}>
            Open Incident Dialog
          </button>
        </div>
      `:null}

      <div class="grid">
        ${a.map(o=>s`
          <div class="card ${o.isCordoned?"status-cordoned":`status-${o.status}`}">
            <div class="node-header">
              <div>
                <div class="node-name">
                  ${o.name}
                  ${o.isCordoned?s`<span style="font-size: 0.7rem; color: var(--color-warning); font-weight: normal; margin-left: 0.35rem;">(Cordoned)</span>`:null}
                </div>
                <div class="node-region">${o.region}</div>
              </div>
            </div>

            <div class="metrics">
              <div class="metric-row">
                <span>CPU Load</span>
                <span>${o.cpuLoad}%</span>
              </div>
              <div class="bar">
                <div
                  class="bar-fill ${o.cpuLoad>85?"critical":o.cpuLoad>70?"warning":""}"
                  style="width: ${o.cpuLoad}%"
                ></div>
              </div>

              <div class="metric-row" style="margin-top: 0.25rem;">
                <span>Memory</span>
                <span>${o.memoryUsage}%</span>
              </div>
              <div class="bar">
                <div
                  class="bar-fill ${o.memoryUsage>85?"critical":o.memoryUsage>70?"warning":""}"
                  style="width: ${o.memoryUsage}%"
                ></div>
              </div>
            </div>

            <div class="card-footer">
              <span style="font-size: 0.75rem; color: var(--color-text-faint);">
                Ping: ${o.latencyMs}ms
              </span>
              <!-- Native Popover element -->
              <node-popover .node=${o}></node-popover>
            </div>
          </div>
        `)}
      </div>

      <!-- Native <dialog> Modal -->
      <incident-modal
        .incident=${r}
        @incident-resolved=${this.handleModalResolve}
      ></incident-modal>
    `}};d.styles=b`
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
    .card.status-cordoned { border-left: 4px solid var(--color-text-faint, #64748b); opacity: 0.75; }

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
  `;m([h({context:w,subscribe:!0}),p({attribute:!1})],d.prototype,"authStore",2);m([h({context:$,subscribe:!0}),p({attribute:!1})],d.prototype,"telemetryStore",2);m([y("incident-modal")],d.prototype,"modalEl",2);d=m([v("telemetry-grid")],d);
