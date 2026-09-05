/**
 * ViewRouter: Native-first navigation handler.
 * - Supports relative static page paths, index links, and file:// execution.
 * - Enhances relative link navigation using document.startViewTransition().
 * - Emits 'route-changing' and 'route-changed' events.
 */
export type NavigationGuard = (targetUrl: string) => boolean | string;

export class ViewRouter extends EventTarget {
  private guards: NavigationGuard[] = [];

  constructor() {
    super();
    this.attachLinkInterceptor();
    window.addEventListener('popstate', (e) => this.handlePopState(e));
  }

  public addGuard(guard: NavigationGuard): void {
    this.guards.push(guard);
  }

  private attachLinkInterceptor(): void {
    document.addEventListener('click', (e) => {
      // Use composedPath to find <a> tags inside Shadow DOM boundaries
      const path = e.composedPath ? e.composedPath() : [e.target as EventTarget];
      const target = path.find((el): el is HTMLAnchorElement => el instanceof HTMLElement && el.tagName === 'A');
      if (!target) return;

      const href = target.getAttribute('href');
      // Only intercept local relative HTML links, avoid tel:, mailto:, external protocols or fragment-only
      if (!href || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('#') || target.target === '_blank') {
        return;
      }

      e.preventDefault();
      this.navigate(href);
    });
  }

  public async navigate(url: string, pushState: boolean = true): Promise<void> {
    let targetUrl = url;
    for (const guard of this.guards) {
      const result = guard(targetUrl);
      if (result === false) {
        return;
      } else if (typeof result === 'string') {
        targetUrl = result;
      }
    }

    this.dispatchEvent(new CustomEvent('route-changing', { detail: { targetUrl } }));

    // Check if View Transitions API is supported
    const docWithTransitions = document as unknown as { startViewTransition?: (cb: () => Promise<void>) => { finished?: Promise<void> } | Promise<void> };
    if (typeof docWithTransitions.startViewTransition === 'function') {
      try {
        const transition = docWithTransitions.startViewTransition(async () => {
          await this.loadView(targetUrl);
        });
        if (transition && 'finished' in transition && transition.finished) {
          await transition.finished;
        } else if (transition instanceof Promise) {
          await transition;
        }
      } catch {
        await this.loadView(targetUrl);
      }
    } else {
      await this.loadView(targetUrl);
    }

    if (pushState) {
      window.history.pushState({ url: targetUrl }, '', targetUrl);
    }

    this.dispatchEvent(new CustomEvent('route-changed', { detail: { currentUrl: targetUrl } }));
  }

  private async loadView(url: string): Promise<void> {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const htmlText = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');

      // Update document title
      document.title = doc.title;

      // Swap main container content
      const newMain = doc.querySelector('.main-content');
      const currentMain = document.querySelector('.main-content');

      if (newMain && currentMain) {
        currentMain.innerHTML = newMain.innerHTML;
      }

      // Dynamically load page module scripts to register page-specific custom elements
      const scripts = doc.querySelectorAll('script[type="module"]');
      for (const script of scripts) {
        const src = script.getAttribute('src');
        if (src) {
          const resolved = new URL(src, window.location.href).href;
          import(/* @vite-ignore */ resolved).catch(() => {});
        }
      }
    } catch {
      // If fetch fails (e.g. strict file:// security sandbox on certain browsers), fallback to natural browser navigation
      window.location.href = url;
    }
  }

  private handlePopState(_e: PopStateEvent): void {
    // Current page URL
    const relativeUrl = window.location.pathname.split('/').pop() || 'index.html';
    this.navigate(relativeUrl, false);
  }
}
