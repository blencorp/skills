# Massachusetts Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release: Tokens, assets, and styles are public, while the complete replacement component implementation is still being released.
- Delivery model: Independent npm packages for tokens, assets, and shared Sass/utility styles; component packages are incomplete.
- Package snapshot: `@massds/mds-tokens@2.0.0`, `@massds/mds-assets@1.2.0`, `@massds/mds-styles@1.1.0`

## Start

```bash
npm install @massds/mds-tokens @massds/mds-assets @massds/mds-styles
```


## Integration decisions

- Install tokens with styles because the styles package declares tokens as a peer dependency.
- Use only components the current source of truth has released; label custom composition as custom.
- Do not start new work on Mayflower merely because it has a larger legacy catalog.

Use exact current APIs and markup from https://www.mass.gov/info-details/developer-resources-for-the-massachusetts-design-system. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
