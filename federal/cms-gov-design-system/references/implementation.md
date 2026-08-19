# CMS.gov Design System implementation

## Verified snapshot

- Verified: 2026-08-19
- Release state: Ready; active package in the CMS Design System monorepo.
- Delivery model: Branded child-system package consuming CMS Design System core.
- Package snapshot: `@cmsgov/ds-cms-gov@18.1.0`, `@cmsgov/design-system@18.1.0`

## Start

```bash
npm install --save @cmsgov/ds-cms-gov
```

The official docs install only the child package; it already depends on an exact-pinned CMS core. Do not add `@cmsgov/design-system` as a separate top-level dependency — a drifting second pin can load two core copies.


## Integration decisions

- Load the CMS.gov child theme and use CMS core for shared component behavior.
- Keep child and core versions compatible and normally aligned.
- Do not assume all CMS-operated sites carry the CMS.gov brand.

## Build and verify

Use the component and pattern documentation at https://design.cms.gov/?theme=cmsgov (installation and usage: https://design.cms.gov/getting-started/for-developers/?theme=cmsgov); the child-design-systems overview page describes the model but carries no component APIs. Copy exact current API names and markup from the themed documentation; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
