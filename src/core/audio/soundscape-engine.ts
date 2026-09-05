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
  private sonarInterval: number | null = null;
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

    // Occasional Sonar / Telemetry pulse every 7 seconds
    this.sonarInterval = window.setInterval(() => {
      this.playSonarPing();
    }, 7000);
  }

  private playSonarPing(): void {
    if (!this.ctx || !this.masterGain || !this.isRunning) return;

    const pingOsc = this.ctx.createOscillator();
    const pingGain = this.ctx.createGain();

    pingOsc.type = 'sine';
    pingOsc.frequency.setValueAtTime(880, this.ctx.currentTime); // A5 ping
    pingOsc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 0.8);

    pingGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    pingGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.9);

    pingOsc.connect(pingGain);
    pingGain.connect(this.masterGain);

    pingOsc.start();
    pingOsc.stop(this.ctx.currentTime + 1.0);
  }

  public setVolume(val: number): void {
    if (!this.masterGain || !this.ctx) return;
    const clamped = Math.max(0, Math.min(1, val));
    this.masterGain.gain.setTargetAtTime(clamped, this.ctx.currentTime, 0.05);
  }

  public stop(): void {
    if (!this.isRunning) return;
    this.isRunning = false;

    if (this.sonarInterval !== null) {
      clearInterval(this.sonarInterval);
      this.sonarInterval = null;
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
