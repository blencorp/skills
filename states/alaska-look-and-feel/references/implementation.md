# Alaska Look and Feel implementation

## Verified snapshot

- Verified: 2026-08-18
- Release: Official standards and hosted resources are public, but there is no versioned package or source repository.
- Delivery model: State-hosted CSS/resources and prescribed HTML components.
- Package snapshot: no official package verified

## Start

- Use the current Required Resources download and examples linked from the official Look and Feel page.

## Integration decisions

- Implement the required global header, agency header, search, content area, agency footer, global footer, and first skip link.
- Do not apply the website standard automatically to excluded web applications.
- The required-resources download itself is unversioned, though the public style catalog organizes hosted CSS by dated versions; record retrieved files with their dates and test for upstream changes.

Use exact current APIs and markup from https://www.alaska.gov/LookAndFeel/. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
