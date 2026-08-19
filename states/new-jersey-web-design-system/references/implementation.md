# New Jersey Web Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release: Active official source, npm package, documentation, and CDN.
- Delivery model: USWDS-derived npm package, source release, Sass theme, compiled files, and versioned CDN.
- Package snapshot: `@newjersey/njwds@2.9.2`

## Start

```bash
npm install @newjersey/njwds --save
```


## Integration decisions

- Follow USWDS installation and Sass compilation guidance, substituting the NJWDS package path.
- Use Grove-specific patterns first; USWDS components and utilities remain available where Grove has no delta.
- Use versioned CDN URLs in production. The official repository says the `latest` CDN path is for prototyping and cannot use a fixed SRI hash.

## Build and verify

Use the component and pattern documentation at https://grove.nj.gov/. Copy exact current API names and markup from that source; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
