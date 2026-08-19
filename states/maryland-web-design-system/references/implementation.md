# Maryland Web Design System implementation

## Verified snapshot

- Verified: 2026-08-19
- Release: The current release is pre-1.0 and alpha-tagged, and official documentation says MDWDS is under development.
- Delivery model: Framework-agnostic web components and supporting package assets.
- Package snapshot: `@maryland-gov/mdwds@0.47.0`

## Start

```bash
npm install @maryland-gov/mdwds
```


## Integration decisions

- Use the official Storybook Getting Started instructions for the package's current imports and initialization.
- Pin the package version and inspect release notes before upgrading because the system is pre-1.0 and under development.
- Do not claim the npm-declared GitHub repository is publicly accessible; live verification returned 404.

## Build and verify

Use the component and pattern documentation at https://designsystem.maryland.gov/?path=/docs/getting-started-for-engineers--docs. Copy exact current API names and markup from that source; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
