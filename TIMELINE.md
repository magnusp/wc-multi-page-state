# Project Timeline & Technical Findings

## Overview
This document tracks the hypothesis, architectural decisions, technical findings, and quality benchmarks during the development of the standards-first Web Components showcase.

---

## 2026-09-05: Initial Hypothesis & Architectural Alignment
- **Hypothesis:** 
  Can modern web standards—combined with lightweight custom elements—reproduce the clean separation of concerns and robust testability historically achieved through decoupled application frameworks, while eliminating runtime bloat, framework lock-in, and fragile hydration hierarchies?
- **Key Decisions:**
  - Standardize completely on modern web platform primitives and standard browser APIs.
  - Adopt Lit strictly as a lightweight (~5KB) rendering and templating layer over native `HTMLElement`.
  - Isolate domain state into framework-agnostic classes using standard `EventTarget` (aligned with TC39 Signals), decoupled from the UI.
  - Distribute application state down the DOM tree via the standard W3C Context Protocol (`@lit/context`).
  - Implement Form-Associated Custom Elements (FACE) with native `ElementInternals` for constraint validation and autofill.
  - Deliver semantic multi-page static HTML entry points for immediate First Contentful Paint (FCP) and optimal SEO.
  - Leverage native browser capabilities: `<dialog>`, Popover API, View Transitions API, Web Audio API, CSS `@layer`, and CSS `@container` queries.
  - Ensure self-contained bundling in `dist/` with relative asset links (`base: './'`) for direct filesystem execution (`file://`).

---

## 2026-09-05: Implementation & Verification
- **Scaffolding & Tooling:**
  - Configured Vite with multi-page HTML inputs (`index.html`, `showcase.html`, `dashboard.html`, `dashboard-nodes.html`) and relative base paths.
  - Configured TypeScript, Lit, and Vitest.
- **CSS Architecture:**
  - Established predictable cascade layers using CSS `@layer` (`reset`, `tokens`, `base`, `layout`, `components`).
  - Implemented Container Queries (`@container`) for modular, component-driven responsive card layouts.
- **Domain State & Components:**
  - Created standalone, testable domain stores (`AuthStore`, `TelemetryStore`, `AudioStore`) extending `EventTarget`.
  - Built `<login-panel>` as a Form-Associated Custom Element participating in `<form>` submission and browser validation.
  - Semantic static HTML pages delivering crawlable markup and structured CSS without runtime overhead.
  - Built `<incident-modal>` leveraging native HTML `<dialog>` with `.showModal()`, backdrop styling, and `<form method="dialog">`.
  - Built `<node-popover>` utilizing native `popover="auto"` and `popovertarget`.
  - Implemented `view-router.ts` orchestrating native `document.startViewTransition()` with fallback.
  - Synthesized ambient drone/alert audio via Web Audio API with Play, Volume, and instant Mute/Unmute controls, ensuring uninterrupted playback across view transitions.
- **Automated Verification & Audits:**
  - Vitest test suite verifying domain logic, session persistence, tab duplication isolation, telemetry simulation, and audio alert model.
  - Playwright + axe-core accessibility audit achieved **100% WCAG 2.1 AA and Best-Practices pass rate with 0 violations and 0 console errors across all pages**.
  - Verified local `file://` execution straight from `dist/index.html`.

---

## 2026-09-05: Documentation & Provenance
- Added AI/LLM provenance and human-in-the-loop attestation to `README.md`.
- Created `STANDARDS_GUIDE.md` linking directly to W3C, WHATWG, and MDN specifications for all native primitives.
- Created `AGENTS.template.md` providing guidelines and checklists for autonomous agents adopting this architecture in downstream repositories.

## 2026-09-05: Iterative Refinements & Architecture Hardening
- **Enhanced View Transitions:**
  - Implemented visually perceptible page transitions using custom CSS animations (`view-fade-out` / `view-fade-in` over 350ms with subtle Y-axis translate) replacing default abrupt cross-fades, while fully respecting `@media (prefers-reduced-motion: reduce)`.
- **Default Enabled Soundscape & Autoplay Resilience:**
  - Configured ambient audio to start enabled and unmuted by default (volume 0.3) upon application boot.
  - Handled strict browser autoplay policies via a one-time user gesture fallback (`pointerdown`/`keydown`) to resume/start the `AudioContext` seamlessly upon first interaction.
  - Persisted user playback choices (`enabled`, `muted`, `volume`) to session storage.
- **Storage Decoupling & Constructor Dependency Injection:**
  - Abstracted browser storage behind a `StorageLike` contract with an in-memory `MemoryStorage` fallback.
  - Refactored `AuthStore` and `AudioStore` constructors to accept optional storage dependencies with safe default detection (`getDefaultStorage()`).
  - Eliminated global state coupling, ensuring clean test isolation, SSR safety, and defense against private-browsing `SecurityError` exceptions.



