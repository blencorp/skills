# NASA Horizon Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release: Active official package, explicitly pre-1.0.
- Delivery model: NASA USWDS theme package with Sass, compiled assets, Storybook, and integration guides.
- Package snapshot: `@nasa-hds/core@0.9.0`, `@uswds/uswds@3.14.0`

## Start

```bash
npm install @nasa-hds/core @uswds/uswds
```


## Integration decisions

- Complete the official adoption fit check before implementation.
- Choose the documented existing-USWDS, React, no-build, or Sass integration path.
- Pin exact versions and expect breaking changes before 1.0.

Use exact current APIs and markup from https://nasa.github.io/hds-core/. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
