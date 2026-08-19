# USWDS Elements implementation

## Verified snapshot

- Verified: 2026-08-18
- Release state: Conditional; `@uswds/elements@1.0.0-alpha.6` and the official repository are explicitly pre-release.
- Delivery model: Alpha web components designed for gradual use alongside USWDS Core.
- Package snapshot: `@uswds/elements@1.0.0-alpha.6`, `@uswds/uswds@3.14.0`

## Start

```bash
npm install @uswds/elements @uswds/uswds
```


## Integration decisions

- Check the status of each individual component in its current documentation; maturity is not uniform.
- The official repository identifies the Banner as closest to stable.
- For ordinary new work, adopt USWDS Core 3.x instead of waiting for Elements.

Use exact current APIs and markup from https://github.com/uswds/uswds-elements. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
