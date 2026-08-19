# Delaware Lighthouse Design System implementation

## Verified snapshot

- Verified: 2026-08-19
- Release: Official documentation, versioned hosted CDN assets, and code samples exist, but no npm package or public source repository was verified.
- Delivery model: State-hosted versioned CDN CSS/JS with a Bootstrap dependency, copy-ready HTML components, WordPress-oriented templates, downloadable assets, and official documentation.
- Package snapshot: no npm package verified; hosted CDN release 1.2

## Start

The official "How to use" developer instructions link the state-hosted, versioned CDN assets plus the documented Bootstrap dependency:

```html
<link rel="stylesheet" href="https://lighthousecdn.delaware.gov/1.2/lighthouse.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://lighthousecdn.delaware.gov/1.2/lighthouse.min.js"></script>
```

Pin the release path (the Releases page lists versioned releases such as 1.0, 1.1, 1.2), then copy the exact current component markup from the official Lighthouse documentation into the authorized project.

## Integration decisions

- Prefer Lighthouse's documented WordPress integration where applicable.
- Preserve official accessibility-tested structure when adapting templates.
- Do not invent an npm package or redistribute undocumented assets.

Use exact current APIs and markup from https://lighthouse.delaware.gov/. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
