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

1. **Semantic Multi-Page Static HTML:**
   - Standalone static pages (`index.html`, `showcase.html`, `dashboard.html`, `dashboard-nodes.html`) delivering immediate First Contentful Paint (FCP) and native search indexability.
2. **Form-Associated Custom Elements (FACE):**
   - `<login-panel>` uses native `ElementInternals` to participate in `<form>` lifecycle, browser constraint validation, and password managers.
   - Authentication accepts any username and password `joshua`.
3. **Native Dialogs & Popovers:**
   - Incident triage modal uses native `<dialog>` (`.showModal()`, backdrop, `<form method="dialog">`).
   - Node spec inspections use native HTML **Popover API** (`popover="auto"` and `popovertarget`) with zero JavaScript positioning libraries.
4. **Fluid View Transitions & Continuous Web Audio:**
   - Seamless client-side transitions using `document.startViewTransition()` with prominent fade and subtle translate animations (respecting `prefers-reduced-motion`).
   - Ambient Web Audio soundscape (listening drone + live telemetry threshold beep overlay: 2.0s WARNING / 0.5s CRITICAL) starting enabled and unmuted by default with persistent play, volume, and **Mute/Unmute** controls that continue uninterrupted across views. Handled with resilient browser autoplay fallback.
5. **Modern Native CSS:**
   - Organized with CSS `@layer` (`reset`, `tokens`, `base`, `layout`, `components`).
   - Uses CSS Container Queries (`@container`) for modular component responsiveness.
6. **Multi-Tab Hydration, Storage Dependency Injection & `file://` Direct Execution:**
   - Built to run seamlessly straight from the local filesystem (`file:///.../dist/index.html`).
   - Storage abstracted via `StorageLike` with constructor dependency injection and in-memory `MemoryStorage` fallback for test isolation.
   - Supports transparent tab duplication and hard refreshes using session storage.

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
