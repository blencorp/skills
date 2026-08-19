---
name: georgia-orchard
description: Builds Georgia state-government interfaces with the official Orchard Design System npm package, versioned CDN stylesheets, component JavaScript, agency palettes, and Storybook-style documentation. Use for Georgia state products authorized to use Orchard, not county or municipal sites.
---

# Georgia Orchard Design System

Build within the system's documented scope and delivery model.

## Before editing

1. Confirm the product owner and that this system is authorized for the target surface.
2. Read [references/implementation.md](references/implementation.md) before installing or changing dependencies.
3. Read [references/sources.md](references/sources.md) when checking versions, provenance, license, or release state.
4. Inspect the existing framework, package manager, asset pipeline, and accessibility tests. Preserve them unless the official integration requires a change.

## Workflow

1. Choose one documented delivery path — the npm package or the versioned CDN stylesheets; do not mix them accidentally.
2. Pin the dependency or CDN asset version and keep upstream notices.
3. Reuse official components, palettes, content guidance, and templates before adding custom UI.
4. Extend through documented mechanisms such as the agency palette stylesheets and composition. Do not edit vendored package files.
5. Test semantic structure, keyboard operation, focus order and visibility, accessible names, error recovery, zoom/reflow, contrast, and target browsers.
6. Report custom patterns, unsupported requirements, and upstream gaps explicitly.

## Boundaries

- **Scope:** Georgia state-government sites and applications authorized to use Orchard, not county or municipal products.
- **Release:** the official npm package and versioned CDN assets are current. No public source repository was verified — the package ships compiled assets.
- **Delivery:** npm package with compiled CSS, per-component JavaScript bundles, and agency palette stylesheets; versioned CDN stylesheets; Storybook-style documentation with component examples.
- Do not invent component APIs, tokens, package names, or compliance claims.
- Do not import another jurisdiction's branding to fill a gap.
- A passing component example does not prove the completed service conforms to WCAG, Section 508, the ADA, or local policy.

## References

- [Implementation](references/implementation.md) — packages, setup, and integration decisions
- [Sources](references/sources.md) — authoritative URLs, snapshot versions, ownership, and license notes
