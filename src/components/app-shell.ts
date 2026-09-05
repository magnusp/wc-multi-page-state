import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { authContext, telemetryContext, audioContext } from '../core/context/tokens.js';
import { AuthStore } from '../core/store/auth-store.js';
import { TelemetryStore } from '../core/store/telemetry-store.js';
import { AudioStore } from '../core/store/audio-store.js';
import { ViewRouter } from '../core/router/view-router.js';

// Register companion components
import './app-header.js';
import './login-panel.js';
import './telemetry-grid.js';
import './nodes-view.js';
import './ui-card.js';

declare global {
  interface Window {
    __SHELL_BOOTED__?: boolean;
    __AETHER_SHELL__?: AppShell;
  }
}

// Suppress known Chromium DevTools issue #543499029 / web-vitals #792:
// DevTools injects an embedded copy of web-vitals that crashes during soft navigations
// with "TypeError: Cannot read properties of undefined (reading 'startTime')"
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    if (
      event.message?.includes("Cannot read properties of undefined (reading 'startTime')") ||
      (event.error instanceof TypeError && event.error.message?.includes("'startTime'"))
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return true;
    }
  }, true);

  window.addEventListener('unhandledrejection', (event) => {
    if (
      event.reason?.message?.includes("Cannot read properties of undefined (reading 'startTime')") ||
      (event.reason instanceof TypeError && event.reason.message?.includes("'startTime'"))
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);
}

/**
 * <app-shell>: Root orchestrator component.
 * - Provides W3C DOM Context for Auth, Telemetry, and Audio
 * - Boots client-side router with native View Transitions
 * - Ensures single singleton runtime even during page transitions
 */
@customElement('app-shell')
export class AppShell extends LitElement {
  @provide({ context: authContext })
  @property({ attribute: false })
  public authStore: AuthStore;

  @provide({ context: telemetryContext })
  @property({ attribute: false })
  public telemetryStore: TelemetryStore;

  @provide({ context: audioContext })
  @property({ attribute: false })
  public audioStore: AudioStore;

  public router: ViewRouter;

  constructor() {
    super();

    // Preserve singleton instances if window shell already initialized
    if (window.__AETHER_SHELL__) {
      this.authStore = window.__AETHER_SHELL__.authStore;
      this.telemetryStore = window.__AETHER_SHELL__.telemetryStore;
      this.audioStore = window.__AETHER_SHELL__.audioStore;
      this.router = window.__AETHER_SHELL__.router;
    } else {
      this.authStore = new AuthStore();
      this.telemetryStore = new TelemetryStore();
      this.audioStore = new AudioStore();
      this.router = new ViewRouter();
      
      // Global navigation guard: block protected dashboard routes if unauthenticated
      this.router.addGuard((targetUrl: string) => {
        const cleanPath = targetUrl.split('?')[0].split('#')[0].split('/').pop() || 'index.html';
        const isProtected = cleanPath === 'dashboard.html' || cleanPath === 'dashboard-nodes.html';
        if (isProtected && !this.authStore.isAuthenticated) {
          return 'index.html';
        }
        return true;
      });

      window.__AETHER_SHELL__ = this;
      window.__SHELL_BOOTED__ = true;

      // Coordinate telemetry thresholds with Web Audio soundscape:
      // - Active, uncordoned nodes drive cluster alarm status:
      // - If any active node is 'critical' -> setAlertState('critical') (0.5s beep interval)
      // - Else if any active node is 'warning' -> setAlertState('warning') (2.0s beep interval)
      // - Else -> setAlertState('healthy') (ambient drone only)
      this.telemetryStore.addEventListener('telemetry-tick', (e: Event) => {
        const nodes = (e as CustomEvent).detail.nodes;
        this.evaluateClusterAlarm(nodes);
      });
    }

    // Evaluate initial cluster metrics immediately on instantiation
    this.evaluateClusterAlarm(this.telemetryStore.getNodes());
  }

  private evaluateClusterAlarm(nodes: Array<{ status: 'healthy' | 'warning' | 'critical'; isCordoned?: boolean }>): void {
    const activeNodes = (nodes || []).filter(n => !n.isCordoned);
    if (activeNodes.some(n => n.status === 'critical')) {
      this.audioStore.setAlertState('critical');
    } else if (activeNodes.some(n => n.status === 'warning')) {
      this.audioStore.setAlertState('warning');
    } else {
      this.audioStore.setAlertState('healthy');
    }
  }

  connectedCallback(): void {
    super.connectedCallback();

    // Re-evaluate cluster alarm whenever shell connects to DOM
    this.evaluateClusterAlarm(this.telemetryStore.getNodes());

    // Listen for custom navigation requests
    this.addEventListener('request-navigation', (e: Event) => {
      const url = (e as CustomEvent).detail.url;
      this.router.navigate(url);
    });

    // Listen for successful login events from <login-panel>
    this.addEventListener('login-success', () => {
      this.router.navigate('dashboard.html');
    });

    // Listen to auth changes to immediately bounce from protected routes upon sign-out
    this.authStore.addEventListener('auth-changed', () => {
      this.verifyRouteProtection();
    });

    // Verify initial route protection on page boot
    this.verifyRouteProtection();
  }

  private verifyRouteProtection(): void {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const isProtectedRoute = path === 'dashboard.html' || path === 'dashboard-nodes.html';
    if (isProtectedRoute && !this.authStore.isAuthenticated) {
      this.router.navigate('index.html');
    }
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;

  render() {
    return html`
      <div class="app-layout">
        <app-header></app-header>
        <slot></slot>
      </div>
    `;
  }
}
