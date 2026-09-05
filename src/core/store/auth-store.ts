export interface UserSession {
  username: string;
  authenticatedAt: number;
  tabId: string;
}

/**
 * AuthStore: Framework-agnostic domain store using standard EventTarget.
 * Manages authentication, validation (password === 'joshua'),
 * sessionStorage synchronization, and multi-tab isolation.
 */
export class AuthStore extends EventTarget {
  private static readonly STORAGE_KEY = '__APP_AUTH_SESSION__';
  private session: UserSession | null = null;
  public readonly currentTabId: string;

  constructor() {
    super();
    // Unique tab instance ID per window context
    this.currentTabId = `tab_${Math.random().toString(36).slice(2, 9)}_${Date.now()}`;
    this.hydrateFromStorage();
  }

  /**
   * Hydrates session from sessionStorage.
   * Transparently handles tab duplication: if a tab was duplicated by browser,
   * sessionStorage is cloned automatically; we adopt the credentials under our unique tabId.
   */
  private hydrateFromStorage(): void {
    try {
      const raw = sessionStorage.getItem(AuthStore.STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed.username === 'string') {
          this.session = {
            username: parsed.username,
            authenticatedAt: parsed.authenticatedAt || Date.now(),
            tabId: this.currentTabId
          };
        }
      }
    } catch {
      this.session = null;
    }
  }

  public get isAuthenticated(): boolean {
    return this.session !== null;
  }

  public get currentUser(): string | null {
    return this.session?.username ?? null;
  }

  public get activeSession(): UserSession | null {
    return this.session ? { ...this.session } : null;
  }

  /**
   * Validates credentials and logs in.
   * Requirement: Any non-empty username is valid, password must be "joshua".
   */
  public login(username: string, password: string): { success: boolean; error?: string } {
    const trimmedUser = username.trim();
    if (!trimmedUser) {
      return { success: false, error: 'Username is required.' };
    }
    if (password !== 'joshua') {
      return { success: false, error: 'Invalid password. (Hint: password is "joshua")' };
    }

    this.session = {
      username: trimmedUser,
      authenticatedAt: Date.now(),
      tabId: this.currentTabId
    };

    try {
      sessionStorage.setItem(AuthStore.STORAGE_KEY, JSON.stringify(this.session));
    } catch {
      // Storage quota or disabled fallback
    }

    this.dispatchEvent(new CustomEvent('auth-changed', { detail: { isAuthenticated: true, user: trimmedUser } }));
    return { success: true };
  }

  public logout(): void {
    this.session = null;
    try {
      sessionStorage.removeItem(AuthStore.STORAGE_KEY);
    } catch {
      // Ignore
    }
    this.dispatchEvent(new CustomEvent('auth-changed', { detail: { isAuthenticated: false, user: null } }));
  }
}
