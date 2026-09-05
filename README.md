# AetherWatch: Modern Web Architecture Showcase

A production-grade, standards-first showcase demonstrating modern Web Components built with **Lit** as a minimal presentation layer, **Pure TypeScript Domain Stores** (aligned with TC39 Signals and standard `EventTarget`), and **Native Web Platform APIs**.

🌐 **Live Demo:** [https://magnusp.github.io/wc-multi-page-state/](https://magnusp.github.io/wc-multi-page-state/)

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

To onboard and align autonomous AI coding agents in projects adopting this architecture with **Lit** (using Lit as the lightweight reactive custom element view layer), copy:
👉 **[`AGENTS.template.md`](./AGENTS.template.md)** into your repository as `AGENTS.md`.  
*(Note: This template is specifically tailored for Lit-based custom element architectures rather than a generalized, framework-agnostic setup).*

---

## 🌟 Key Architectural Highlights

1. **Semantic Multi-Page Static HTML:**
   - **Pattern & Benefit:** Multi-page HTML entry points can be authored with semantic light-DOM markup, which is valuable because browsers and search crawlers parse and paint content immediately without waiting on client-side bundle execution or complex SSR machinery.
   - **Under the hood:** Pre-rendered light-DOM structure delivering optimal First Contentful Paint (FCP) and zero-JS search engine indexability before hydration begins.
2. **Form-Associated Custom Elements (FACE):**
   - **Pattern & Benefit:** Custom elements can participate directly in standard form submission and validation via `ElementInternals`, which is beneficial because components behave like native `<input>` tags, seamlessly integrating with password managers, autofill, and browser constraint validation without external form libraries.
   - **Under the hood:** Implements standard `ElementInternals` (`static formAssociated = true`), participating in standard `<form>` lifecycles and `setValidity()` without form library bloat.
3. **Native Dialogs & Popovers:**
   - **Pattern & Benefit:** Native `<dialog>` elements and the HTML Popover API can be used for modals, tooltips, and flyouts, which is advantageous because the browser manages top-layer stacking, light-dismiss, focus trapping, and keyboard navigation automatically without third-party positioning libraries.
   - **Under the hood:** Employs the native HTML `<dialog>` element (`.showModal()`, `::backdrop`) and the declarative HTML Popover API (`popover="auto"`), eliminating third-party overlay/floating packages.
4. **Fluid View Transitions & Continuous Web Audio:**
   - **Pattern & Benefit:** The View Transitions API can be paired with a persistent application shell, which allows multi-page applications to morph smoothly between views while continuous media (like Web Audio, streams, or voice) plays uninterrupted across route changes.
   - **Under the hood:** `document.startViewTransition()` runs custom CSS cross-fade keyframes (with `prefers-reduced-motion` safety), while a Web Audio API singleton preserves uninterrupted audio across route navigations with autoplay gesture fallback.
5. **Modern Native CSS:**
   - **Pattern & Benefit:** CSS Cascade Layers (`@layer`) and Container Queries (`@container`) can be used together to build modular design systems, which improves maintainability because styles cascade predictably without specificity wars, and components adapt to their immediate container widths rather than rigid screen viewports.
   - **Under the hood:** Managed through standard CSS `@layer` (`reset`, `tokens`, `base`, `layout`, `components`) and CSS Container Queries (`@container`) for modular responsiveness independent of the viewport.
6. **Native Virtualization & IntersectionObserver Paging:**
   - **Pattern & Benefit:** CSS `content-visibility: auto` can be combined with native `IntersectionObserver` sentinels for large datasets, which offers massive rendering gains because the browser skips layout and paint for off-screen items while preserving native in-page search (`Ctrl+F`) and accessibility trees that traditional virtual scrollers break.
   - **Under the hood:** Uses `content-visibility: auto` and `contain-intrinsic-size` to let the browser engine skip rendering offscreen cards, paired with an `IntersectionObserver` sentinel for on-demand data chunking.
7. **Multi-Tab Hydration & Session Continuity:**
   - **Pattern & Benefit:** Client-side state stores can leverage standard `sessionStorage` cloning to preserve active user sessions and preferences across hard page reloads and tab duplications, which ensures operators never lose their workflow context when opening auxiliary tabs while maintaining strictly isolated tab instance IDs.
   - **Under the hood:** Automatically adopts credentials from cloned session storage on boot while generating unique local `tabId` instances to prevent cross-tab state collision, backed by an abstracted storage adapter that executes reliably offline or over relative `file://` protocols.

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
