---
name: nasa-horizon-design-system
description: Builds NASA web modernization interfaces with the official Horizon Design System Core theme layered on USWDS. Use only after confirming the NASA project fits Horizon's consolidation strategy; retain its pre-1.0 and NASA-brand scope warnings.
---

# NASA Horizon Design System

> Adoption gate: Conditional; the active official package is explicitly pre-1.0 — API and class names may change between minor versions. See the sources ledger for the current snapshot.

## Before editing

1. Confirm the product is inside this system's scope and the owner accepts the stated release or maintenance risk.
2. Read [references/implementation.md](references/implementation.md) before installing, copying, or changing upstream assets.
3. Read [references/sources.md](references/sources.md) for provenance, version, license, and the reason this skill is Conditional.
4. Inspect and preserve the target project's framework, package manager, asset pipeline, and accessibility tests.

## Workflow

1. Choose one documented delivery path and pin an exact package, commit, release, or downloaded asset snapshot.
2. Use only official components, tokens, templates, and examples that are actually public.
3. Extend through documented mechanisms. Label every unsupported addition as custom.
4. Record the upstream version or commit and the accepted maturity/maintenance risk.
5. Test keyboard operation, focus, names/roles/states, errors, status messages, contrast, zoom/reflow, responsive behavior, and supported browsers.

## Boundaries

- **Scope:** NASA-branded sites aligned to NASA's web modernization and consolidation strategy. Interagency and non-NASA sites should use USWDS.
- **Delivery:** NASA USWDS theme package with Sass, compiled assets, Storybook, and integration guides.
- Do not invent a registry package, public repository, component API, or release commitment.
- Do not imply that a beta, hosted asset, code example, or product-specific repository is government-wide.
- Do not claim legal or WCAG conformance for the completed service solely from component use.
- If the adoption gate cannot be accepted, route to the governing stable system or stop and explain the gap.

## References

- [Implementation](references/implementation.md)
- [Sources](references/sources.md)
