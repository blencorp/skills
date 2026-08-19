# Login.gov Identity Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release: Active official package and repository.
- Delivery model: USWDS-compatible Sass, JavaScript, fonts, images, and component extensions.
- Package snapshot: `@18f/identity-design-system@9.7.0`

## Start

```bash
npm install @18f/identity-design-system
```


## Integration decisions

- Treat the package as the documented drop-in replacement for `@uswds/uswds`.
- Include `node_modules/@18f/identity-design-system/packages` in Sass load paths.
- Prefer the package's compiled assets when the project cannot compile Sass; do not edit files in `node_modules`.

## Build and verify

Use the component and pattern documentation at https://github.com/18F/identity-design-system. Copy exact current API names and markup from that source; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
