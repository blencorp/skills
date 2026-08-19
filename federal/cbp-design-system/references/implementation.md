# CBP Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release: Official source and packages are explicitly beta.
- Delivery model: Web components as source of truth, with generated React components for React 18 and lower.
- Package snapshot: `@cbpds/web-components@0.9.0-beta.2`, `@cbpds/react-components@0.9.0-beta.2`

## Start

```bash
npm install @cbpds/web-components
```

```bash
npm install @cbpds/react-components
```


## Integration decisions

- Prefer web components as the official source of truth.
- Use the generated React package only with a supported React version.
- Pin the exact beta version and regression-test every upgrade.

Use exact current APIs and markup from https://us-cbp.github.io/design-system/. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
