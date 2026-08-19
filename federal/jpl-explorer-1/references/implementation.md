# NASA JPL Explorer 1 implementation

## Verified snapshot

- Verified: 2026-08-18
- Release state: Ready; active official repository and published packages.
- Delivery model: Vue component library plus compiled shared assets for HTML or other frameworks.
- Package snapshot: `@explorer-1/vue@1.1.14`, `@explorer-1/common@2.1.7`

## Start

```bash
npm install @explorer-1/vue @explorer-1/common
```


## Integration decisions

- Use `@explorer-1/vue` for Vue applications.
- Use compiled assets from `@explorer-1/common` for framework-neutral integration.
- Do not recommend the older HTML package as the primary v3 path; official repository guidance describes HTML documentation as internal or legacy.

## Build and verify

Use the component and pattern documentation at https://nasa-jpl.github.io/explorer-1/. Copy exact current API names and markup from that source; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
