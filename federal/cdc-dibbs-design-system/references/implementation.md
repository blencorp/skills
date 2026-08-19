# CDC DIBBs Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release state: Conditional; public official source exists, but there is no standalone package or complete public documentation site.
- Delivery model: Repository-based USWDS configuration, Sass overrides, build setup, and example markup.
- Package snapshot: no official package verified

## Start

- Use the consuming DIBBs repository's pinned source revision and npm workflow; do not fabricate a registry package.

## Integration decisions

- Treat the repository as product source, not as a supported general CDC library.
- Preserve its exact USWDS configuration and build commands when maintaining DIBBs.
- For unrelated CDC work, obtain the governing system instead of copying this theme.

Use exact current APIs and markup from https://github.com/CDCgov/dibbs-design-system. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
