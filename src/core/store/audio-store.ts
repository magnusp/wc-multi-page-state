import { SoundscapeEngine } from '../audio/soundscape-engine.js';

/**
 * AudioStore: Coordinates soundscape playback state, mute status, and volume.
 * Emits events via EventTarget.
 */
export class AudioStore extends EventTarget {
  private engine: SoundscapeEngine;
  private isMuted: boolean = false;
  private volumeLevel: number = 0.3;

  constructor() {
    super();
    this.engine = new SoundscapeEngine();
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
    this.notifyState();
  }

  public setVolume(newVolume: number): void {
    this.volumeLevel = Math.max(0, Math.min(1, newVolume));
    if (!this.isMuted) {
      this.engine.setVolume(this.volumeLevel);
    }
    this.notifyState();
  }

  private notifyState(): void {
    this.dispatchEvent(new CustomEvent('audio-changed', {
      detail: {
        isPlaying: this.engine.running,
        muted: this.isMuted,
        volume: this.volumeLevel
      }
    }));
  }
}
