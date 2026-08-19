# SAM Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release: Active official Angular package, while official documentation describes the system as an MVP in active development.
- Delivery model: Angular component package.
- Package snapshot: `@gsa-sam/components@17.0.15`

## Start

```bash
npm install @gsa-sam/components
```


## Integration decisions

- Inspect the package's current Angular peer dependencies before installation.
- Keep SAM components inside the project's supported Angular version.
- Do not transplant SAM product patterns into unrelated GSA services.

Use exact current APIs and markup from https://gsa.github.io/sam-design-system-site/. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
