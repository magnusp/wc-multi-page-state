/**
 * StorageLike interface compatible with browser Storage (localStorage, sessionStorage).
 */
export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

/**
 * In-memory fallback implementation of StorageLike for test isolation,
 * SSR/Node environments, or private browsing modes where storage access throws.
 */
export class MemoryStorage implements StorageLike {
  private store = new Map<string, string>();

  public getItem(key: string): string | null {
    return this.store.has(key) ? this.store.get(key)! : null;
  }

  public setItem(key: string, value: string): void {
    this.store.set(key, String(value));
  }

  public removeItem(key: string): void {
    this.store.delete(key);
  }

  public clear(): void {
    this.store.clear();
  }
}

/**
 * Safely resolves default storage (sessionStorage if available, otherwise MemoryStorage).
 */
export function getDefaultStorage(): StorageLike {
  try {
    if (typeof sessionStorage !== 'undefined') {
      const testKey = '__storage_test__';
      sessionStorage.setItem(testKey, '1');
      sessionStorage.removeItem(testKey);
      return sessionStorage;
    }
  } catch {
    // Storage access blocked or unavailable
  }
  return new MemoryStorage();
}
