# Agent Instructions: Standards-First Web Architecture with Lit

This document guides AI coding agents in designing and implementing modern, durable, standards-first web applications using **Lit** as a lightweight view layer. Agents reading this repository should follow these principles to avoid framework lock-in, unnecessary runtime bloat, duplicate state bugs, and transient ecosystem churn.

---

## 1. Core Architectural Mental Model

1. **Native Web Standards First:**
   - Always prefer standard browser primitives over third-party NPM runtime libraries when browser APIs exist (`<dialog>`, Popover API, `ElementInternals`, View Transitions, Web Audio, CSS `@layer`, CSS `@container`, `content-visibility`, `IntersectionObserver`).
2. **Lit as a Disposable, Lightweight View Layer:**
   - Use Lit strictly as a lightweight (~5KB) HTML template engine, reactive render scheduler, and custom element lifecycle wrapper (`LitElement`, `html`, `css`).
   - Do NOT couple business logic, network communication, or domain state to the Lit component rendering library.
3. **Decoupled Domain Stores & Reactive Subscriptions:**
   - Implement state stores as pure TypeScript classes extending native `EventTarget` (aligned with TC39 Signals).
   - Distribute state down the DOM tree using the W3C DOM Context Protocol (`@lit/context` or standard `context-request` custom DOM events).
   - Connect Lit components to stores using `ReactiveController` implementations (e.g. `StoreController` or `store.addHost(this)`).
   - **Zero Duplicate State:** Components must read state directly from store instances during `render()`. Never copy or mirror store properties into local `@state()` component properties, eliminating state synchronization desyncs and double-render cycles.
4. **Single Responsibility & Purpose-Built Components:**
   - Strictly isolate concerns into small, modular, and testable units. Avoid monolithic catch-all JavaScript files.
5. **Semantic Light-DOM Markup & Progressive Enhancement:**
   - Static HTML entry points must provide semantic, crawlable light-DOM markup and structured CSS so search engines and users receive immediate paint prior to JavaScript evaluation.
6. **Resilient Session & Multi-Tab Isolation:**
   - Hydrate view state from session storage on hard page reloads and tab duplication. Thread storage dependencies into store constructors (`StorageLike` with `getDefaultStorage()` fallback) rather than directly referencing the global `sessionStorage`. This provides test isolation and safeguards against private-browsing security errors. Ensure independent tab instance IDs while sharing broadcast telemetry across tabs.
7. **Continuous Media & Autoplay Resilience:**
   - When deploying Web Audio soundscapes, persist user playback, mute, and volume preferences to `sessionStorage`. Gracefully satisfy browser autoplay policies by attempting launch on boot and latching onto the first user interaction (`pointerdown`/`keydown`) if suspended.
8. **Perceptible & Accessible View Transitions:**
   - Use `document.startViewTransition` paired with keyframes (e.g. cross-fade and subtle translate) for clear visual navigation feedback, while strictly respecting `@media (prefers-reduced-motion: reduce)`.
9. **Local Filesystem & Static Deployment Compatibility:**
   - Configure bundlers (e.g. Vite with `root: 'src'`, `base: './'`) so static output is self-contained and functions directly from disk (`file://`) or any basic static file server.
   - Organize multi-page entry points with dedicated per-page script modules (`src/pages/*.ts`) to enable automatic bundler code-splitting of shared stores and components.
10. **Native Virtualization & Sentinel Paging:**
   - Pair CSS `content-visibility: auto` and `contain-intrinsic-size` with native `IntersectionObserver` sentinel elements for large lists and infinite feeds. This lets the browser skip offscreen rendering while preserving in-page find (`Ctrl+F`), native accessibility tree integrity, and eliminating third-party virtual scrolling packages.

---

## 2. Platform Primitives Checklist for Agents

| Use Case | Recommended Standard Primitive | Avoid |
| :--- | :--- | :--- |
| **Component Model** | Native Custom Elements (`customElements.define`) + Lit (`LitElement`, `html`, `css`) | Monolithic React/Vue Virtual DOM runtimes |
| **Domain State** | Pure TypeScript classes + standard `EventTarget` | Redux, MobX, Pinia |
| **State Distribution & Subscription** | W3C Context Protocol (`@lit/context` / `context-request`) + `ReactiveController` host subscriptions | Prop drilling, global singletons, mirroring store data into local `@state()` properties |
| **Form Inputs** | Form-Associated Custom Elements (`ElementInternals`) | Formik, React Hook Form |
| **Modals / Dialogs** | Native HTML `<dialog>` with `.showModal()` & `::backdrop` | External modal portals, Radix Dialog |
| **Popovers / Menus** | Native Popover API (`popover="auto"`, `popovertarget`) | Floating UI, Popper.js, Tippy |
| **Page Transitions** | Native View Transitions API (`document.startViewTransition`) with reduced-motion support | Framer Motion, React Transition Group |
| **Continuous Media** | Persistent shell singleton + Web Audio API + user gesture fallback | SPA router audio workarounds |
| **List Virtualization & Feeds** | Native `content-visibility: auto` + `contain-intrinsic-size` + `IntersectionObserver` sentinel | Imperative JS virtual scrollers for &lt;5k items, window scroll event listeners |
| **Responsive UI** | CSS Container Queries (`@container`) | Window resize event listeners, media-query bloat |
| **CSS Architecture** | CSS Cascade Layers (`@layer`) & Custom Properties | CSS-in-JS runtimes, heavy utility preprocessors |

---

## 3. Verification & Quality Gates

When implementing or modifying code, agents MUST uphold these automated quality checks:
1. **Isolated Unit Testing:** Write tests for domain stores and state transitions independent of the DOM using `vitest`.
2. **Accessibility & ARIA Verification:** Ensure all custom elements pass automated WCAG 2.1 AA audits (`@axe-core/playwright`), maintain semantic heading order (`h1` -> `h2`), and have proper accessibility labels.
3. **Zero Console Errors:** Ensure no runtime exceptions or unhandled promise rejections occur during hydration or navigation.
