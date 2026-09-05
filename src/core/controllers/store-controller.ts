import type { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * StoreController: Generic Reactive Controller connecting any EventTarget store
 * to a Lit host element. Automatically triggers host.requestUpdate() on store events,
 * and manages subscription lifecycle across host connection/disconnection.
 */
export class StoreController<T extends EventTarget = EventTarget> implements ReactiveController {
  private host: ReactiveControllerHost;
  private _store?: T;
  private eventNames: string[];
  private isConnected = false;

  constructor(host: ReactiveControllerHost, store?: T, eventNames: string | string[] = []) {
    this.host = host;
    this._store = store;
    this.eventNames = Array.isArray(eventNames) ? eventNames : [eventNames];
    host.addController(this);
  }

  private handleEvent = (): void => {
    this.host.requestUpdate();
  };

  public get store(): T | undefined {
    return this._store;
  }

  public setStore(store?: T): void {
    if (this._store === store) return;
    if (this.isConnected) {
      this.unbind();
    }
    this._store = store;
    if (this.isConnected) {
      this.bind();
    }
    this.host.requestUpdate();
  }

  private bind(): void {
    if (!this._store) return;
    for (const evt of this.eventNames) {
      this._store.addEventListener(evt, this.handleEvent);
    }
  }

  private unbind(): void {
    if (!this._store) return;
    for (const evt of this.eventNames) {
      this._store.removeEventListener(evt, this.handleEvent);
    }
  }

  hostConnected(): void {
    this.isConnected = true;
    this.bind();
  }

  hostDisconnected(): void {
    this.isConnected = false;
    this.unbind();
  }
}
