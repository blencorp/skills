# IRS Web Design System implementation

## Verified snapshot

- Verified: 2026-08-19
- Release: Repository created 2026-06-29, last pushed 2026-07-09. The README describes the guide as "a proposal under active review."
- Delivery model: Page-first design guide — a canonical `irs.css` stylesheet plus base page templates, built on USWDS with the IRS palette and masthead. No build process required.
- Package snapshot: no official package published.
- License: no license file present in the repository.

## Start

- Pin an exact commit from https://github.com/IRS-Public/design and vendor the canonical `irs.css` plus the page template you are starting from.
- Scaffold whole pages from the base templates rather than assembling isolated components; the guide is organized page-first.
- Keep the repository's speculative prototypes out of production work — they are exploratory, not part of the codified look.
- Confirm reuse terms with the IRS product owner, since no license file is published.

## Integration decisions

- Use only the blocks, recipes, and templates actually present in the repository and its `DESIGN.md`.
- Apply USWDS Core for shared behavior where the guide builds on it; the IRS layer supplies palette, masthead, and typography.
- Escalate missing IRS-specific patterns rather than manufacturing them.

Use exact current markup and CSS from https://github.com/IRS-Public/design. If the needed pattern is absent, report the upstream gap and keep any proposed extension clearly outside the official system.

## Acceptance checks

- exact upstream commit or asset snapshot is recorded;
- reuse terms confirmed with the IRS, given the absent license file;
- custom UI is visibly separated from official templates and blocks;
- no duplicate scripts or overlapping full stylesheets;
- automated checks are supplemented by keyboard, screen-reader, zoom/reflow, responsive, and browser testing.
