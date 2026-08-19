# IRS Web Design System implementation

## Verified snapshot

- Verified: 2026-08-19
- Release state: Conditional; a public source repository exists, but it is small, has no package or formal release, activity is sparse, and its IRS provenance is self-attested (see the sources ledger).
- Delivery model: Source repository with limited USWDS-compliant component code.
- Package snapshot: no official package verified

## Start

- Confirm the repository's provenance with the IRS product owner, then use an audited commit from it within the authorized IRS project; no official npm package was verified.

## Integration decisions

- Use only components and files actually present in the repository.
- Apply USWDS Core for shared behavior only when the IRS source or project architecture supports it.
- Escalate missing IRS-specific patterns rather than manufacturing them.

Use exact current APIs and markup from https://github.com/irs-user-experience/irs-web-design-system. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
