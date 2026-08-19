---
name: michigan-digital-guidelines
description: Builds State of Michigan interfaces with the official Digital Guidelines Stencil web components and React or Angular wrappers. Use for Michigan state products and select the core or framework wrapper that matches the existing application.
---

# Michigan Digital Guidelines

Build within the system's documented scope and delivery model.

## Before editing

1. Confirm the product owner and that this system is authorized for the target surface.
2. Read [references/implementation.md](references/implementation.md) before installing or changing dependencies.
3. Read [references/sources.md](references/sources.md) when checking versions, provenance, license, or release state.
4. Inspect the existing framework, package manager, asset pipeline, and accessibility tests. Preserve them unless the official integration requires a change.

## Workflow

1. Choose one documented delivery path; do not mix compiled, source, CDN, and framework-wrapper paths accidentally.
2. Pin the dependency or downloaded asset version and keep upstream notices.
3. Reuse official components, tokens, content guidance, and templates before adding custom UI.
4. Extend through documented tokens, properties, slots, Sass settings, or composition. Do not edit vendored package files.
5. Test semantic structure, keyboard operation, focus order and visibility, accessible names, error recovery, zoom/reflow, contrast, and target browsers.
6. Report custom patterns, unsupported requirements, and upstream gaps explicitly.

## Boundaries

- **Scope:** State of Michigan digital products governed by Digital Guidelines.
- **Release state:** Ready; current public npm packages and documentation.
- **Delivery:** Stencil web components plus React and Angular wrapper packages.
- Do not invent component APIs, tokens, package names, or compliance claims.
- Do not import another jurisdiction's branding to fill a gap.
- A passing component example does not prove the completed service conforms to WCAG, Section 508, the ADA, or local policy.

## References

- [Implementation](references/implementation.md) — packages, setup, and integration decisions
- [Sources](references/sources.md) — authoritative URLs, snapshot versions, ownership, and license notes
