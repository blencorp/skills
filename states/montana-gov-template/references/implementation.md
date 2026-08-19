# Montana.gov Template implementation

## Verified snapshot

- Verified: 2026-08-18
- Release state: Conditional; public hosted implementation instructions exist, but no package, source repository, or versioned release was verified.
- Delivery model: SITSD-hosted CSS/JavaScript and injected header/footer assets.
- Package snapshot: no official package verified

## Start

- Add the official hosted stylesheet and script exactly as documented at https://template.mt.gov/instructions.aspx.

## Integration decisions

- Use the required `template-header-wrapper`, `template-page-wrapper`, and `template-footer-wrapper` markup.
- Obtain customer-specific Template Loader or optional search configuration through the documented SITSD process.
- Do not self-publish altered hosted assets as an official Montana release.

Use exact current APIs and markup from https://template.mt.gov/instructions.aspx. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream package, commit, or asset snapshot is recorded;
- the owner accepted the release/maintenance risk;
- custom UI is visibly separated from official APIs;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
