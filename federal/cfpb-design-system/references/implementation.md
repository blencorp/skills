# CFPB Design System implementation

## Verified snapshot

- Verified: 2026-08-19
- Release state: Conditional; active official core and React repositories, but upstream describes both as work in progress and warns that interfaces will change.
- Delivery model: Core HTML/CSS/JavaScript and a separate React/Storybook package.
- Package snapshot: `@cfpb/cfpb-design-system@5.10.0`, `@cfpb/design-system-react@2.0.2`

## Start

```bash
npm install @cfpb/cfpb-design-system
```

```bash
npm install @cfpb/design-system-react @cfpb/cfpb-design-system lit react react-dom
```


## Integration decisions

- For React, choose one documented styling pattern. Importing React components alone does not apply CFPB styles.
- Use `@cfpb/design-system-react/index.css` for greenfield React apps, or the documented companion stylesheet when an app already compiles core styles.
- Do not load overlapping full stylesheets.

## Build and verify

Use the component and pattern documentation at https://cfpb.github.io/design-system/ (the getting-started page under /development/ covers setup only, not component APIs). Copy exact current API names and markup from the component pages; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
