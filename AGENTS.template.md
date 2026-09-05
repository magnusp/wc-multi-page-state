# Agent Instructions: Standards-First Modern Web Architecture

This document guides AI coding agents in designing and implementing modern, durable, standards-first web applications. Agents reading this repository should follow these principles to avoid framework lock-in, unnecessary runtime bloat, and transient ecosystem churn.

---

## 1. Core Architectural Mental Model

1. **Native Web Standards First:**
   - Always prefer standard browser primitives over third-party NPM runtime libraries when browser APIs exist (`<dialog>`, Popover API, `ElementInternals`, View Transitions, Web Audio, CSS `@layer`, CSS `@container`).
2. **Frameworks as Disposable View Layers:**
   - Use UI libraries (like Lit) strictly as lightweight template engines and custom element lifecycle wrappers.
   - Do NOT couple business logic, network communication, or domain state to the component rendering library.
3. **Decoupled Domain Stores (Framework-Agnostic):**
   - Implement state stores as pure TypeScript classes extending native `EventTarget` (aligned with TC39 Signals).
   - Distribute state down the DOM tree using the W3C DOM Context Protocol (`@lit/context` or standard `context-request` custom DOM events).
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
   - Configure bundlers (e.g. Vite) with relative asset links (`base: './'`) so static output is self-contained and functions directly from disk (`file://`) or any basic static file server.

---

## 2. Platform Primitives Checklist for Agents

| Use Case | Recommended Standard Primitive | Avoid |
| :--- | :--- | :--- |
| **Component Model** | Native Custom Elements (`customElements.define`) + Lit HTML | Monolithic React/Vue Virtual DOM runtimes |
| **Domain State** | Pure TypeScript classes + standard `EventTarget` | Redux, MobX, Pinia |
| **State Distribution** | W3C Context Protocol (`context-request` DOM event) | Prop drilling, global singletons tied to React context |
| **Form Inputs** | Form-Associated Custom Elements (`ElementInternals`) | Formik, React Hook Form |
| **Modals / Dialogs** | Native HTML `<dialog>` with `.showModal()` & `::backdrop` | External modal portals, Radix Dialog |
| **Popovers / Menus** | Native Popover API (`popover="auto"`, `popovertarget`) | Floating UI, Popper.js, Tippy |
| **Page Transitions** | Native View Transitions API (`document.startViewTransition`) with reduced-motion support | Framer Motion, React Transition Group |
| **Continuous Media** | Persistent shell singleton + Web Audio API + user gesture fallback | SPA router audio workarounds |
| **Responsive UI** | CSS Container Queries (`@container`) | Window resize event listeners, media-query bloat |
| **CSS Architecture** | CSS Cascade Layers (`@layer`) & Custom Properties | CSS-in-JS runtimes, heavy utility preprocessors |

---

## 3. Verification & Quality Gates

When implementing or modifying code, agents MUST uphold these automated quality checks:
1. **Isolated Unit Testing:** Write tests for domain stores and state transitions independent of the DOM using `vitest`.
2. **Accessibility & ARIA Verification:** Ensure all custom elements pass automated WCAG 2.1 AA audits (`@axe-core/playwright`), maintain semantic heading order (`h1` -> `h2`), and have proper accessibility labels.
3. **Zero Console Errors:** Ensure no runtime exceptions or unhandled promise rejections occur during hydration or navigation.
