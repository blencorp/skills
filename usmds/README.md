# USMDS Skill

An [Agent Skill](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) that gives Claude working knowledge of the [U.S. Mobile Design System (USMDS)](https://github.com/blencorp/react-native-usmds) by BLEN — a React Native component library for building accessible, federal-standards-aligned mobile applications, styled with [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native). With this skill installed, Claude uses the correct component imports, styling conventions, theme tokens, and project configuration instead of improvising.

## What this skill does

- Documents the USMDS component library — Accordion, Alert, AlertDialog, Avatar, Badge, Button, Card, Checkbox, RadioButton, Select, TextInput, Textarea, and more — with imports from `@/components/ui/*`, props, and usage examples
- Covers NativeWind styling via the `className` prop and the library's key conventions, such as wrapping text content in `<Text>` components rather than passing bare strings
- Explains the HSL-based theme token system (`background`, `primary`, `destructive`, `muted`, `border`, and their `foreground` variants) mapped through CSS custom properties in `tailwind.config.js`, including light/dark mode support
- Provides project setup guidance: the `npx @blen/usmds init` scaffold and the equivalent manual Metro, Babel, and Tailwind configuration
- Documents the `PortalHost` requirement from `@rn-primitives/portal` — without it, overlay components such as AlertDialog, Tooltip, Popover, and DropdownMenu will not render
- Applies WAI-ARIA accessibility patterns adapted for React Native, including automatic screen reader roles on Alert components and structured, accessible dialogs

## When Claude uses it

Claude triggers this skill automatically when a task involves:

- Building React Native mobile apps with USMDS components
- Imports from `@/components/ui/` or `react-native-usmds`
- NativeWind `className` styling in React Native
- `npx @blen/usmds` commands or USMDS project setup
- Setting up NativeWind and Tailwind theming for React Native
- Accessible mobile UI following federal design standards

Example prompts:

```
Set up USMDS in my Expo project.
Build a login form with email validation using USMDS components.
Add a delete confirmation dialog to this screen.
Configure dark mode for my USMDS theme.
```

## Installation

Install with the [skills.sh](https://skills.sh) CLI:

```bash
npx skills add blencorp/skills --skill usmds
```

Or install manually by copying the `usmds` directory into a skills location:

- **Claude Code (personal):** `~/.claude/skills/usmds/`
- **Claude Code (project):** `.claude/skills/usmds/`
- **claude.ai:** upload the directory as a zip file under Settings > Features (requires a plan with code execution enabled)
- **Claude API:** upload through the `/v1/skills` endpoint for use with the code execution tool

No additional configuration is required. Claude discovers the skill from its `SKILL.md` metadata and loads it when relevant.

## Skill contents

The skill follows Anthropic's progressive disclosure model: the `SKILL.md` frontmatter is always visible to Claude for discovery, the `SKILL.md` body loads when the skill is triggered, and reference files load only when a task needs them. Bundled references cost no context until they are read.

| File | Purpose |
|------|---------|
| `SKILL.md` | Core conventions: architecture layers (components, NativeWind styling, theme tokens), component usage patterns, PortalHost setup, and accessibility guidance |
| `references/components.md` | All USMDS components with imports, props, and usage examples, plus the component registry URL |
| `references/setup.md` | Project initialization via `npx @blen/usmds init` and manual Metro, Babel, and Tailwind configuration |
| `references/theming.md` | Design tokens, the HSL color system, border radius tokens, dark mode, and custom theme configuration |

## Compatibility

Written for React Native projects using NativeWind, with configuration examples targeting Expo (via `expo/metro-config` and `babel-preset-expo`). Overlay components depend on `@rn-primitives/portal`.

## License

Apache 2.0 — see [LICENSE](../LICENSE).

---

Built with ❤️ by [BLEN, Inc](https://www.blencorp.com).
