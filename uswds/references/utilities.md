# USWDS Utility Classes Reference

Single-property CSS classes following the pattern `.{property}-{token}`. Apply responsive prefixes (`tablet:`, `desktop:`) for breakpoint-specific styles.

## Table of Contents

- [Layout & Display](#layout--display)
- [Flexbox](#flexbox)
- [Spacing (Margin & Padding)](#spacing)
- [Dimensions](#dimensions)
- [Typography](#typography)
- [Colors](#colors)
- [Borders](#borders)
- [Shadows & Effects](#shadows--effects)
- [Position](#position)
- [Miscellaneous](#miscellaneous)
- [Responsive Prefixes](#responsive-prefixes)
- [State Variants](#state-variants)

---

## Layout & Display

| Class | CSS Property |
|---|---|
| `.display-block` | display: block |
| `.display-flex` | display: flex |
| `.display-inline` | display: inline |
| `.display-inline-block` | display: inline-block |
| `.display-inline-flex` | display: inline-flex |
| `.display-none` | display: none |
| `.display-table` | display: table |
| `.display-table-cell` | display: table-cell |
| `.display-table-row` | display: table-row |
| `.overflow-hidden` | overflow: hidden |
| `.overflow-scroll` | overflow: scroll |
| `.overflow-auto` | overflow: auto |
| `.overflow-visible` | overflow: visible |
| `.clearfix` | clear float |

---

## Flexbox

### Container

| Class | CSS Property |
|---|---|
| `.display-flex` | display: flex |
| `.flex-row` | flex-direction: row |
| `.flex-column` | flex-direction: column |
| `.flex-wrap` | flex-wrap: wrap |
| `.flex-no-wrap` | flex-wrap: nowrap |

### Alignment

| Class | CSS Property |
|---|---|
| `.flex-align-start` | align-items: flex-start |
| `.flex-align-center` | align-items: center |
| `.flex-align-end` | align-items: flex-end |
| `.flex-align-stretch` | align-items: stretch |
| `.flex-align-self-start` | align-self: flex-start |
| `.flex-align-self-center` | align-self: center |
| `.flex-align-self-end` | align-self: flex-end |
| `.flex-align-self-stretch` | align-self: stretch |

### Justify Content

| Class | CSS Property |
|---|---|
| `.flex-justify` | justify-content: space-between |
| `.flex-justify-start` | justify-content: flex-start |
| `.flex-justify-center` | justify-content: center |
| `.flex-justify-end` | justify-content: flex-end |

### Flex Item

| Class | CSS Property |
|---|---|
| `.flex-1` through `.flex-12` | flex: 1-12 |
| `.flex-auto` | flex: auto |
| `.flex-fill` | flex: 1 0 0 |

### Order

| Class | CSS Property |
|---|---|
| `.order-first` | order: -1 |
| `.order-last` | order: 999 |
| `.order-initial` | order: 0 |
| `.order-0` through `.order-11` | order: 0-11 |

---

## Spacing

### Padding

| Pattern | Example |
|---|---|
| `.padding-{token}` | `.padding-2` (16px all sides) |
| `.padding-top-{token}` | `.padding-top-3` (24px top) |
| `.padding-right-{token}` | `.padding-right-1` (8px right) |
| `.padding-bottom-{token}` | `.padding-bottom-4` (32px bottom) |
| `.padding-left-{token}` | `.padding-left-2` (16px left) |
| `.padding-x-{token}` | `.padding-x-2` (16px left+right) |
| `.padding-y-{token}` | `.padding-y-3` (24px top+bottom) |

### Margin

| Pattern | Example |
|---|---|
| `.margin-{token}` | `.margin-2` |
| `.margin-top-{token}` | `.margin-top-3` |
| `.margin-right-{token}` | `.margin-right-auto` |
| `.margin-bottom-{token}` | `.margin-bottom-4` |
| `.margin-left-{token}` | `.margin-left-auto` |
| `.margin-x-{token}` | `.margin-x-auto` (center) |
| `.margin-y-{token}` | `.margin-y-3` |

Negative margins: `.margin-top-neg-2`, `.margin-left-neg-1`

Special: `.margin-x-auto` centers block elements.

Token values: `0`, `05` (4px), `1` (8px), `105` (12px), `2` (16px), `205` (20px), `3` (24px), `4` (32px), `5` (40px), `6` (48px), `7` (56px), `8` (64px), `9` (72px), `10` (80px), `15` (120px), `1px`, `2px`, `auto`

---

## Dimensions

| Pattern | Example |
|---|---|
| `.width-{token}` | `.width-full` (100%), `.width-card` (160px), `.width-auto` |
| `.maxw-{token}` | `.maxw-tablet` (640px), `.maxw-desktop` (1024px), `.maxw-none` |
| `.minw-{token}` | `.minw-0` |
| `.height-{token}` | `.height-full` (100%), `.height-auto`, `.height-viewport` |
| `.maxh-{token}` | `.maxh-viewport` |
| `.minh-{token}` | `.minh-viewport` |
| `.square-{token}` | `.square-5` (40px square) |
| `.circle-{token}` | `.circle-5` (40px circle) |

Width/height tokens: Use spacing tokens plus `full`, `auto`, `viewport`, `card`, `card-lg`, `mobile`, `mobile-lg`, `tablet`, `tablet-lg`, `desktop`, `desktop-lg`, `widescreen`

### Aspect Ratio

`.add-aspect-{ratio}`: `1x1`, `2x1`, `4x3`, `16x9`, `9x16`

---

## Typography

### Font Family

| Class | Result |
|---|---|
| `.font-family-sans` | Sans-serif (Source Sans Pro) |
| `.font-family-serif` | Serif (Merriweather) |
| `.font-family-mono` | Monospace (Roboto Mono) |
| `.font-family-body` | Body font |
| `.font-family-heading` | Heading font |
| `.font-family-ui` | UI font |
| `.font-family-code` | Code font |

### Font Size (requires family prefix)

| Class | Size |
|---|---|
| `.font-sans-3xs` | 13px |
| `.font-sans-2xs` | 14px |
| `.font-sans-xs` | 15px |
| `.font-sans-sm` | 16px |
| `.font-sans-md` | 17px |
| `.font-sans-lg` | 22px |
| `.font-sans-xl` | 32px |
| `.font-sans-2xl` | 40px |
| `.font-sans-3xl` | 48px |

Replace `sans` with any family: `serif`, `mono`, `body`, `heading`, `ui`, `code`

### Font Weight

| Class | Weight |
|---|---|
| `.text-thin` | 100 |
| `.text-light` | 300 |
| `.text-normal` | 400 |
| `.text-medium` | 500 |
| `.text-semibold` | 600 |
| `.text-bold` | 700 |
| `.text-heavy` | 900 |

### Text Alignment

| Class | Result |
|---|---|
| `.text-left` | left |
| `.text-center` | center |
| `.text-right` | right |

### Text Transform

| Class | Result |
|---|---|
| `.text-uppercase` | UPPERCASE |
| `.text-lowercase` | lowercase |
| `.text-capitalize` | Capitalize |
| `.text-no-uppercase` | none |

### Text Decoration

| Class | Result |
|---|---|
| `.text-underline` | underline |
| `.text-no-underline` | none |
| `.text-strike` | line-through |

### Text Style

| Class | Result |
|---|---|
| `.text-italic` | italic |
| `.text-no-italic` | normal |

### Line Height (requires family prefix)

| Class | Value |
|---|---|
| `.line-height-sans-1` | 1 |
| `.line-height-sans-2` | 1.15 |
| `.line-height-sans-3` | 1.35 |
| `.line-height-sans-4` | 1.5 |
| `.line-height-sans-5` | 1.62 |
| `.line-height-sans-6` | 1.75 |

### Measure (Line Length)

| Class | Max Width |
|---|---|
| `.measure-1` | 44ex |
| `.measure-2` | 60ex |
| `.measure-3` | 64ex |
| `.measure-4` | 68ex |
| `.measure-5` | 72ex |
| `.measure-6` | 88ex |
| `.measure-none` | none |

### Letter Spacing

| Class | Value |
|---|---|
| `.text-ls-neg-3` | -0.03em |
| `.text-ls-neg-2` | -0.02em |
| `.text-ls-neg-1` | -0.01em |
| `.text-ls-auto` | initial |
| `.text-ls-1` | 0.025em |
| `.text-ls-2` | 0.1em |
| `.text-ls-3` | 0.15em |

### Whitespace

| Class | Result |
|---|---|
| `.text-pre` | white-space: pre |
| `.text-pre-wrap` | white-space: pre-wrap |
| `.text-pre-line` | white-space: pre-line |
| `.text-wrap` | white-space: normal |
| `.text-no-wrap` | white-space: nowrap |

---

## Colors

### Text Color

| Class | Color |
|---|---|
| `.text-primary` | Primary blue |
| `.text-secondary` | Secondary red |
| `.text-accent-cool` | Accent cool blue |
| `.text-accent-warm` | Accent warm orange |
| `.text-base` | Base gray |
| `.text-base-dark` | Dark gray |
| `.text-base-darkest` | Near-black |
| `.text-white` | White |
| `.text-ink` | Default text color |
| `.text-error` | Error red |
| `.text-success` | Success green |
| `.text-warning` | Warning yellow |
| `.text-info` | Info blue |

### Background Color

Same tokens with `bg-` prefix:
`.bg-primary`, `.bg-primary-lighter`, `.bg-secondary`, `.bg-accent-cool`, `.bg-base-lightest`, `.bg-white`, `.bg-transparent`, `.bg-ink`, `.bg-error-lighter`, `.bg-success-lighter`, `.bg-warning-lighter`, `.bg-info-lighter`

---

## Borders

### Border Width

| Class | Width |
|---|---|
| `.border-0` | 0 |
| `.border-1px` | 1px |
| `.border-2px` | 2px |
| `.border-05` | 0.25rem |
| `.border-1` | 0.5rem |
| `.border-105` | 0.75rem |
| `.border-2` | 1rem |
| `.border-205` | 1.25rem |
| `.border-3` | 1.5rem |

Directional: `.border-top-{token}`, `.border-right-{token}`, `.border-bottom-{token}`, `.border-left-{token}`, `.border-x-{token}`, `.border-y-{token}`

### Border Color

`.border-primary`, `.border-secondary`, `.border-base-lighter`, `.border-error`, `.border-success`, `.border-warning`, `.border-info`, `.border-white`, `.border-transparent`

### Border Style

`.border-solid`, `.border-dashed`, `.border-dotted`

### Border Radius

| Class | Value |
|---|---|
| `.radius-0` | 0 |
| `.radius-sm` | 2px |
| `.radius-md` | 0.25rem |
| `.radius-lg` | 0.5rem |
| `.radius-pill` | 99rem |

---

## Shadows & Effects

### Box Shadow

| Class | Level |
|---|---|
| `.shadow-none` | None |
| `.shadow-1` | Subtle |
| `.shadow-2` | Light |
| `.shadow-3` | Medium |
| `.shadow-4` | Heavy |
| `.shadow-5` | Heaviest |

### Opacity

`.opacity-0` through `.opacity-100` (in increments of 10)

---

## Position

| Class | Property |
|---|---|
| `.position-absolute` | position: absolute |
| `.position-fixed` | position: fixed |
| `.position-relative` | position: relative |
| `.position-static` | position: static |
| `.position-sticky` | position: sticky |

### Offset

`.top-{token}`, `.right-{token}`, `.bottom-{token}`, `.left-{token}`

### Pin (shorthand position)

| Class | Result |
|---|---|
| `.pin-all` | top/right/bottom/left: 0 |
| `.pin-x` | left: 0; right: 0 |
| `.pin-y` | top: 0; bottom: 0 |
| `.pin-top` | top: 0 |
| `.pin-right` | right: 0 |
| `.pin-bottom` | bottom: 0 |
| `.pin-left` | left: 0 |
| `.pin-none` | reset all |

### Z-Index

`.z-auto`, `.z-0`, `.z-100`, `.z-200`, `.z-300`, `.z-400`, `.z-500`, `.z-top` (9999)

---

## Miscellaneous

| Class | Property |
|---|---|
| `.float-left` | float: left |
| `.float-right` | float: right |
| `.float-none` | float: none |
| `.cursor-auto` | cursor: auto |
| `.cursor-default` | cursor: default |
| `.cursor-pointer` | cursor: pointer |
| `.cursor-wait` | cursor: wait |
| `.cursor-move` | cursor: move |
| `.cursor-not-allowed` | cursor: not-allowed |
| `.add-list-reset` | remove list styling |
| `.text-indent-0` | text-indent: 0 |
| `.text-indent-neg-05` | text-indent: -4px |
| `.vertical-align-top` | vertical-align: top |
| `.vertical-align-middle` | vertical-align: middle |
| `.vertical-align-bottom` | vertical-align: bottom |

---

## Responsive Prefixes

Apply utilities at specific breakpoints (mobile-first):

```html
<div class="display-none tablet:display-block">
  Hidden on mobile, visible on tablet+
</div>

<div class="font-sans-sm desktop:font-sans-lg">
  Small on mobile, large on desktop+
</div>
```

| Prefix | Min-width |
|---|---|
| `mobile-lg:` | 480px |
| `tablet:` | 640px |
| `tablet-lg:` | 880px |
| `desktop:` | 1024px |
| `widescreen:` | 1400px |

Not all utilities have responsive variants enabled by default. Enable in settings:
```scss
$theme-utility-breakpoints: (
  'mobile-lg': true,
  'tablet': true,
  'tablet-lg': false,  // disabled by default
  'desktop': true,
  'widescreen': false, // disabled by default
);
```

---

## State Variants

Most utilities support hover, focus, active, visited variants (disabled by default):

```html
<a class="text-no-underline hover:text-underline">Link</a>
<button class="bg-primary hover:bg-primary-dark">Button</button>
```

Enable in settings per utility module.
