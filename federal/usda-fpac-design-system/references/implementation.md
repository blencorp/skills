# USDA FPAC/FSA Design System implementation

## Verified snapshot

- Verified: 2026-08-19
- Release state: Conditional; the official package, source, and documentation are public, but releases and activity are older than the Ready systems.
- Delivery model: Official `fsa-style` npm package or documented ZIP download of CSS, images, and web fonts, plus hosted documentation and source repositories.
- Package snapshot: `fsa-style@2.7.7` (latest release published 2022)

## Start

The official Getting Started page documents two delivery options for fsa-style's HTML, CSS, images, and web fonts:

```bash
npm install --save fsa-style
```

or the documented ZIP download from the official repository. Pin the version or release either way.

## Integration decisions

- Review repository activity, release age, dependencies, and browser assumptions before new adoption; the latest package release predates the Ready systems by years.
- Do not apply FPAC/FSA branding to another USDA mission area.
- For new department-wide work, check current USDA policy and USWDS rather than assuming this is the department standard.

Use exact current APIs and markup from https://usda-fsa.github.io/fsa-design-system/. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
