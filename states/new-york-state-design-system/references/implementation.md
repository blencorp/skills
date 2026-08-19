# New York State Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release state: Ready; active official source and packages.
- Delivery model: Lit web components, CSS styles, tokens, and Angular directives.
- Package snapshot: `@nysds/components@1.20.0`, `@nysds/styles@1.20.0`, `@nysds/tokens@1.20.0`, `@nysds/angular@1.18.2`

## Start

```bash
npm install @nysds/components @nysds/styles @nysds/tokens
```

```bash
npm install @nysds/angular
```


## Integration decisions

- Use web components directly for framework-neutral applications.
- Use the Angular package only for Angular integration and verify compatibility because its current release may lag the core packages.
- Use NYS custom properties and tokens rather than duplicating theme values.

## Build and verify

Use the component and pattern documentation at https://designsystem.ny.gov/. Copy exact current API names and markup from that source; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
