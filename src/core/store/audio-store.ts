import { SoundscapeEngine } from '../audio/soundscape-engine.js';

export interface AudioPreferences {
  muted: boolean;
  volume: number;
}

/**
 * AudioStore: Coordinates soundscape playback state, mute status, and volume.
 * Persists user mute and volume preferences to sessionStorage so state is
 * retained across page transitions, hard refreshes, and tab duplication.
 * Emits events via EventTarget.
 */
export class AudioStore extends EventTarget {
  private static readonly STORAGE_KEY = '__APP_AUDIO_PREFS__';
  private engine: SoundscapeEngine;
  private isMuted: boolean = false;
  private volumeLevel: number = 0.3;

  constructor() {
    super();
    this.engine = new SoundscapeEngine();
    this.hydrateFromStorage();
  }

  private hydrateFromStorage(): void {
    try {
      const raw = sessionStorage.getItem(AudioStore.STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<AudioPreferences>;
        if (typeof parsed.muted === 'boolean') {
          this.isMuted = parsed.muted;
        }
        if (typeof parsed.volume === 'number') {
          this.volumeLevel = Math.max(0, Math.min(1, parsed.volume));
        }
      }
    } catch {
      // Storage unavailable or disabled
    }
  }

  private saveToStorage(): void {
    try {
      const prefs: AudioPreferences = {
        muted: this.isMuted,
        volume: this.volumeLevel
      };
      sessionStorage.setItem(AudioStore.STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // Ignore
    }
  }

  public get isPlaying(): boolean {
    return this.engine.running;
  }

  public get muted(): boolean {
    return this.isMuted;
  }

  public get volume(): number {
    return this.volumeLevel;
  }

  public async togglePlay(): Promise<void> {
    if (this.engine.running) {
      this.engine.stop();
    } else {
      await this.engine.start();
      this.engine.setVolume(this.isMuted ? 0 : this.volumeLevel);
    }
    this.notifyState();
  }

  public toggleMute(): void {
    this.isMuted = !this.isMuted;
    this.engine.setVolume(this.isMuted ? 0 : this.volumeLevel);
    this.saveToStorage();
    this.notifyState();
  }

  public setAlertState(state: 'healthy' | 'warning' | 'critical'): void {
    this.engine.setAlertState(state);
    this.notifyState();
  }

  public get alertState(): 'healthy' | 'warning' | 'critical' {
    return this.engine.currentAlertState;
  }

  public setVolume(newVolume: number): void {
    this.volumeLevel = Math.max(0, Math.min(1, newVolume));
    if (!this.isMuted) {
      this.engine.setVolume(this.volumeLevel);
    }
    this.saveToStorage();
    this.notifyState();
  }

  private notifyState(): void {
    this.dispatchEvent(new CustomEvent('audio-changed', {
      detail: {
        isPlaying: this.engine.running,
        muted: this.isMuted,
        volume: this.volumeLevel,
        alertState: this.engine.currentAlertState
      }
    }));
  }
}
