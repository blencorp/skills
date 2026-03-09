# USWDS Design Tokens Reference

Design tokens are named values for color, spacing, typography. Never use raw hex/px — always use tokens.

## Table of Contents

- [Color Tokens](#color-tokens)
- [Spacing Tokens](#spacing-tokens)
- [Typography Tokens](#typography-tokens)
- [Other Tokens](#other-tokens)

---

## Color Tokens

### Usage Methods

| Method | Example |
|---|---|
| Sass function | `color('primary')` |
| Sass mixin | `@include u-text('primary')`, `@include u-bg('white')` |
| Utility class | `.text-primary`, `.bg-white`, `.border-primary` |

### Theme Color Tokens

**Base** (neutral grays):

| Token | Hex | Usage |
|---|---|---|
| `'base-lightest'` | #f0f0f0 | Light backgrounds |
| `'base-lighter'` | #dfe1e2 | Borders, dividers |
| `'base-light'` | #a9aeb1 | Disabled text |
| `'base'` | #71767a | Secondary text |
| `'base-dark'` | #565c65 | Body text |
| `'base-darker'` | #3d4551 | Headings |
| `'base-darkest'` | #1b1b1b | High-contrast text |
| `'ink'` | #1b1b1b | Default text color |

**Primary**:

| Token | Hex |
|---|---|
| `'primary-lighter'` | #d9e8f6 |
| `'primary-light'` | #73b3e7 |
| `'primary'` | #005ea2 |
| `'primary-vivid'` | #0050d8 |
| `'primary-dark'` | #1a4480 |
| `'primary-darker'` | #162e51 |

**Secondary**:

| Token | Hex |
|---|---|
| `'secondary-lighter'` | #f3e1e4 |
| `'secondary-light'` | #f2938c |
| `'secondary'` | #d83933 |
| `'secondary-vivid'` | #e41d3d |
| `'secondary-dark'` | #b50909 |
| `'secondary-darker'` | #8b0a03 |

**Accent Cool**:

| Token | Hex |
|---|---|
| `'accent-cool-lighter'` | #e1f3f8 |
| `'accent-cool-light'` | #97d4ea |
| `'accent-cool'` | #00bde3 |
| `'accent-cool-dark'` | #28a0cb |
| `'accent-cool-darker'` | #07648d |

**Accent Warm**:

| Token | Hex |
|---|---|
| `'accent-warm-lighter'` | #f2e4d4 |
| `'accent-warm-light'` | #ffbc78 |
| `'accent-warm'` | #fa9441 |
| `'accent-warm-dark'` | #c05600 |
| `'accent-warm-darker'` | #775540 |

### State Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `'info-lighter'` | #e7f6f8 | Info background |
| `'info-light'` | #99deea | |
| `'info'` | #00bde3 | Info alerts, icons |
| `'info-dark'` | #009ec1 | |
| `'info-darker'` | #2e6276 | |
| `'success-lighter'` | #ecf3ec | Success background |
| `'success-light'` | #70e17b | |
| `'success'` | #00a91c | Success alerts |
| `'success-dark'` | #008817 | |
| `'success-darker'` | #216e1f | |
| `'warning-lighter'` | #faf3d1 | Warning background |
| `'warning-light'` | #fee685 | |
| `'warning'` | #ffbe2e | Warning alerts |
| `'warning-dark'` | #e5a000 | |
| `'warning-darker'` | #936f38 | |
| `'error-lighter'` | #f4e3db | Error background |
| `'error-light'` | #f39268 | |
| `'error'` | #d54309 | Error alerts, validation |
| `'error-dark'` | #b50909 | |
| `'error-darker'` | #6f3331 | |
| `'disabled-lighter'` | — | Disabled backgrounds |
| `'disabled-light'` | — | |
| `'disabled'` | — | Disabled elements |
| `'disabled-dark'` | — | |
| `'disabled-darker'` | — | |
| `'emergency'` | #9c3d10 | Emergency alerts |
| `'emergency-dark'` | #332d29 | |

### System Color Families (24 families)

Each family has grades 5-90 and vivid variants (5v-80v):

`red-cool`, `red`, `red-warm`, `orange-warm`, `orange`, `gold`, `yellow`, `green-warm`, `green`, `green-cool`, `mint`, `mint-cool`, `cyan`, `blue-cool`, `blue`, `blue-warm`, `indigo-cool`, `indigo`, `indigo-warm`, `violet`, `violet-warm`, `magenta`, `gray-cool`, `gray`, `gray-warm`

Usage: `color('blue-50')`, `color('red-warm-60v')`, `.bg-blue-50`, `.text-red-warm-60v`

### Contrast Magic Numbers

Grade difference determines WCAG contrast compliance:

| Grade Difference | Contrast Level |
|---|---|
| 40+ | AA Large Text |
| 50+ | AA / AAA Large Text |
| 70+ | AAA |

Grade 50 colors meet AA contrast against both white (grade 0) and black (grade 100).

### Special Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `'white'` | #ffffff | White backgrounds |
| `'black'` | #000000 | Pure black |
| `'transparent'` | transparent | Transparent backgrounds |

---

## Spacing Tokens

### Usage Methods

| Method | Example |
|---|---|
| Sass function | `units(2)` → 16px |
| Sass mixin | `@include u-padding-x(2)`, `@include u-margin-y(3)` |
| Utility class | `.padding-x-2`, `.margin-y-3`, `.width-card-lg` |

### Spacing Scale

| Token | Numeric | Value |
|---|---|---|
| `'1px'` | — | 1px |
| `'2px'` | — | 2px |
| `'05'` | 0.5 | 4px |
| `'1'` | 1 | 8px |
| `'105'` | 1.5 | 12px |
| `'2'` | 2 | 16px |
| `'205'` | 2.5 | 20px |
| `'3'` | 3 | 24px |
| `'4'` | 4 | 32px |
| `'5'` | 5 | 40px |
| `'6'` | 6 | 48px |
| `'7'` | 7 | 56px |
| `'8'` | 8 | 64px |
| `'9'` | 9 | 72px |
| `'10'` | 10 | 80px |
| `'15'` | 15 | 120px |

### Named Spacing Tokens

| Token | Value | Use Case |
|---|---|---|
| `'card'` | 160px | Card width |
| `'card-lg'` | 240px | Large card width |
| `'mobile'` | 320px | Mobile breakpoint |
| `'mobile-lg'` | 480px | Large mobile |
| `'tablet'` | 640px | Tablet breakpoint |
| `'tablet-lg'` | 880px | Large tablet |
| `'desktop'` | 1024px | Desktop breakpoint |
| `'desktop-lg'` | 1200px | Large desktop |
| `'widescreen'` | 1400px | Widescreen |

### Negative Spacing

Use numeric negatives (`-1`, `-2`) or string (`'neg-1'`, `'neg-2'`):

```scss
margin-left: units(-2);  // -16px
```

Utility class: `.margin-left-neg-2`

---

## Typography Tokens

### Font Family Tokens

**Role tokens** (use these):

| Token | Maps To | Usage |
|---|---|---|
| `'body'` | `'sans'` | Body text |
| `'heading'` | `'serif'` | Headings |
| `'ui'` | `'sans'` | UI elements |
| `'code'` | `'mono'` | Code blocks |
| `'alt'` | `'serif'` | Alternate text |

**Type tokens**:

| Token | Default Typeface |
|---|---|
| `'sans'` | Source Sans Pro |
| `'serif'` | Merriweather |
| `'mono'` | Roboto Mono |

**Available typefaces**: `'georgia'`, `'helvetica'`, `'merriweather'`, `'open-sans'`, `'public-sans'`, `'roboto-mono'`, `'source-sans-pro'`, `'system'`, `'tahoma'`, `'verdana'`

Usage: `family('sans')`, `@include u-font-family('body')`, `.font-family-sans`

### Font Size Tokens

Theme sizes (named tokens):

| Token | Target px |
|---|---|
| `'3xs'` | 13px |
| `'2xs'` | 14px |
| `'xs'` | 15px |
| `'sm'` | 16px |
| `'md'` | 17px |
| `'lg'` | 22px |
| `'xl'` | 32px |
| `'2xl'` | 40px |
| `'3xl'` | 48px |

System sizes: `'micro'` (10px) through `'20'` (140px)

Font size requires TWO tokens — family + size:

```scss
// Function
font-size: size('sans', 'lg');

// Mixin (combined family + size)
@include u-font('sans', 'lg');

// Utility class
.font-sans-lg
```

### Font Weight Tokens

| Token | Value |
|---|---|
| `'thin'` | 100 |
| `'light'` | 300 |
| `'normal'` | 400 |
| `'medium'` | 500 |
| `'semibold'` | 600 |
| `'bold'` | 700 |
| `'heavy'` | 900 |

Usage: `font-weight('bold')`, `@include u-text('bold')`, `.text-bold`

### Line Height Tokens

| Token | Value |
|---|---|
| `1` | 1 (no leading) |
| `2` | 1.15 |
| `3` | 1.35 |
| `4` | 1.5 |
| `5` | 1.62 |
| `6` | 1.75 |

Line height also requires family token:
```scss
@include u-line-height('sans', 3);
.line-height-sans-3
```

### Measure (Line Length) Tokens

| Token | Value |
|---|---|
| `1` | 44ex |
| `2` | 60ex |
| `3` | 64ex |
| `4` | 68ex |
| `5` | 72ex |
| `6` | 88ex |
| `'none'` | no max |

Usage: `measure(3)`, `@include u-measure(3)`, `.measure-3`

---

## Other Tokens

### Opacity

| Token | Value |
|---|---|
| `0` | 0 (transparent) |
| `10` | 0.1 |
| `20` | 0.2 |
| `30` | 0.3 |
| `40` | 0.4 |
| `50` | 0.5 |
| `60` | 0.6 |
| `70` | 0.7 |
| `80` | 0.8 |
| `90` | 0.9 |
| `100` | 1 (opaque) |

### Shadow

| Token | Usage |
|---|---|
| `'none'` | No shadow |
| `1` | Subtle shadow |
| `2` | Light shadow |
| `3` | Medium shadow |
| `4` | Heavy shadow |
| `5` | Heaviest shadow |

### Z-Index

| Token | Value |
|---|---|
| `'auto'` | auto |
| `100` | 100 |
| `200` | 200 |
| `300` | 300 |
| `400` | 400 |
| `500` | 500 |

### Order

| Token | Value |
|---|---|
| `'first'` | -1 |
| `'last'` | 999 |
| `'initial'` | 0 |
| `0`-`11` | 0-11 |
