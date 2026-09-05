import { describe, it, expect, beforeEach } from 'vitest';
import { AudioStore } from '../src/core/store/audio-store.js';

describe('AudioStore', () => {
  let store: AudioStore;

  beforeEach(() => {
    store = new AudioStore();
  });

  it('initializes in stopped and unmuted state with default volume', () => {
    expect(store.isPlaying).toBe(false);
    expect(store.muted).toBe(false);
    expect(store.volume).toBeCloseTo(0.3);
  });

  it('toggles mute correctly', () => {
    store.toggleMute();
    expect(store.muted).toBe(true);

    store.toggleMute();
    expect(store.muted).toBe(false);
  });

  it('clamps volume levels between 0 and 1', () => {
    store.setVolume(1.5);
    expect(store.volume).toBe(1.0);

    store.setVolume(-0.2);
    expect(store.volume).toBe(0.0);

    store.setVolume(0.65);
    expect(store.volume).toBeCloseTo(0.65);
  });
});
