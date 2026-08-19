# CMS Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release state: Ready; active official monorepo and npm package.
- Delivery model: CSS, JavaScript, React components, utility classes, tokens, and grid framework.
- Package snapshot: `@cmsgov/design-system@18.1.0`

## Start

```bash
npm install @cmsgov/design-system
```


## Integration decisions

- Choose the package's CSS/JavaScript or React entry points that match the existing project.
- Use CMS components and tokens before adding custom UI.
- Do not add a child brand package unless the product is actually governed by that child system.

## Build and verify

Use the component and pattern documentation at https://design.cms.gov/. Copy exact current API names and markup from that source; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
