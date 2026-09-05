import{i as u,c as m,a as b,n as p,b as h,d as c,e as g}from"./app-shell-BuqjQtet.js";import{r as d}from"./state-BfeY6vWZ.js";var v=Object.defineProperty,f=Object.getOwnPropertyDescriptor,n=(e,r,t,s)=>{for(var a=s>1?void 0:s?f(r,t):r,i=e.length-1,l;i>=0;i--)(l=e[i])&&(a=(s?l(r,t,a):l(a))||a);return s&&a&&v(r,t,a),a};let o=class extends h{constructor(){super(),this.username="",this.password="",this.errorMessage="",this.isSubmitting=!1,typeof this.attachInternals=="function"&&(this.internals=this.attachInternals())}connectedCallback(){var e;super.connectedCallback(),!this.authStore&&typeof window<"u"&&((e=window.__AETHER_SHELL__)!=null&&e.authStore)&&(this.authStore=window.__AETHER_SHELL__.authStore)}willUpdate(e){var r,t;e.has("authStore")&&((r=e.get("authStore"))==null||r.removeHost(this),(t=this.authStore)==null||t.addHost(this))}handleUsernameChange(e){this.username=e.target.value,this.errorMessage="",this.updateFormValidity()}handlePasswordChange(e){this.password=e.target.value,this.errorMessage="",this.updateFormValidity()}updateFormValidity(){var e,r,t,s,a,i;(r=(e=this.internals)==null?void 0:e.setFormValue)==null||r.call(e,`${this.username}`),this.username?(i=(a=this.internals)==null?void 0:a.setValidity)==null||i.call(a,{}):(s=(t=this.internals)==null?void 0:t.setValidity)==null||s.call(t,{valueMissing:!0},"Username is required")}handleSubmit(e){var s;e.preventDefault();const r=this.authStore||(typeof window<"u"?(s=window.__AETHER_SHELL__)==null?void 0:s.authStore:void 0);if(!r)return;this.isSubmitting=!0;const t=r.login(this.username,this.password);this.isSubmitting=!1,t.success?this.dispatchEvent(new CustomEvent("login-success",{bubbles:!0,composed:!0,detail:{username:this.username}})):this.errorMessage=t.error||"Authentication failed."}handleTerminateSession(){var r;const e=this.authStore||(typeof window<"u"?(r=window.__AETHER_SHELL__)==null?void 0:r.authStore:void 0);e==null||e.logout()}render(){var t,s;const e=(t=this.authStore)==null?void 0:t.currentUser,r=(s=this.authStore)==null?void 0:s.currentTabId;return e?c`
        <div class="card" role="region" aria-label="Active Session Established">
          <div class="session-badge">
            <span>●</span> Active Session Established
          </div>

          <h2 class="title">Welcome, ${e}</h2>
          <p class="subtitle">An authenticated operator session is currently active.</p>

          <div class="session-info">
            <div class="session-row">
              <span class="label">Operator:</span>
              <span class="value">${e}</span>
            </div>
            <div class="session-row">
              <span class="label">Tab Instance:</span>
              <span class="value">${r?r.slice(0,14)+"…":"current-tab"}</span>
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
      `:c`
      <div class="card" role="region" aria-label="Sign In Portal">
        <h2 class="title">Gateway Access</h2>
        <p class="subtitle">Authenticate to view live node telemetry</p>

        ${this.errorMessage?c`
          <div class="error-box" role="alert">
            ${this.errorMessage}
          </div>
        `:null}

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
            ${this.isSubmitting?"Verifying...":"Establish Session"}
          </button>
        </form>

        <p class="hint">Standards Demo: Any username accepted. Security key is <code>joshua</code>.</p>
      </div>
    `}};o.formAssociated=!0;o.styles=u`
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
  `;n([m({context:b,subscribe:!0}),p({attribute:!1})],o.prototype,"authStore",2);n([d()],o.prototype,"username",2);n([d()],o.prototype,"password",2);n([d()],o.prototype,"errorMessage",2);n([d()],o.prototype,"isSubmitting",2);o=n([g("login-panel")],o);
