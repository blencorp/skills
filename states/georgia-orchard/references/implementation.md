# Georgia Orchard Design System implementation

## Verified snapshot

- Verified: 2026-08-19
- Release: The official npm package and versioned CDN assets are current. No public source repository was verified.
- Delivery model: npm package with compiled CSS, per-component JavaScript bundles, and agency palette stylesheets; versioned CDN stylesheets; Storybook-style documentation with component examples.
- Package snapshot: `@georgiagov/orchard@2.14.0`

## Start

The official documentation's Getting Started for Developers describes two delivery methods:

```bash
npm install @georgiagov/orchard
```

or link a pinned, versioned CDN stylesheet:

```html
<link rel="stylesheet" href="https://orchard.georgia.gov/dist/2.14.0/orchard.min.css">
```

Pin the version in either path; do not use an unversioned asset URL.

## Integration decisions

- The package ships compiled assets only — `orchard.css`/`orchard.min.css`, per-component JavaScript bundles (for example `Alert.min.js`), agency palette stylesheets under `palettes/`, and a bundled LICENSE. Do not edit vendored files; no public source repository was verified for patches.
- Apply one agency palette stylesheet on top of the foundation rather than overriding colors ad hoc.
- Use Orchard patterns, art direction, color, and typography together rather than copying isolated visual fragments.
- Keep GovHub platform concerns separate from portable Orchard usage.
- Do not publish a look-alike Orchard package.

## Build and verify

Use the component and pattern documentation at https://orchard.georgia.gov/. Copy exact current API names and markup from that source; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
