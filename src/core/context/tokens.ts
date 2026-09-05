import { createContext } from '@lit/context';
import type { AuthStore } from '../store/auth-store.js';
import type { TelemetryStore } from '../store/telemetry-store.js';
import type { AudioStore } from '../store/audio-store.js';

/**
 * W3C Context Protocol Tokens.
 * These symbols act as standard DOM context-request tokens.
 */
export const authContext = createContext<AuthStore>(Symbol('auth-context'));
export const telemetryContext = createContext<TelemetryStore>(Symbol('telemetry-context'));
export const audioContext = createContext<AudioStore>(Symbol('audio-context'));
