---
name: irs-web-design-system
description: Builds IRS web interfaces from the IRS online design guide published by the IRS GitHub organization — a USWDS-based page-first guide with a canonical stylesheet and page templates. Use for IRS-governed work; the guide describes itself as a proposal under active review and publishes no package.
---

# IRS Web Design System

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

- **Scope:** IRS-governed web interfaces. The published material is a design guide for IRS.gov surfaces, not a complete department-wide component distribution.
- **Delivery:** Page-first guide from `IRS-Public/design`: a canonical `irs.css` stylesheet plus base page templates mirroring live IRS.gov surfaces, built on USWDS with the IRS palette and masthead. No npm package is published and no build step is required.
- **Release:** The guide describes itself as a proposal under active review. Pin an exact commit.
- **License:** No license file is present in the repository. Confirm reuse terms with the IRS before redistributing assets.
- Do not invent a registry package, component API, or release commitment.
- A separate repository, `irs-user-experience/irs-web-design-system`, is hosted on a personal GitHub account rather than the IRS organization, and has not been updated since April 2025. Do not treat it as an official IRS distribution or merge its code with the design guide without confirming provenance.
- Do not imply that a beta, hosted asset, code example, or product-specific repository is government-wide.
- Do not claim legal or WCAG conformance for the completed service solely from component use.
- If this system does not fit the product's requirements, route to the governing system or stop and explain the gap.

## References

- [Implementation](references/implementation.md)
- [Sources](references/sources.md)
