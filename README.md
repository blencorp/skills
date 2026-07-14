<video src="assets/introduction.mp4" controls="controls" style="max-width: 730px;"></video>

# BLEN's Public Sector Skills

Agent skills for public sector development — USWDS, USMDS, and more.

## Install

```bash
# Install a specific skill
npx skills add blencorp/skills --skill uswds
npx skills add blencorp/skills --skill usmds
npx skills add blencorp/skills --skill gsa-mas

# Install all skills
npx skills add blencorp/skills
```

## Skills

### USWDS — U.S. Web Design System

A comprehensive skill for building accessible web interfaces with [USWDS v3](https://designsystem.digital.gov/) and [@trussworks/react-uswds](https://github.com/trussworks/react-uswds).

```bash
npx skills add blencorp/skills --skill uswds
```

**Covers:**
- 47 components — headers, footers, forms, navigation, modals, tables, cards, and more
- 12-column responsive grid system and layout patterns
- Design tokens — color, typography, spacing
- Sass theming and customization
- Utility classes
- Section 508 / WCAG 2.1 AA accessibility patterns

**Reference files included:**

| File | Description |
|------|-------------|
| `components.md` | All USWDS and @trussworks/react-uswds components with imports and props |
| `design-tokens.md` | Color, typography, and spacing token values |
| `grid-layout.md` | Grid system, containers, breakpoints, and layout patterns |
| `sass-theming.md` | Theme customization via Sass settings variables |
| `utilities.md` | Complete utility class reference by category |

---

### USMDS — U.S. Mobile Design System

A skill for building accessible React Native mobile applications with the [U.S. Mobile Design System](https://github.com/blencorp/react-native-usmds) (USMDS) by blencorp, using NativeWind for styling.

```bash
npx skills add blencorp/skills --skill usmds
```

**Covers:**
- React Native components — Alert, Button, Card, Accordion, AlertDialog, Badge, Avatar, TextInput, Checkbox, RadioButton, Select, Textarea, and more
- NativeWind (Tailwind CSS for React Native) styling patterns
- HSL-based theme token system with light/dark mode support
- Project setup — Metro, Babel, and Tailwind configuration
- WAI-ARIA accessibility patterns for mobile
- PortalHost setup for overlay components

**Reference files included:**

| File | Description |
|------|-------------|
| `components.md` | All USMDS components with imports, props, and usage examples |
| `setup.md` | Project initialization, Metro/Babel/Tailwind configuration |
| `theming.md` | Design tokens, color system, dark mode, and custom themes |

---

### GSA MAS — Multiple Award Schedule Application Assistant

A skill that guides first-time applicants through a complete [GSA Multiple Award Schedule](https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule) (MAS) application, focused on SIN 54151S (IT Professional Services) — from eligibility check to eOffer submission and post-award obligations.

```bash
npx skills add blencorp/skills --skill gsa-mas
```

**Covers:**
- Eligibility check and readiness assessment (2-year history, financials, past performance, NAICS alignment)
- Registrations and prerequisites — SAM.gov/UEI, FAS ID with MFA, Pathways to Success training
- Technical proposal drafting across all four evaluation factors, with 10,000-character limit tracking
- Past performance — CPARS, Past Performance Questionnaires (PPQs), and permitted alternative formats
- Pricing under the current TDR regime — interactive labor category collection, EPA clause selection, commercial price list
- Final assembly checklist, cross-document consistency checks, and eOffer submission guidance
- Post-award obligations — minimum sales thresholds, monthly TDR reporting, IFF, compliance requirements
- Tracks solicitation Refresh changes (Refresh 30–32) and re-verifies current requirements via web search

**Evals included:** 38 evaluation cases covering every phase, plus behavioral checks (phase skipping, pushing back on weak inputs, catching pricing errors, correcting outdated requirements).

## About skills.sh

[skills.sh](https://skills.sh) is a registry for sharing agent skills for Claude Code. Skills provide domain-specific knowledge that helps Claude write better code for specialized frameworks and tools.

## License

Apache 2.0 — see [LICENSE](LICENSE) for details.

---

Built with ❤️ by [BLEN, Inc](https://www.blencorp.com).

## About BLEN

BLEN, Inc is a digital services company that provides Emerging Technology (ML/AI, RPA), Digital Modernization (Legacy to Cloud), and Human-Centered Web/Mobile Design and Development.
