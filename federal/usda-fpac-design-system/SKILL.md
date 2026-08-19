---
name: usda-fpac-design-system
description: Maintains USDA Farm Production and Conservation or Farm Service Agency interfaces with the official FSA Design System documentation, the fsa-style npm package, and its source. Use for those products and check current maintenance, since releases are older than most systems here; do not represent it as current USDA-wide guidance.
---

# USDA FPAC/FSA Design System

## Before editing

1. Confirm the product is inside this system's scope.
2. Read [references/implementation.md](references/implementation.md) before installing, copying, or changing upstream assets.
3. Read [references/sources.md](references/sources.md) for provenance, version, and license.
4. Inspect and preserve the target project's framework, package manager, asset pipeline, and accessibility tests.

## Workflow

1. Choose one documented delivery path and pin an exact package, commit, release, or downloaded asset snapshot.
2. Use only official components, tokens, templates, and examples that are actually public.
3. Extend through documented mechanisms. Label every unsupported addition as custom.
4. Record the upstream version or commit and the accepted maturity/maintenance risk.
5. Test keyboard operation, focus, names/roles/states, errors, status messages, contrast, zoom/reflow, responsive behavior, and supported browsers.

## Boundaries

- **Scope:** USDA FPAC/FSA product interfaces, not every USDA website.
- **Delivery:** Official `fsa-style` npm package or documented ZIP download of CSS, images, and web fonts, plus hosted documentation and source repositories.
- **Release:** Official package, source, and documentation are public; releases and activity are older than most systems in this collection. Check current maintenance before adoption.
- Do not invent a registry package, public repository, component API, or release commitment.
- Do not imply that a beta, hosted asset, code example, or product-specific repository is government-wide.
- Do not claim legal or WCAG conformance for the completed service solely from component use.
- If this system does not fit the product's requirements, route to the governing system or stop and explain the gap.

## References

- [Implementation](references/implementation.md)
- [Sources](references/sources.md)
