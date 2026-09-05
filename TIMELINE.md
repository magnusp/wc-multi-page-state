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
  - Deliver static multi-page entry points pre-rendered with Declarative Shadow DOM (DSD) for instant first contentful paint (FCP) and optimal SEO.
  - Leverage native browser capabilities: `<dialog>`, Popover API, View Transitions API, Web Audio API, CSS `@layer`, and CSS `@container` queries.
  - Ensure self-contained bundling in `dist/` with relative asset links (`base: './'`) for direct filesystem execution (`file://`).

---

## 2026-09-05: Implementation & Verification
- **Scaffolding & Tooling:**
  - Configured Vite with multi-page HTML inputs (`index.html`, `product.html`, `dashboard.html`, `dashboard-nodes.html`) and relative base paths.
  - Configured TypeScript, Lit, and Vitest.
- **CSS Architecture:**
  - Established predictable cascade layers using CSS `@layer` (`reset`, `tokens`, `base`, `layout`, `components`).
  - Implemented Container Queries (`@container`) for modular, component-driven responsive card layouts.
- **Domain State & Components:**
  - Created standalone, testable domain stores (`AuthStore`, `TelemetryStore`, `AudioStore`) extending `EventTarget`.
  - Built `<login-panel>` as a Form-Associated Custom Element participating in `<form>` submission and browser validation.
  - Pre-rendered static pages with Declarative Shadow DOM (`<template shadowrootmode="open">`).
  - Built `<incident-modal>` leveraging native HTML `<dialog>` with `.showModal()`, backdrop styling, and `<form method="dialog">`.
  - Built `<node-popover>` utilizing native `popover="auto"` and `popovertarget`.
  - Implemented `view-router.ts` orchestrating native `document.startViewTransition()` with fallback.
  - Synthesized ambient drone/pulse audio via Web Audio API with Play, Volume, and instant Mute/Unmute controls, ensuring uninterrupted playback across view transitions.
- **Automated Verification & Audits:**
  - Vitest test suite (9/9 passed) verifying domain logic, session persistence, tab duplication isolation, and audio controls.
  - Playwright + axe-core accessibility audit achieved **100% WCAG 2.1 AA and Best-Practices pass rate with 0 violations and 0 console errors across all pages**.
  - Verified local `file://` execution straight from `dist/index.html`.

---

## 2026-09-05: Documentation & Provenance
- Added AI/LLM provenance and human-in-the-loop attestation to `README.md`.
- Created `STANDARDS_GUIDE.md` linking directly to W3C, WHATWG, and MDN specifications for all native primitives.
- Created `AGENTS.template.md` providing guidelines and checklists for autonomous agents adopting this architecture in downstream repositories.

## 2026-09-05: Fixed Audio Continuity & Persisted Audio Preferences
- **Diagnosis:**
  1. Click interception in `view-router.ts` previously used `e.target.closest('a')`, which fails when links originate inside Shadow DOM boundaries (such as `<app-header>` nav links) because `e.target` is retargeted to the host custom element. This caused the browser to execute a hard page reload on navigation, terminating the Web Audio context.
  2. `AudioStore` previously did not persist user mute state and volume levels to `sessionStorage`.
- **Resolution:**
  1. Updated `attachLinkInterceptor()` in `view-router.ts` to inspect `e.composedPath()` to resolve `<a>` elements across Shadow DOM boundaries, restoring smooth client-side View Transitions.
  2. Updated `AudioStore` to serialize and restore mute/volume settings in `sessionStorage` with unit test coverage.
  3. Verified uninterrupted audio playback across in-app navigation with zero session interruption.

## 2026-09-05: Resolved 'startTime' & Transition Exception Edge-Case
- **Diagnosis:**
  In certain browser runtimes / polyfills or browser extension environments, `startViewTransition` returned an object or Promise whose internal properties or transition promise lifecycle access caused an unhandled `startTime` property read when transitioning view containers. Additionally, store context synchronization on newly swapped custom elements needed reactive `willUpdate()` triggers.
- **Resolution:**
  1. Wrapped `startViewTransition` in a defensive `try...catch` and validated both standard `.finished` and Promise resolution semantics in `view-router.ts`.
  2. Added reactive store re-synchronization (`willUpdate`) in `nodes-view.ts` and `telemetry-grid.ts` to ensure seamless listener management upon dynamic DOM swapping.

## 2026-09-05: Enforced Multi-Layer Route & Component Protection
- **Diagnosis:**
  Unauthenticated users could click header navigation links to `dashboard.html` or navigate directly to them because:
  1. `ViewRouter` previously lacked a centralized navigation guard mechanism (`beforeNavigate` hook) to intercept in-app routing requests before view containers were fetched/swapped.
  2. `<app-header>` rendered links to `dashboard.html` and `dashboard-nodes.html` unconditionally.
  3. `<telemetry-grid>` and `<nodes-view>` did not consume `authContext` to render a fallback barrier if loaded in a direct hit or unauthenticated state.
- **Resolution:**
  1. Added `addGuard()` to `ViewRouter`, redirecting any attempt to navigate to protected pages without authentication back to `index.html`.
  2. Updated `<app-header>` to only display Telemetry and Nodes links when `currentUser` is present.
  3. Added `authContext` consumption and fallback `Access Restricted` state to `<telemetry-grid>` and `<nodes-view>`.
  4. Verified via Playwright automated browser tests that both in-app navigation and direct hits to protected pages redirect to `index.html` unless authenticated.

## 2026-09-05: Unified Unauthenticated Barrier into Shared `<ui-card>` Component
- **Diagnosis:**
  Both `<nodes-view>` and `<telemetry-grid>` replicated an unauthenticated fallback state using duplicated inline markup and styles rather than utilizing a shared, reusable design element tied to the design system.
- **Resolution:**
  1. Created `<ui-card>` (`src/components/ui-card.ts`) as a purpose-built presentation component encapsulating header, icon badge, description, and action button/slots.
  2. Wired component tokens into `src/styles/layers.css` within `@layer components` leveraging custom properties defined in `src/styles/tokens.css`.
  3. Replaced duplicate markup in both `<nodes-view>` and `<telemetry-grid>` with `<ui-card>`.
  4. Registered `<ui-card>` in `src/components/app-shell.ts`.
  5. Verified clean compilation with zero type errors, 10/10 Vitest tests passing, and 100% WCAG 2.1 AA compliance in `pnpm test:audit`.

