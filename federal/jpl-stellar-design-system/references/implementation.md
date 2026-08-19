# NASA JPL Stellar Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release: Official packages are current, but framework support is limited to React 18 and Svelte 4 in upstream guidance.
- Delivery model: Separate React and Svelte packages derived from shadcn-based implementations.
- Package snapshot: `@nasa-jpl/stellar-react@2.1.10`, `@nasa-jpl/stellar-svelte@2.1.10`

## Start

```bash
npm install @nasa-jpl/stellar-react --save
```

```bash
npm install @nasa-jpl/stellar-svelte --save
```


## Integration decisions

- Select exactly one framework implementation.
- Verify the consuming project uses the supported React or Svelte major version.
- Do not use Stellar as JPL's public marketing-site system.

Use exact current APIs and markup from https://github.com/nasa-jpl/stellar. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
