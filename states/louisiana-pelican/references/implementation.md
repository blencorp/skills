# Louisiana Pelican Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release: Pelican 2 is current and the official package and repository are active.
- Delivery model: npm package with compiled CSS/JavaScript and Bootstrap dependencies.
- Package snapshot: `@la-ots/pelican@2.3.5`, `bootstrap`, `@popperjs/core`

## Start

```bash
npm install --save @la-ots/pelican bootstrap @popperjs/core
```


## Integration decisions

- Import Pelican's compiled assets through the existing bundler, or copy the documented compiled assets for .NET/static deployments.
- Do not combine Pelican 1 and Pelican 2 assets.
- Use Pelican component markup rather than raw Bootstrap examples when Pelican documents the pattern.

## Build and verify

Use the component and pattern documentation at https://pelican.ots.la.gov/. Copy exact current API names and markup from that source; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
