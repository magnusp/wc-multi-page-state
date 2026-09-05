# Standards-First Web Development Guide

A reference manual for building modern, resilient web applications leveraging native browser standards and lightweight Web Components.

---

## 1. Component Model: Web Components & Lit
- **W3C Standard:** [W3C Custom Elements Specification](https://html.spec.whatwg.org/multipage/custom-elements.html) & [Shadow DOM](https://dom.spec.whatwg.org/#shadow-trees)
- **MDN Guide:** [Web Components on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
- **Role in Showcase:**
  - Standard custom elements are registered with `customElements.define()`.
  - Lit is used purely as a minimal reactive view layer (roughly ~5KB gzipped), avoiding proprietary virtual DOM trees or heavy runtime overhead.

---

## 2. Form-Associated Custom Elements (FACE) & ElementInternals
- **WHATWG Standard:** [Form-Associated Custom Elements](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-elements)
- **MDN Guide:** [ElementInternals API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals)
- **Role in Showcase:**
  - Implemented in `src/components/login-panel.ts`.
  - Configures `static formAssociated = true` and `this.attachInternals()`.
  - Uses `this.internals.setFormValue()` and `this.internals.setValidity()` to participate directly in native `<form>` submission, constraint validation, and browser password manager autofill without external form libraries.

---

## 3. Native Dialogs: HTML `<dialog>` Element
- **WHATWG Standard:** [The Dialog Element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element)
- **MDN Guide:** [`<dialog>` on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- **Role in Showcase:**
  - Implemented in `src/components/incident-modal.ts`.
  - Uses `.showModal()` for accessible top-layer rendering, built-in `<Esc>` dismiss behavior, and native `::backdrop` styling.
  - Submits via `<form method="dialog">` to dismiss cleanly without JavaScript event suppression.

---

## 4. HTML Popover API
- **WHATWG Standard:** [The Popover Attribute](https://html.spec.whatwg.org/multipage/popover.html)
- **MDN Guide:** [Popover API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- **Role in Showcase:**
  - Implemented in `src/components/node-popover.ts`.
  - Replaces external floating/tooltip libraries (such as Floating UI or Popper).
  - Uses `popover="auto"` and `popovertarget="popover-id"` to provide automatic light-dismiss, top-layer rendering, and keyboard accessibility.

---

## 5. View Transitions API
- **W3C Candidate Recommendation:** [CSS View Transitions Module Level 1](https://www.w3.org/TR/css-view-transitions-1/)
- **MDN Guide:** [View Transitions API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- **Role in Showcase:**
  - Implemented in `src/core/router/view-router.ts` and styled in `src/styles/layers.css`.
  - Uses `document.startViewTransition()` paired with custom `@keyframes view-fade-out` / `view-fade-in` (350ms easing) to deliver a prominent, visually distinct fade transition between multi-page view containers without full-page flashes. Respects `prefers-reduced-motion`.

---

## 6. Web Audio API & Dual-Frequency Threshold Overlay
- **W3C Recommendation:** [Web Audio API](https://www.w3.org/TR/webaudio/)
- **MDN Guide:** [Web Audio API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- **Role in Showcase:**
  - Implemented in `src/core/audio/soundscape-engine.ts`, `src/core/store/audio-store.ts`, and `src/components/app-shell.ts`.
  - Starts ambient audio enabled and unmuted by default on application launch (persisting user preferences to `sessionStorage` and gracefully handling browser autoplay policies via first-interaction fallback).
  - Synthesizes a real-time background drone (operator listening mode) using native `OscillatorNode`, `BiquadFilterNode`, and `GainNode`.
  - Overlays dynamic alert beeps driven by live telemetry thresholds: 2.0-second intervals for **WARNING** (>70% CPU) and 0.5-second intervals for **CRITICAL** (>85% CPU / >90% Memory). Cordoning nodes sheds their load to calm the loop.
  - Because client navigation preserves shell state, audio continues playing uninterrupted across view transitions between `dashboard.html` and `dashboard-nodes.html`.

---

## 7. Modern CSS Standards: `@layer` & Container Queries
- **W3C Standard:** [CSS Cascade Layers](https://www.w3.org/TR/css-cascade-5/#layering) & [CSS Container Queries](https://www.w3.org/TR/css-contain-3/#container-queries)
- **MDN Guides:**
  - [CSS @layer on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
  - [CSS Container Queries on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- **Role in Showcase:**
  - Cascades structured across layers (`reset`, `tokens`, `base`, `layout`, `components`).
  - `@container` queries dynamically format telemetry cards in `src/components/telemetry-grid.ts` based on their parent container's width rather than the viewport.

---

## 8. State Decoupling & Multi-Tab Isolation
- **WHATWG Standard:** [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) & [Web Storage API](https://html.spec.whatwg.org/multipage/webstorage.html)
- **Role in Showcase:**
  - Stores (`AuthStore`, `TelemetryStore`, `AudioStore`) are pure TypeScript `EventTarget` instances.
  - Storage is abstracted via `StorageLike` and injected via store constructors with an in-memory `MemoryStorage` fallback. This guarantees test isolation, universal environment safety, and graceful degradation in private browsing modes without relying on untestable globals.
  - Tab duplication is transparently handled: cloned tabs inherit `sessionStorage` while generating unique local `currentTabId` identifiers.
