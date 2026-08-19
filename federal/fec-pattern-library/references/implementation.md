# FEC Pattern Library implementation

## Verified snapshot

- Verified: 2026-08-18
- Release state: Conditional; active public source and documentation, but product-specific and not distributed as an independent package.
- Delivery model: Source repository and generated pattern library coupled to the FEC CMS assets.
- Package snapshot: no official package verified

## Start

- Clone or vendor the audited official repository revision inside an authorized FEC development workflow, then use its documented npm setup.

## Integration decisions

- The official repository depends on the FEC CMS repository as a local npm package for frontend assets.
- Do not copy FEC branding or patterns into another agency.
- Prefer the consuming FEC application's existing pinned revision and build commands.

Use exact current APIs and markup from https://fec-pattern-library.app.cloud.gov/. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
