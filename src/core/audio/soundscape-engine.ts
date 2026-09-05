/**
 * Web Audio API Soundscape Engine.
 * Generates an ambient sci-fi monitoring drone and occasional sonar pulses.
 * Operates as a resilient singleton so audio survives client-side view transitions.
 */
export class SoundscapeEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private alertInterval: number | null = null;
  private alertState: 'healthy' | 'warning' | 'critical' = 'healthy';
  private isRunning: boolean = false;

  public init(): void {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    this.ctx = new AudioCtx();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  public async start(): Promise<void> {
    this.init();
    if (!this.ctx || !this.masterGain) return;

    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }

    if (this.isRunning) return;
    this.isRunning = true;

    // Ambient Drone 1 (Sub fundamental 55Hz - A1)
    this.droneOsc1 = this.ctx.createOscillator();
    this.droneOsc1.type = 'sine';
    this.droneOsc1.frequency.setValueAtTime(55, this.ctx.currentTime);

    // Filter for warmth
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, this.ctx.currentTime);

    // Ambient Drone 2 (Detuned 55.4Hz for subtle phasing)
    this.droneOsc2 = this.ctx.createOscillator();
    this.droneOsc2.type = 'triangle';
    this.droneOsc2.frequency.setValueAtTime(55.4, this.ctx.currentTime);

    const droneGain = this.ctx.createGain();
    droneGain.gain.setValueAtTime(0.12, this.ctx.currentTime);

    this.droneOsc1.connect(filter);
    this.droneOsc2.connect(filter);
    filter.connect(droneGain);
    droneGain.connect(this.masterGain);

    this.droneOsc1.start();
    this.droneOsc2.start();

    // Start alert loop if warning or critical already active
    this.restartAlertLoop();
  }

  /**
   * Updates threshold state:
   * - healthy: drone only (listening mode)
   * - warning: 2.0 second interval beep overlay
   * - critical: 0.5 second interval beep overlay
   */
  public setAlertState(state: 'healthy' | 'warning' | 'critical'): void {
    if (this.alertState === state) return;
    this.alertState = state;
    if (this.isRunning) {
      this.restartAlertLoop();
    }
  }

  public get currentAlertState(): 'healthy' | 'warning' | 'critical' {
    return this.alertState;
  }

  private restartAlertLoop(): void {
    if (this.alertInterval !== null) {
      clearInterval(this.alertInterval);
      this.alertInterval = null;
    }

    if (this.alertState === 'healthy' || !this.isRunning) {
      return;
    }

    const currentSeverity: 'warning' | 'critical' = this.alertState;
    const intervalMs = currentSeverity === 'critical' ? 500 : 2000;
    // Play immediate beep on transition
    this.playAlertBeep(currentSeverity);

    this.alertInterval = window.setInterval(() => {
      this.playAlertBeep(currentSeverity);
    }, intervalMs);
  }

  private playAlertBeep(severity: 'warning' | 'critical'): void {
    if (!this.ctx || !this.masterGain || !this.isRunning) return;

    const beepOsc = this.ctx.createOscillator();
    const beepGain = this.ctx.createGain();

    // Higher, more urgent tone for critical
    const freq = severity === 'critical' ? 1174.66 : 784.0; // D6 or G5
    const duration = severity === 'critical' ? 0.12 : 0.18;
    const peakVolume = severity === 'critical' ? 0.09 : 0.06;

    beepOsc.type = severity === 'critical' ? 'square' : 'sine';
    beepOsc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    beepGain.gain.setValueAtTime(peakVolume, this.ctx.currentTime);
    beepGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    beepOsc.connect(beepGain);
    beepGain.connect(this.masterGain);

    beepOsc.start();
    beepOsc.stop(this.ctx.currentTime + duration);
  }

  public setVolume(val: number): void {
    if (!this.masterGain || !this.ctx) return;
    const clamped = Math.max(0, Math.min(1, val));
    this.masterGain.gain.setTargetAtTime(clamped, this.ctx.currentTime, 0.05);
  }

  public stop(): void {
    if (!this.isRunning) return;
    this.isRunning = false;

    if (this.alertInterval !== null) {
      clearInterval(this.alertInterval);
      this.alertInterval = null;
    }

    try {
      this.droneOsc1?.stop();
      this.droneOsc2?.stop();
      this.droneOsc1?.disconnect();
      this.droneOsc2?.disconnect();
    } catch {
      // Ignored
    }
  }

  public get running(): boolean {
    return this.isRunning;
  }
}
