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

  it('persists and restores mute and volume state from sessionStorage', () => {
    store.toggleMute();
    store.setVolume(0.75);

    // Simulate new tab / page hydration
    const newStore = new AudioStore();
    expect(newStore.muted).toBe(true);
    expect(newStore.volume).toBeCloseTo(0.75);
  });

  it('manages telemetry alert threshold states (healthy, warning, critical)', () => {
    expect(store.alertState).toBe('healthy');

    let notifiedState = '';
    store.addEventListener('audio-changed', (e: Event) => {
      notifiedState = (e as CustomEvent).detail.alertState;
    });

    store.setAlertState('warning');
    expect(store.alertState).toBe('warning');
    expect(notifiedState).toBe('warning');

    store.setAlertState('critical');
    expect(store.alertState).toBe('critical');
    expect(notifiedState).toBe('critical');

    store.setAlertState('healthy');
    expect(store.alertState).toBe('healthy');
    expect(notifiedState).toBe('healthy');
  });
});
