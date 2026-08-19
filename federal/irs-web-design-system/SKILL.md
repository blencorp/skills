---
name: irs-web-design-system
description: Maintains IRS interfaces using the limited public IRS Web Design System source repository. Use only for IRS-governed work where the small USWDS-compliant component set is sufficient; verify the repository's IRS provenance and do not infer missing packages, components, or support.
---

# IRS Web Design System

> Adoption gate: Conditional; a public source repository exists, but it is small, has no package or formal release, activity is sparse, and its IRS provenance is self-attested — it is hosted on a personal GitHub account, not a government-controlled organization. Verify provenance; see the sources ledger for last-verified activity.

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

- **Scope:** IRS-governed web interfaces. The public repository is not a complete department-wide distribution.
- **Delivery:** Source repository with limited USWDS-compliant component code.
- Do not invent a registry package, public repository, component API, or release commitment.
- Do not imply that a beta, hosted asset, code example, or product-specific repository is government-wide.
- Do not claim legal or WCAG conformance for the completed service solely from component use.
- If the adoption gate cannot be accepted, route to the governing stable system or stop and explain the gap.

## References

- [Implementation](references/implementation.md)
- [Sources](references/sources.md)
