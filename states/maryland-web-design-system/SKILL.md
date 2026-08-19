---
name: maryland-web-design-system
description: Builds Maryland government interfaces with the official Maryland Web Design System package, web components, statewide alerts, foundations, and accessibility guidance. Use for Maryland state services, not the unrelated University of Maryland design system; the current release is alpha-tagged, so pin the exact version.
---

# Maryland Web Design System

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

- **Scope:** Maryland state-government digital services. Do not confuse MDWDS with the unrelated University of Maryland design system.
- **Release:** The current release is pre-1.0 and alpha-tagged; official documentation says MDWDS is under development. Pin the exact version.
- **Delivery:** Framework-agnostic web components and supporting package assets.
- Do not invent component APIs, tokens, package names, or compliance claims.
- Do not import another jurisdiction's branding to fill a gap.
- A passing component example does not prove the completed service conforms to WCAG, Section 508, the ADA, or local policy.
- If this system does not fit the product's requirements, route to the governing system or stop and explain the gap.

## References

- [Implementation](references/implementation.md) — packages, setup, and integration decisions
- [Sources](references/sources.md) — authoritative URLs, snapshot versions, ownership, and license notes
