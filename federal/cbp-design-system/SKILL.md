---
name: cbp-design-system
description: Builds U.S. Customs and Border Protection interfaces with the official beta web-component or generated React packages. Use for CBP products that accept beta risk and supported React constraints; do not use the archived CBP Theme.
---

# CBP Design System

> Adoption gate: Conditional; official source and packages are explicitly beta — interfaces may change between beta releases. See the sources ledger for the current snapshot.

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

- **Scope:** CBP-governed product interfaces.
- **Delivery:** Web components as source of truth, with generated React components for React 18 and lower.
- Do not invent a registry package, public repository, component API, or release commitment.
- Do not imply that a beta, hosted asset, code example, or product-specific repository is government-wide.
- Do not claim legal or WCAG conformance for the completed service solely from component use.
- If the adoption gate cannot be accepted, route to the governing stable system or stop and explain the gap.

## References

- [Implementation](references/implementation.md)
- [Sources](references/sources.md)
