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
