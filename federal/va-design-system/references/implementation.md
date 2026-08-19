# VA Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release state: Ready; actively maintained official web and mobile libraries.
- Delivery model: Web components with React bindings, CSS/tokens, and a separate native-mobile library.
- Package snapshot: `@department-of-veterans-affairs/component-library@56.11.0`, `@department-of-veterans-affairs/css-library@0.34.2`, `@department-of-veterans-affairs/mobile-component-library@0.36.3`, `@department-of-veterans-affairs/mobile-tokens@0.23.0`

## Start

```bash
npm install @department-of-veterans-affairs/component-library @department-of-veterans-affairs/css-library
```

```bash
npm install @department-of-veterans-affairs/mobile-component-library @department-of-veterans-affairs/mobile-tokens
```


## Integration decisions

- For web work, prefer current web components or their generated React bindings; the old standalone React-components package is deprecated.
- For native mobile work, use the mobile packages and VA mobile engineering documentation rather than adapting web components.
- Follow VA patterns and content guidance for complete flows, not only visual components.

## Build and verify

Use the component and pattern documentation at https://design.va.gov/about/developers/install. Copy exact current API names and markup from that source; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
