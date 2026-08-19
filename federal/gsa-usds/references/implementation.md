# GSA TTS A U.S. Design System implementation

## Verified snapshot

- Verified: 2026-08-18
- Release: Active official source and preview, but the package is installed from GitHub and is not yet published to npm.
- Delivery model: React and TypeScript components installed directly from the official Git repository.
- Package snapshot: `github:GSA-TTS/usds (unpinned Git dependency unless a commit/tag is specified)`

## Start

```bash
npm install github:GSA-TTS/usds
```


## Integration decisions

- Pin an audited commit or release tag for production instead of tracking the moving default branch.
- Use it for information-dense operational interfaces, not as a drop-in USWDS replacement.
- Document the Git dependency and upgrade review process.

Use exact current APIs and markup from https://gsa-tts.github.io/usds/. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
