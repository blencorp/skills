# Pennsylvania Keystone Design System implementation

## Verified snapshot

- Verified: 2026-08-19
- Release: Public guidance and code examples are current, but no official versioned package or public source repository was verified.
- Delivery model: Official documentation hub, component code in the official Keystone Storybook (components.pa.gov), tokens, and managed-platform guidance.
- Package snapshot: no official package verified

## Start

- Copy exact current component code from the official Keystone Storybook at https://components.pa.gov/ into the authorized project. The documentation hub's component pages carry usage guidance and link each component to its Storybook entry; they do not carry the code themselves.

## Integration decisions

- Separate KDS portable components from AEM author components with similar names.
- Use foundations and content guidance with components, not visual snippets alone.
- Do not claim a package or independent support channel that upstream does not publish.

Use the guidance at https://wcmauthorguide.pa.gov/keystone-design-system together with exact current markup from https://components.pa.gov/. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
