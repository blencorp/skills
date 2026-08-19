# NCI Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release state: Ready; current public release 3.5.1 with authenticated package, CDN, and direct-download paths.
- Delivery model: GitHub Packages for Sass/JavaScript, pinned CDN bundles, or direct download.
- Package snapshot: `@nciocpl/ncids-css@3.5.1 (GitHub Packages)`, `@nciocpl/ncids-js@3.5.1 (GitHub Packages)`

## Start

```bash
npm login --scope=@NCIOCPL --auth-type=legacy --registry=https://npm.pkg.github.com
```

```bash
npm install @nciocpl/ncids-css @nciocpl/ncids-js
```


## Integration decisions

- Never request, store, or print a GitHub token in generated source. Let the user authenticate through their normal credential workflow.
- Use Dart Sass and the exact version constraints documented by the current release.
- Prefer modular Sass packages; use a pinned release CDN or direct download when package authentication is not appropriate.

## Build and verify

Use the component and pattern documentation at https://designsystem.cancer.gov/get-started/developers. Copy exact current API names and markup from that source; if the requested pattern is absent, say that the upstream system does not document it and propose a clearly labeled custom extension.

At minimum, verify:

- automated unit/component tests already used by the project;
- an automated accessibility scan as a smoke test;
- keyboard-only operation and visible focus;
- screen-reader names, roles, states, errors, and status messages;
- 200% and 400% zoom/reflow where applicable;
- responsive behavior and supported browsers;
- no duplicate initialization or overlapping full stylesheets.
