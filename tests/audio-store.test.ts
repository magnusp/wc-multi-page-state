import { describe, it, expect, beforeEach } from 'vitest';
import { AudioStore } from '../src/core/store/audio-store.js';
import { MemoryStorage } from '../src/core/store/storage-adapter.js';

describe('AudioStore', () => {
  let store: AudioStore;

  beforeEach(() => {
    sessionStorage.clear();
    store = new AudioStore();
  });

  it('initializes in unmuted state with default volume and audio enabled', () => {
    expect(store.isPlaying).toBe(false);
    expect(store.isAudioEnabled).toBe(true);
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

  it('handles stop and start explicitly', () => {
    store.stop();
    expect(store.isAudioEnabled).toBe(false);
    expect(store.isPlaying).toBe(false);

    store.start();
    expect(store.isAudioEnabled).toBe(true);
  });

  it('persists and restores audio preferences from sessionStorage', () => {
    store.stop();
    store.toggleMute();
    store.setVolume(0.75);

    // Simulate new tab / page hydration
    const newStore = new AudioStore();
    expect(newStore.isAudioEnabled).toBe(false);
    expect(newStore.muted).toBe(true);
    expect(newStore.volume).toBeCloseTo(0.75);
  });

  it('supports dependency injection with custom StorageLike (e.g. MemoryStorage)', () => {
    const memoryStorage = new MemoryStorage();
    const isolatedStore = new AudioStore(memoryStorage);

    isolatedStore.stop();
    isolatedStore.toggleMute();
    isolatedStore.setVolume(0.85);

    expect(memoryStorage.getItem('__APP_AUDIO_PREFS__')).toContain('"volume":0.85');
    expect(sessionStorage.getItem('__APP_AUDIO_PREFS__')).toBeNull();

    const secondStore = new AudioStore(memoryStorage);
    expect(secondStore.isAudioEnabled).toBe(false);
    expect(secondStore.muted).toBe(true);
    expect(secondStore.volume).toBeCloseTo(0.85);
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

  it('supports ReactiveController host registration and notifies hosts on changes', () => {
    let updateRequestedCount = 0;
    let registeredController: any = null;

    const mockHost: any = {
      addController: (ctrl: any) => {
        registeredController = ctrl;
      },
      requestUpdate: () => {
        updateRequestedCount++;
      }
    };

    store.addHost(mockHost);
    expect(updateRequestedCount).toBe(1);

    store.toggleMute();
    expect(updateRequestedCount).toBe(2);

    store.setVolume(0.8);
    expect(updateRequestedCount).toBe(3);

    store.setAlertState('warning');
    expect(updateRequestedCount).toBe(4);

    if (registeredController && typeof registeredController.hostDisconnected === 'function') {
      registeredController.hostDisconnected();
    }
    store.toggleMute();
    expect(updateRequestedCount).toBe(4);
  });
});
