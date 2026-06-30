# Changelog — Nyra Documentation Site

Standalone changelog for the **Nyra docs site** ([`nyra-lang/docs`](https://github.com/nyra-lang/docs)).  
This repository is independent from the [Nyra compiler](https://github.com/nyra-lang/nyra). Compiler/stdlib release notes live in the compiler repo [`CHANGELOG.md`](https://github.com/nyra-lang/nyra/blob/main/CHANGELOG.md).

**Versioning:** docs releases use the same pill as `index.html` (e.g. `Documentation v1.36.x`), usually bumped when public messaging or pages change for a compiler release.

---

## v1.39.0 (2026-06-30)

**nyrapkg split — package manager documentation**

- **Updated** — `packages.html`: nyrapkg as standalone tool ([github.com/nyra-lang/pkg](https://github.com/nyra-lang/pkg)); split from `nyra pkg` (build/prune/c/bind only)
- **Updated** — `install.html`, `getting-started.html`, `examples.html`, `tooling.html`, `imports.html`, `language-vs-ecosystem.html`, `c-bindgen.html`, `backend.html`, `stdlib.html`, `bindings.html`, `modules.html`
- **Updated** — `locales/en.json`, `locales/ar.json`: nav + packages page strings (`nyrapkg`)
- **Updated** — `_includes/sidebar-nav.html` (synced to all pages)
- **Added** — `changelog.html` entry v1.39.0
- **Regenerated** — `search-index.json`

---

## v1.36.18 (2026-06-28)

**Production-ready status — remove MVP / pre-production banner**

- **Updated** — `index.html` hero banner and footer status: **Production-ready — Core + Stable Extended** (aligned with compiler [`docs/status.md`](https://github.com/nyra-lang/nyra/blob/main/docs/status.md))
- **Updated** — Result section on home page: `?` operator and Stable Extended error handling
- **Updated** — `roadmap.html` callout: production-ready tier; remaining gates (multi-trait `dyn`, exotic generic serde)
- **Updated** — `ai-skill.html`: status callout, Result section, system-prompt guardrails
- **Updated** — `learn-enums.html`, `async.html`, `reference.html`: Stable Extended wording (async, traits, `?`)
- **Updated** — `locales/en.json`, `locales/ar.json`: banner, status, Result, roadmap strings
- **Updated** — `nyra-skill.md`: v1.36 production-ready tier, traits section (Stable Extended)
- **Updated** — `css/style.css`: `hero-status-banner` styling
- **Regenerated** — `search-index.json`

---

## v1.36.12 (2026-06-27)

**Sonic removal — docs sync with compiler v1.36.12**

- **Removed** — Sonic-related pages/sections from docs where applicable
- **Updated** — `changelog.html` entry for compiler Sonic removal

---

## Earlier history

Combined language + docs release notes before this file existed are kept in [`changelog.html`](changelog.html) (HTML page, compiler-centric entries through v1.36.12).
