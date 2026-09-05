import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { AuthStore } from '../src/core/store/auth-store.js';
import { AudioStore } from '../src/core/store/audio-store.js';
import { TelemetryStore } from '../src/core/store/telemetry-store.js';
import { LoginPanel } from '../src/components/login-panel.js';
import { NodesView } from '../src/components/nodes-view.js';
import { TelemetryGrid } from '../src/components/telemetry-grid.js';
import { AppHeader } from '../src/components/app-header.js';

describe('Components with ReactiveController store integration', () => {
  let authStore: AuthStore;
  let telemetryStore: TelemetryStore;
  let audioStore: AudioStore;

  beforeEach(() => {
    sessionStorage.clear();
    authStore = new AuthStore();
    telemetryStore = new TelemetryStore();
    audioStore = new AudioStore();
  });

  afterEach(() => {
    telemetryStore.destroy();
    document.body.innerHTML = '';
  });

  describe('AppHeader', () => {
    it('exposes accessible volume label without display:none and with visually-hidden class', async () => {
      const header = new AppHeader();
      header.authStore = authStore;
      header.audioStore = audioStore;
      document.body.appendChild(header);
      await header.updateComplete;

      const label = header.shadowRoot?.querySelector('label[for="soundscape-vol"]');
      expect(label).not.toBeNull();
      expect(label?.classList.contains('visually-hidden')).toBe(true);
      expect(label?.getAttribute('style')).toBeNull();
      expect(label?.textContent?.trim()).toBe('Volume');

      const slider = header.shadowRoot?.querySelector('#soundscape-vol');
      expect(slider).not.toBeNull();

      header.remove();
    });

    it('reacts to authStore and audioStore changes without intermediate duplicate state', async () => {
      const header = new AppHeader();
      header.authStore = authStore;
      header.audioStore = audioStore;
      document.body.appendChild(header);
      await header.updateComplete;

      // Initially not logged in
      expect(header.shadowRoot?.querySelector('.user-pill')).toBeNull();
      expect(header.shadowRoot?.querySelector('.btn-ctrl.muted')).toBeNull();

      // Log in
      authStore.login('commander-zero', 'joshua');
      await header.updateComplete;

      expect(header.shadowRoot?.querySelector('.user-pill')?.textContent).toContain('commander-zero');

      // Mute audio
      audioStore.toggleMute();
      await header.updateComplete;

      expect(header.shadowRoot?.querySelector('.btn-ctrl.muted')).not.toBeNull();

      // Log out
      authStore.logout();
      await header.updateComplete;

      expect(header.shadowRoot?.querySelector('.user-pill')).toBeNull();

      header.remove();
    });
  });

  describe('LoginPanel', () => {
    it('reacts to authStore changes via addHost and re-renders without intermediate @state()', async () => {
      const panel = new LoginPanel();
      panel.authStore = authStore;
      document.body.appendChild(panel);
      await panel.updateComplete;

      // Initially unauthenticated
      expect(panel.shadowRoot?.querySelector('form')).not.toBeNull();
      expect(panel.shadowRoot?.querySelector('.session-badge')).toBeNull();

      // Log in via store - host.requestUpdate() triggered via notifyHosts()
      authStore.login('operator-test', 'joshua');
      await panel.updateComplete;

      expect(panel.shadowRoot?.querySelector('.session-badge')).not.toBeNull();
      expect(panel.shadowRoot?.textContent).toContain('operator-test');

      // Log out
      authStore.logout();
      await panel.updateComplete;

      expect(panel.shadowRoot?.querySelector('form')).not.toBeNull();
      expect(panel.shadowRoot?.querySelector('.session-badge')).toBeNull();

      // Disconnect panel
      panel.remove();
      // Verifying no errors on subsequent store operations
      authStore.login('operator-test2', 'joshua');
    });
  });

  describe('NodesView', () => {
    it('reacts to telemetry updates directly from store without duplicate intermediate state', async () => {
      authStore.login('operator-test', 'joshua');

      const view = new NodesView();
      view.authStore = authStore;
      view.telemetryStore = telemetryStore;
      document.body.appendChild(view);
      await view.updateComplete;

      const rows = view.shadowRoot?.querySelectorAll('tbody tr');
      expect(rows?.length).toBe(4);

      // Cordon node-alpha
      telemetryStore.toggleCordon('node-alpha');
      await view.updateComplete;

      const cordonedBadge = view.shadowRoot?.querySelector('.status-cordoned');
      expect(cordonedBadge).not.toBeNull();
      expect(cordonedBadge?.textContent?.trim()).toBe('DRAINING');

      // Disconnect
      view.remove();
    });

    it('displays access restricted when unauthenticated', async () => {
      const view = new NodesView();
      view.authStore = authStore;
      view.telemetryStore = telemetryStore;
      document.body.appendChild(view);
      await view.updateComplete;

      expect(view.shadowRoot?.querySelector('ui-card')).not.toBeNull();
    });
  });

  describe('TelemetryGrid', () => {
    it('reacts to incident triggers and resolves directly from store', async () => {
      authStore.login('operator-test', 'joshua');

      const grid = new TelemetryGrid();
      grid.authStore = authStore;
      grid.telemetryStore = telemetryStore;
      document.body.appendChild(grid);
      await grid.updateComplete;

      expect(grid.shadowRoot?.querySelector('.incident-alert-banner')).toBeNull();

      telemetryStore.triggerMockIncident('node-gamma');
      await grid.updateComplete;

      expect(grid.shadowRoot?.querySelector('.incident-alert-banner')).not.toBeNull();
      expect(grid.shadowRoot?.textContent).toContain('Incident Detected');

      telemetryStore.resolveIncident();
      await grid.updateComplete;

      expect(grid.shadowRoot?.querySelector('.incident-alert-banner')).toBeNull();

      // Disconnect
      grid.remove();
    });
  });
});
