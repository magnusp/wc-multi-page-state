import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { authContext, audioContext } from '../core/context/tokens.js';
import type { AuthStore } from '../core/store/auth-store.js';
import type { AudioStore } from '../core/store/audio-store.js';

/**
 * <app-header>: Persistent application header.
 * - Nav links supporting native routing & View Transitions
 * - Web Audio Soundscape controls: Play/Stop, Mute/Unmute, and Volume slider
 * - Auth session status & sign out
 */
@customElement('app-header')
export class AppHeader extends LitElement {
  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  public authStore?: AuthStore;

  @consume({ context: audioContext, subscribe: true })
  @property({ attribute: false })
  public audioStore?: AudioStore;

  @state() private isAudioPlaying = false;
  @state() private isAudioMuted = false;
  @state() private audioVolume = 0.3;
  @state() private currentUser: string | null = null;

  private onAuthChanged = (e: Event) => {
    this.currentUser = (e as CustomEvent).detail.user;
  };

  private onAudioChanged = (e: Event) => {
    const d = (e as CustomEvent).detail;
    this.isAudioPlaying = d.isPlaying;
    this.isAudioMuted = d.muted;
    this.audioVolume = d.volume;
  };

  connectedCallback(): void {
    super.connectedCallback();
    this.syncStores();
  }

  willUpdate(changedProps: Map<string, unknown>): void {
    if (changedProps.has('authStore') || changedProps.has('audioStore')) {
      this.syncStores();
    }
  }

  private syncStores(): void {
    const auth = this.authStore || window.__AETHER_SHELL__?.authStore;
    if (auth) {
      this.currentUser = auth.currentUser;
      auth.removeEventListener('auth-changed', this.onAuthChanged);
      auth.addEventListener('auth-changed', this.onAuthChanged);
    }
    const audio = this.audioStore || window.__AETHER_SHELL__?.audioStore;
    if (audio) {
      this.isAudioPlaying = audio.isPlaying;
      this.isAudioMuted = audio.muted;
      this.audioVolume = audio.volume;
      audio.removeEventListener('audio-changed', this.onAudioChanged);
      audio.addEventListener('audio-changed', this.onAudioChanged);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.authStore) {
      this.authStore.removeEventListener('auth-changed', this.onAuthChanged);
    }
    if (this.audioStore) {
      this.audioStore.removeEventListener('audio-changed', this.onAudioChanged);
    }
  }

  static styles = css`
    :host {
      display: block;
      background: var(--color-bg-surface, #111726);
      border-bottom: 1px solid var(--color-border, #24304d);
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0.85rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-weight: 700;
      font-size: 1.15rem;
      color: var(--color-text-main, #f8fafc);
      text-decoration: none;
    }

    .brand-icon {
      color: var(--color-primary, #38bdf8);
      font-size: 1.25rem;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    nav a {
      color: var(--color-text-muted, #94a3b8);
      font-size: 0.9rem;
      font-weight: 500;
      transition: color var(--transition-speed, 200ms);
    }

    nav a:hover {
      color: var(--color-primary, #38bdf8);
      text-decoration: none;
    }

    .controls-group {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .audio-controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--color-bg-base, #0a0d14);
      padding: 0.35rem 0.65rem;
      border-radius: var(--radius-md, 8px);
      border: 1px solid var(--color-border, #24304d);
    }

    .btn-ctrl {
      background: transparent;
      border: none;
      color: var(--color-text-muted, #94a3b8);
      cursor: pointer;
      font-size: 0.85rem;
      padding: 0.2rem 0.4rem;
      border-radius: var(--radius-sm, 4px);
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .btn-ctrl:hover {
      color: var(--color-text-main, #f8fafc);
    }

    .btn-ctrl.active {
      color: var(--color-primary, #38bdf8);
    }

    .btn-ctrl.muted {
      color: var(--color-danger, #f87171);
    }

    .volume-slider {
      width: 60px;
      height: 4px;
      accent-color: var(--color-primary, #38bdf8);
      cursor: pointer;
    }

    .user-pill {
      font-size: 0.8rem;
      color: var(--color-text-muted, #94a3b8);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .btn-nav-terminate {
      background: transparent;
      border: 1px solid var(--color-danger, #f87171);
      color: var(--color-danger, #f87171);
      border-radius: var(--radius-sm, 4px);
      padding: 0.25rem 0.6rem;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
      transition: background var(--transition-speed, 200ms), color var(--transition-speed, 200ms);
    }

    .btn-nav-terminate:hover {
      background: rgba(248, 113, 113, 0.15);
      color: var(--color-danger, #f87171);
    }

    .btn-logout {
      background: transparent;
      border: 1px solid var(--color-border, #24304d);
      color: var(--color-text-faint, #64748b);
      border-radius: var(--radius-sm, 4px);
      padding: 0.2rem 0.5rem;
      font-size: 0.75rem;
      cursor: pointer;
    }

    .btn-logout:hover {
      color: var(--color-danger, #f87171);
      border-color: var(--color-danger, #f87171);
    }
  `;

