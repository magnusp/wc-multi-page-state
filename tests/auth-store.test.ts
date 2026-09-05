import { describe, it, expect, beforeEach } from 'vitest';
import { AuthStore } from '../src/core/store/auth-store.js';
import { MemoryStorage } from '../src/core/store/storage-adapter.js';

describe('AuthStore (Framework-Agnostic Domain Store)', () => {
  let store: AuthStore;

  beforeEach(() => {
    sessionStorage.clear();
    store = new AuthStore();
  });

  it('starts unauthenticated by default', () => {
    expect(store.isAuthenticated).toBe(false);
    expect(store.currentUser).toBeNull();
  });

  it('rejects empty username', () => {
    const res = store.login('   ', 'joshua');
    expect(res.success).toBe(false);
    expect(res.error).toMatch(/username is required/i);
    expect(store.isAuthenticated).toBe(false);
  });

  it('rejects incorrect password', () => {
    const res = store.login('alice', 'wrong-pass');
    expect(res.success).toBe(false);
    expect(res.error).toMatch(/invalid password/i);
    expect(store.isAuthenticated).toBe(false);
  });

  it('authenticates with any username and password "joshua"', () => {
    const res = store.login('operator-7', 'joshua');
    expect(res.success).toBe(true);
    expect(store.isAuthenticated).toBe(true);
    expect(store.currentUser).toBe('operator-7');
  });

  it('hydrates session from sessionStorage (tab duplication simulation)', () => {
    store.login('operator-7', 'joshua');

    // Simulate opening a new/duplicated tab that receives the same sessionStorage
    const duplicatedStore = new AuthStore();
    expect(duplicatedStore.isAuthenticated).toBe(true);
    expect(duplicatedStore.currentUser).toBe('operator-7');
    // Ensure independent tab instance IDs
    expect(duplicatedStore.currentTabId).not.toBe(store.currentTabId);
  });

  it('clears session on logout', () => {
    store.login('operator-7', 'joshua');
    store.logout();
    expect(store.isAuthenticated).toBe(false);
    expect(store.currentUser).toBeNull();
  });

  it('supports dependency injection with custom StorageLike (e.g. MemoryStorage)', () => {
    const memoryStorage = new MemoryStorage();
    const isolatedStore = new AuthStore(memoryStorage);

    isolatedStore.login('isolated-operator', 'joshua');
    expect(isolatedStore.isAuthenticated).toBe(true);
    expect(memoryStorage.getItem('__APP_AUTH_SESSION__')).toContain('isolated-operator');

    // sessionStorage should be unaffected
    expect(sessionStorage.getItem('__APP_AUTH_SESSION__')).toBeNull();

    // Hydrate another store instance from the isolated memoryStorage
    const secondStore = new AuthStore(memoryStorage);
    expect(secondStore.isAuthenticated).toBe(true);
    expect(secondStore.currentUser).toBe('isolated-operator');
  });
});
