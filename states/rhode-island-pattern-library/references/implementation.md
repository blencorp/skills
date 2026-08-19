# Rhode Island eCMS Pattern Library implementation

## Verified snapshot

- Verified: 2026-08-18
- Release state: Conditional; public source exists and is not archived, but maintenance freshness and statewide support were not confirmed.
- Delivery model: Pattern Lab source repository and generated public pattern library.
- Package snapshot: no official package verified

## Start

- Clone or vendor an audited commit from the official repository and follow its project-local build instructions.

## Integration decisions

- Review package dependencies and security status before adoption.
- Prefer maintenance of existing eCMS implementations over greenfield adoption without state confirmation.
- Do not represent Quahog as a current versioned statewide npm package.

Use exact current APIs and markup from https://state-of-rhode-island-ecms.github.io/ecms_patternlab/public/. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
