# Texas Design System implementation

## Verified snapshot

- Verified: 2026-08-19
- Release state: Conditional; complete version 1.0.0 reference delivery from May 2026 — a one-time deliverable, not a continuously supported package, with the adopting agency owning maintenance after handoff.
- Delivery model: Plain HTML, `design-system.css`, optional `design-system.js`, CSS custom properties, and Figma resources; no framework or build step required.
- Package snapshot: no official package verified

## Start

- Download the current official `design-system.css` and `design-system.js` assets from the Texas Design System and self-host them with the project.

## Integration decisions

- Use `design-system.js` only for documented interactive components.
- Use `txds-` BEM class names and `--txds-*` custom properties exactly as documented.
- Do not create an npm dependency or claim ongoing support. Record the downloaded version and checksum in the consuming project.

## Build and verify

Use the component and pattern documentation at https://dir.texas.gov/txds/getting-started/. Copy exact current API names and markup from that source; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
