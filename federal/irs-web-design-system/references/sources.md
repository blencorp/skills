# IRS Web Design System sources

Retrieved 2026-08-19. Recheck before every new production adoption.

## Authoritative sources

- https://github.com/IRS-Public/design

## Captured facts

- Scope: IRS-governed web interfaces. The published material is a design guide for IRS.gov surfaces, not a complete department-wide component distribution.
- Provenance: `IRS-Public` is the IRS GitHub organization (`https://irs.gov/` listed as its website). It also hosts the IRS's open-sourced products — `direct-file`, `fact-graph`, `tax-withholding-estimator`, and `eitc-assistant` — released under the SHARE IT Act, which corroborates the account. Note that GitHub's own `is_verified` flag is `false` for the organization, as it is for many genuine agency accounts; the corroboration is the product history, not the badge.
- Release: The repository was created 2026-06-29 and last pushed 2026-07-09. Its README describes the guide as "a proposal under active review." Pin an exact commit.
- Delivery: Page-first. A canonical `irs.css` stylesheet plus base page templates mirroring live IRS.gov surfaces, with speculative prototypes kept separate. Built on the U.S. Web Design System with the IRS palette and masthead. GitHub Pages is enabled. No build process is required.
- Registry snapshot: no official package published.
- License/terms: No license file is present in the repository. Confirm reuse terms with the IRS before redistributing assets.

## Separate, unverified repository

`https://github.com/irs-user-experience/irs-web-design-system` describes itself as "the IRS web design system, a library of USWDS-compliant web design components." It is **not** an IRS-organization repository:

- The account `irs-user-experience` is of GitHub type `User` — a personal account, not an organization.
- It holds one public repository, created 2025-03-26, last pushed 2025-04-02, with no package, no formal release, no license (`NOASSERTION`), and no stars or forks.
- IRS signals are self-attested (an @irs.gov commit author and the README's IRS voice).

Treat it as unverified. Do not present it as an official IRS distribution, and confirm provenance with the IRS before using its code.

Government names, seals, and marks may have restrictions separate from code. Preserve notices and confirm branding authorization.
