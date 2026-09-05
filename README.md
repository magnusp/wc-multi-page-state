# AetherWatch: Modern Web Architecture Showcase

A production-grade, standards-first showcase demonstrating modern Web Components built with **Lit** as a minimal presentation layer, **Pure TypeScript Domain Stores** (aligned with TC39 Signals and standard `EventTarget`), and **Native Web Platform APIs**.

---

## 🤖 Provenance & Attestation

This repository and showcase architecture were co-constructed and engineered with the assistance of an **Agentic Large Language Model (LLM)**:
- **Assistant:** Antigravity (Google DeepMind Agentic AI Coding Assistant).
- **Date:** 2026-09-05.
- **Human In The Loop:** Architectural oversight, iterative requirements, and domain specification provided by user `@magnusp`.
- **Attestation:** All source code, components, CSS architecture, test cases, and documentation were generated under direct human review and confirmed against automated testing suites (`vitest`) and accessibility auditing benchmarks (`@axe-core/playwright` passing 100% WCAG 2.1 AA compliance).
- **Purpose:** Serve as a clean, reproducible, and durable learning reference for modern standards-first Web Components and browser APIs.

---

## 📖 Specifications & Learning Guide

For direct links to W3C, WHATWG, and MDN documentation for every web primitive used in this project, see:
👉 **[STANDARDS_GUIDE.md](./STANDARDS_GUIDE.md)**

To onboard and align autonomous AI coding agents in other projects with these exact native-first principles, copy:
👉 **[`AGENTS.template.md`](./AGENTS.template.md)** into your repository as `AGENTS.md`.

---

## 🌟 Key Architectural Highlights

1. **Pre-Generated Multi-Page Static HTML:**
   - Standalone static pages (`index.html`, `product.html`, `dashboard.html`, `dashboard-nodes.html`).
   - Uses **Declarative Shadow DOM (DSD)** for instant first contentful paint (FCP) and optimal SEO with zero-FOUC.
2. **Form-Associated Custom Elements (FACE):**
   - `<login-panel>` uses native `ElementInternals` to participate in `<form>` lifecycle, browser constraint validation, and password managers.
   - Authentication accepts any username and password `joshua`.
3. **Native Dialogs & Popovers:**
   - Incident triage modal uses native `<dialog>` (`.showModal()`, backdrop, `<form method="dialog">`).
   - Node spec inspections use native HTML **Popover API** (`popover="auto"` and `popovertarget`) with zero JavaScript positioning libraries.
4. **Fluid View Transitions & Audio Continuity:**
   - Seamless client-side transitions using `document.startViewTransition()`.
   - Ambient Web Audio soundscape (synth drone + sonar pulse) with persistent play, volume, and **Mute/Unmute** controls that continue uninterrupted across views.
5. **Modern Native CSS:**
   - Organized with CSS `@layer` (`reset`, `tokens`, `base`, `layout`, `components`).
   - Uses CSS Container Queries (`@container`) for modular component responsiveness.
6. **Multi-Tab Hydration & `file://` Direct Execution:**
   - Built to run seamlessly straight from the local filesystem (`file:///.../dist/index.html`).
   - Supports transparent tab duplication and hard refreshes using `sessionStorage`.

---

## 🚀 Quickstart

### Prerequisites
- Node.js 18+
- [pnpm](https://pnpm.io/)

### Installation & Development
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run unit tests
pnpm test

# Run accessibility & ARIA audit benchmark
pnpm test:audit

# Build self-contained static assets to dist/
pnpm build
```
