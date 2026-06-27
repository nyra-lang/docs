# Nyra web documentation

Professional static HTML documentation for the Nyra programming language.

**Live site:** enable GitHub Pages in repo Settings → Pages → Source: GitHub Actions. After deploy: `https://hamdymohamedak.github.io/Nyra/`

## Build locally

```bash
./scripts/build-webdocs.sh   # nyra-skill.md + search-index.json
cd webDocs
python3 -m http.server 8080
# open http://localhost:8080
```

## Search

- **Ctrl+K** (⌘K on Mac) opens Lunr full-text search
- Index built from all HTML pages + `nyra-skill.md`

## AI assistants

Download [`nyra-skill.md`](nyra-skill.md) from the Overview page — canonical **v1.2.x** reference for Cursor, ChatGPT, Claude.

## Pages (31+)

| Section | Pages |
|---------|--------|
| Start | overview, getting-started, install, learning-path, ai-skill |
| Language | **language-basics**, syntax, types, reference, **spec**, generics, match, modules, imports, memory, async, traits-macros, stdlib, concurrency |
| Guides | examples, dungeon-steps, integration |
| Toolchain | tooling, performance, **pgo**, **escape-analysis**, diagnostics, ffi-abi, targets, editor-setup, packages |
| Project | roadmap, changelog, sitemap |

**Testing:** CONF-LANG language conformance is documented in [tooling.html#conformance](tooling.html#conformance) and [stdlib.html#testing](stdlib.html#testing).

Install steps: [`../install.md`](../install.md).
