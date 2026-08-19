# Utah Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release: Active official repository and packages.
- Delivery model: Sass/CSS, React components, compiled CDN assets, and a separate header package.
- Package snapshot: `@utahdts/utah-design-system@5.3.0`, `@utahdts/utah-design-system-header@5.3.0`

## Start

```bash
npm install @utahdts/utah-design-system @utahdts/utah-design-system-header
```


## Integration decisions

- Use documented Sass/CSS and component examples as the primary portable contract.
- Use the React implementation where it fits the project, but official package guidance says React is not the only or primary resource.
- Pin CDN URLs for production instead of using an unversioned path.

## Build and verify

Use the component and pattern documentation at https://designsystem.utah.gov/resources/gettingStarted. Copy exact current API names and markup from that source; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
