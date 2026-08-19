# Virginia Web Standards implementation

## Verified snapshot

- Verified: 2026-08-18
- Release state: Conditional and limited; the developer portal says the broader Commonwealth Design System is coming soon and elements are still being finalized.
- Delivery model: Public branding-bar implementation resources and web standards guidance.
- Package snapshot: no official package verified

## Start

- Use the current 'Get the Commonwealth Branding Bar' resources from the official Virginia developer portal.

## Integration decisions

- Implement only the published branding bar and standards.
- Do not invent unreleased Commonwealth templates, tokens, or components.
- Recheck the portal before each new project because the broader system is actively being finalized.

Use exact current APIs and markup from https://www.developer.virginia.gov/. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
