# USWDS Skill

An [Agent Skill](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) that gives Claude comprehensive, working knowledge of the [U.S. Web Design System (USWDS v3)](https://designsystem.digital.gov/) and the [@trussworks/react-uswds](https://github.com/trussworks/react-uswds) React component library. With this skill installed, Claude writes USWDS code that uses the correct components, design tokens, utility classes, and accessibility patterns instead of guessing at class names and props.

## What this skill does

- Documents all 47 USWDS components with their `@trussworks/react-uswds` imports, props, and underlying `usa-*` CSS classes — headers, footers, forms, navigation, modals, tables, cards, step indicators, and more
- Covers the mobile-first 12-column flexbox grid system, containers, breakpoints, offsets, and common page layouts
- Provides the complete design token reference for color, spacing, and typography, including the color grade "magic number" system used for contrast compliance
- Documents every utility class category (`bg-primary`, `padding-2`, `font-sans-lg`, responsive prefixes, state variants)
- Explains Sass theme customization through `$theme-` settings variables and the `@use "uswds-core" with (...)` entry point
- Enforces Section 508 / WCAG 2.1 AA accessibility patterns: semantic HTML, ARIA attributes, labeled form controls, keyboard navigation, and skip links
- Warns against common mistakes, such as importing USWDS JavaScript directly alongside React components (which double-initializes interactive components) or hardcoding hex/pixel values instead of tokens

## When Claude uses it

Claude triggers this skill automatically when a task involves:

- Building or styling UI with USWDS components, utility classes, or design tokens
- Implementing layouts with the USWDS grid system
- Creating forms, navigation, headers, footers, modals, tables, or cards in a USWDS project
- Customizing USWDS theme settings via Sass
- Working with `@trussworks/react-uswds` imports and props
- Building federal or government web interfaces generally

Example prompts:

```
Build a contact form with validation using USWDS components.
Create a two-column page layout with a side navigation using the USWDS grid.
Change our USWDS primary color to match our agency brand.
Add a modal confirmation dialog to this React page using react-uswds.
```

## Installation

Install with the [skills.sh](https://skills.sh) CLI:

```bash
npx skills add blencorp/skills --skill uswds
```

Or install manually by copying the `uswds` directory into a skills location:

- **Claude Code (personal):** `~/.claude/skills/uswds/`
- **Claude Code (project):** `.claude/skills/uswds/`
- **claude.ai:** upload the directory as a zip file under Settings > Features (requires a plan with code execution enabled)
- **Claude API:** upload through the `/v1/skills` endpoint for use with the code execution tool

No additional configuration is required. Claude discovers the skill from its `SKILL.md` metadata and loads it when relevant.

## Skill contents

The skill follows Anthropic's progressive disclosure model: the `SKILL.md` frontmatter is always visible to Claude for discovery, the `SKILL.md` body loads when the skill is triggered, and reference files load only when a task needs them. Bundled references cost no context until they are read.

| File | Purpose |
|------|---------|
| `SKILL.md` | Core conventions: architecture layers (tokens, utilities, components), React usage, accessibility requirements, and common patterns |
| `references/components.md` | All 47 components with React imports, props, and CSS classes |
| `references/design-tokens.md` | Color, spacing, and typography token values and usage methods |
| `references/grid-layout.md` | Grid system, containers, breakpoints, gutters, offsets, and layout recipes |
| `references/sass-theming.md` | Theme customization via `$theme-` settings variables, plus Sass functions and mixins |
| `references/utilities.md` | Complete utility class reference organized by category |

## Compatibility

Written for USWDS v3 and `@trussworks/react-uswds`. The component reference covers both plain HTML/CSS usage (via `usa-*` classes) and React usage, so the skill is useful in React and non-React USWDS projects alike.

## License

Apache 2.0 — see [LICENSE](../LICENSE).

---

Built with ❤️ by [BLEN, Inc](https://www.blencorp.com).