  private async toggleAudio() {
    await this.audioStore?.togglePlay();
  }

  private toggleMute() {
    this.audioStore?.toggleMute();
  }

  private handleVolume(e: Event) {
    const val = parseFloat((e.target as HTMLInputElement).value);
    this.audioStore?.setVolume(val);
  }

  private handleLogout() {
    this.authStore?.logout();
    // Navigate back to index
    this.dispatchEvent(new CustomEvent('request-navigation', {
      bubbles: true,
      composed: true,
      detail: { url: 'index.html' }
    }));
  }

  render() {
    return html`
      <div class="header-inner">
        <a href="index.html" class="brand" aria-label="AetherWatch Home">
          <span class="brand-icon">⬡</span>
          <span>AetherWatch</span>
        </a>

        <nav aria-label="Main Navigation">
          <a href="index.html">Gateway</a>
          <a href="showcase.html">Standards Showcase</a>
          ${this.currentUser ? html`
            <a href="dashboard.html">Telemetry</a>
            <a href="dashboard-nodes.html">Nodes</a>
            <button
              type="button"
              class="btn-nav-terminate"
              @click=${this.handleLogout}
              aria-label="Terminate active operator session"
              title="Terminate active session"
            >
              Terminate Session
            </button>
          ` : null}
        </nav>

        <div class="controls-group">
          <!-- Web Audio Soundscape Controls -->
          <div class="audio-controls" role="toolbar" aria-label="Soundscape Controls">
            <button
              class="btn-ctrl ${this.isAudioPlaying ? 'active' : ''}"
              @click=${this.toggleAudio}
              aria-label="${this.isAudioPlaying ? 'Stop ambient audio' : 'Start ambient audio'}"
              title="${this.isAudioPlaying ? 'Stop ambient audio' : 'Start ambient audio'}"
            >
              ${this.isAudioPlaying ? '■ Audio On' : '▶ Audio Off'}
            </button>

            <button
              class="btn-ctrl ${this.isAudioMuted ? 'muted' : ''}"
              @click=${this.toggleMute}
              ?disabled=${!this.isAudioPlaying}
              aria-label="${this.isAudioMuted ? 'Unmute audio' : 'Mute audio'}"
              title="${this.isAudioMuted ? 'Unmute audio' : 'Mute audio'}"
            >
              ${this.isAudioMuted ? '🔇 Muted' : '🔊 Sound'}
            </button>

            <label for="soundscape-vol" class="visually-hidden" style="display:none;">Volume</label>
            <input
              id="soundscape-vol"
              type="range"
              min="0"
              max="1"
              step="0.05"
              class="volume-slider"
              .value=${this.audioVolume}
              @input=${this.handleVolume}
              ?disabled=${!this.isAudioPlaying}
              aria-label="Soundscape Volume"
            />
          </div>

          ${this.currentUser ? html`
            <div class="user-pill">
              <span>👤 ${this.currentUser}</span>
              <button class="btn-logout" @click=${this.handleLogout}>Sign Out</button>
            </div>
          ` : null}
        </div>
      </div>
    `;
  }
}
