# Missouri.gov Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release: Public templates and assets exist, but there is no versioned package or verified source repository.
- Delivery model: Hosted customized Bootstrap assets, page templates, and component examples.
- Package snapshot: no official package verified

## Start

- Use the current template and asset references published at https://assets.mo.gov/ and record the retrieved asset URLs.

## Integration decisions

- Start from an official MO.gov template instead of reconstructing it from a live page.
- Treat Bootstrap examples as MO.gov v5-specific only when the official page includes the customization.
- Because delivery is unversioned, run visual and interaction regression checks when hosted assets change.

Use exact current APIs and markup from https://assets.mo.gov/mov5/components.html. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
