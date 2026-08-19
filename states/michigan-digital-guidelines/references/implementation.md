# Michigan Digital Guidelines implementation

## Verified snapshot

- Verified: 2026-08-18
- Release: Current public npm packages and documentation.
- Delivery model: Stencil web components plus React and Angular wrapper packages.
- Package snapshot: `@migov/digital-guidelines-core@5.5.0`, `@migov/digital-guidelines-core-react@5.5.0`, `@migov/digital-guidelines-core-angular@5.5.0`

## Start

```bash
npm install @migov/digital-guidelines-core
```

```bash
npm install @migov/digital-guidelines-core-react
```

```bash
npm install @migov/digital-guidelines-core-angular
```


## Integration decisions

- Use core web components for framework-neutral projects.
- Use `-core-react` or `-core-angular` for the matching framework; do not use the nonexistent `digital-guidelines-react` or `digital-guidelines-angular` package names.
- Keep wrapper and core versions aligned.

## Build and verify

Use the component and pattern documentation at https://digitalguidelines.michigan.gov/docs/gettingstarted. Copy exact current API names and markup from that source; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
