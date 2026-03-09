# USWDS Sass Theming Reference

Customize USWDS via `$theme-` settings variables. Configure in your Sass entry point ABOVE `@forward 'uswds'`.

## Table of Contents

- [Configuration Structure](#configuration-structure)
- [General Settings](#general-settings)
- [Color Settings](#color-settings)
- [Typography Settings](#typography-settings)
- [Spacing Settings](#spacing-settings)
- [Component Settings](#component-settings)
- [Utility Settings](#utility-settings)
- [Sass Functions & Mixins](#sass-functions--mixins)

---

## Configuration Structure

```scss
// styles.scss — Entry point
@use "uswds-core" with (
  // 1. General
  $theme-image-path: '~@uswds/uswds/dist/img',
  $theme-font-path: '~@uswds/uswds/dist/fonts',
  $theme-show-compile-warnings: true,

  // 2. Colors
  $theme-color-primary: 'blue-60v',
  $theme-color-secondary: 'red-50',

  // 3. Typography
  $theme-font-type-sans: 'public-sans',
  $theme-body-font-size: 'sm',

  // 4. Spacing
  $theme-site-margins-width: 4,
  $theme-grid-container-max-width: 'desktop',
);

// Forward all USWDS styles
@forward 'uswds';

// Custom styles go AFTER
@import 'custom-styles';
```

---

## General Settings

| Variable | Default | Description |
|---|---|---|
| `$theme-image-path` | `'../img'` | Path to USWDS image assets |
| `$theme-font-path` | `'../fonts'` | Path to USWDS font files |
| `$theme-show-compile-warnings` | `true` | Show Sass compilation warnings |
| `$theme-show-notifications` | `true` | Show USWDS update notifications |
| `$theme-namespace` | `'usa-'` | CSS class prefix |
| `$theme-prefix-separator` | `'-'` | Separator between prefix and name |
| `$theme-global-border-box-sizing` | `true` | Apply `box-sizing: border-box` globally |
| `$theme-focus-color` | `'blue-40v'` | Focus indicator color |
| `$theme-focus-offset` | `0` | Focus outline offset |
| `$theme-focus-style` | `0.25rem solid` | Focus outline style |
| `$theme-focus-width` | `0.25rem` | Focus outline width |

---

## Color Settings

### Theme Colors

| Variable | Default | Description |
|---|---|---|
| `$theme-color-primary-lightest` | `false` | Lightest primary (set color token or `false`) |
| `$theme-color-primary-lighter` | `'primary-lighter'` | Lighter primary |
| `$theme-color-primary-light` | `'primary-light'` | Light primary |
| `$theme-color-primary` | `'primary'` | Primary color |
| `$theme-color-primary-vivid` | `'primary-vivid'` | Vivid primary |
| `$theme-color-primary-dark` | `'primary-dark'` | Dark primary |
| `$theme-color-primary-darker` | `'primary-darker'` | Darker primary |
| `$theme-color-primary-darkest` | `false` | Darkest primary |

Same pattern for: `$theme-color-secondary-*`, `$theme-color-accent-cool-*`, `$theme-color-accent-warm-*`

### Base Colors

| Variable | Default |
|---|---|
| `$theme-color-base-lightest` | `'gray-5'` |
| `$theme-color-base-lighter` | `'gray-cool-10'` |
| `$theme-color-base-light` | `'gray-cool-30'` |
| `$theme-color-base` | `'gray-cool-50'` |
| `$theme-color-base-dark` | `'gray-cool-60'` |
| `$theme-color-base-darker` | `'gray-cool-70'` |
| `$theme-color-base-darkest` | `'gray-90'` |
| `$theme-color-base-ink` | `'gray-90'` |

### State Colors

| Variable | Default |
|---|---|
| `$theme-color-error` | `'red-warm-50v'` |
| `$theme-color-error-lighter` | `'red-warm-10'` |
| `$theme-color-error-light` | `'red-warm-30v'` |
| `$theme-color-error-dark` | `'red-60v'` |
| `$theme-color-error-darker` | `'red-70'` |
| `$theme-color-warning` | `'gold-20v'` |
| `$theme-color-warning-lighter` | `'yellow-5'` |
| `$theme-color-warning-light` | `'gold-10v'` |
| `$theme-color-warning-dark` | `'gold-30v'` |
| `$theme-color-warning-darker` | `'gold-50'` |
| `$theme-color-success` | `'green-cool-40v'` |
| `$theme-color-success-lighter` | `'green-cool-5'` |
| `$theme-color-success-light` | `'green-cool-20v'` |
| `$theme-color-success-dark` | `'green-cool-50'` |
| `$theme-color-success-darker` | `'green-cool-60'` |
| `$theme-color-info` | `'cyan-30v'` |
| `$theme-color-info-lighter` | `'cyan-5'` |
| `$theme-color-info-light` | `'cyan-20'` |
| `$theme-color-info-dark` | `'cyan-40v'` |
| `$theme-color-info-darker` | `'blue-cool-60'` |
| `$theme-color-disabled` | `'gray-20'` |
| `$theme-color-disabled-light` | `'gray-10'` |
| `$theme-color-disabled-dark` | `'gray-30'` |
| `$theme-color-emergency` | `'red-warm-60v'` |
| `$theme-color-emergency-dark` | `'red-warm-80'` |

### Link Colors

| Variable | Default |
|---|---|
| `$theme-link-color` | `'primary'` |
| `$theme-link-hover-color` | `'primary-dark'` |
| `$theme-link-active-color` | `'primary-darker'` |
| `$theme-link-visited-color` | `'violet-70v'` |
| `$theme-link-reverse-color` | `'base-lighter'` |
| `$theme-link-reverse-hover-color` | `'white'` |
| `$theme-link-reverse-active-color` | `'white'` |

---

## Typography Settings

### Font Family

| Variable | Default | Description |
|---|---|---|
| `$theme-font-type-sans` | `'source-sans-pro'` | Sans-serif typeface |
| `$theme-font-type-serif` | `'merriweather'` | Serif typeface |
| `$theme-font-type-mono` | `'roboto-mono'` | Monospace typeface |
| `$theme-font-role-body` | `'sans'` | Body text family |
| `$theme-font-role-heading` | `'serif'` | Heading family |
| `$theme-font-role-ui` | `'sans'` | UI element family |
| `$theme-font-role-code` | `'mono'` | Code family |
| `$theme-font-role-alt` | `'serif'` | Alternate family |

### Font Size

| Variable | Default | Controls |
|---|---|---|
| `$theme-type-scale-3xs` | 2 | 13px |
| `$theme-type-scale-2xs` | 3 | 14px |
| `$theme-type-scale-xs` | 4 | 15px |
| `$theme-type-scale-sm` | 5 | 16px |
| `$theme-type-scale-md` | 6 | 17px |
| `$theme-type-scale-lg` | 9 | 22px |
| `$theme-type-scale-xl` | 12 | 32px |
| `$theme-type-scale-2xl` | 14 | 40px |
| `$theme-type-scale-3xl` | 15 | 48px |

### Body / Heading

| Variable | Default |
|---|---|
| `$theme-body-font-size` | `'sm'` |
| `$theme-body-line-height` | `5` |
| `$theme-heading-line-height` | `2` |
| `$theme-style-body-element` | `true` |

### Custom Fonts

```scss
$theme-font-type-sans: 'custom-font';
$theme-typeface-tokens: (
  'custom-font': (
    display-name: 'Custom Font',
    cap-height: 362px,
    stack: '"Custom Font", "Helvetica Neue", sans-serif',
    src: (
      dir: 'custom',
      roman: (
        300: 'CustomFont-Light',
        400: 'CustomFont-Regular',
        700: 'CustomFont-Bold',
      ),
    ),
  ),
);
```

---

## Spacing Settings

| Variable | Default | Description |
|---|---|---|
| `$theme-site-margins-width` | `4` | Horizontal page margins |
| `$theme-site-margins-mobile-width` | `2` | Mobile page margins |
| `$theme-grid-container-max-width` | `'desktop'` | Grid container max-width |
| `$theme-column-gap` | `2` | Default column gap |
| `$theme-column-gap-desktop` | `4` | Desktop column gap |
| `$theme-column-gap-mobile` | `2` | Mobile column gap |
| `$theme-border-radius-sm` | `2px` | Small border radius |
| `$theme-border-radius-md` | `0.25rem` | Medium border radius |
| `$theme-border-radius-lg` | `0.5rem` | Large border radius |

---

## Component Settings

### Header

| Variable | Default |
|---|---|
| `$theme-header-font-family` | `'ui'` |
| `$theme-header-logo-text-width` | `33%` |
| `$theme-header-max-width` | `'desktop'` |
| `$theme-header-min-width` | `'desktop'` |

### Footer

| Variable | Default |
|---|---|
| `$theme-footer-font-family` | `'body'` |
| `$theme-footer-max-width` | `'desktop'` |

### Navigation

| Variable | Default |
|---|---|
| `$theme-navigation-font-family` | `'ui'` |
| `$theme-megamenu-columns` | `3` |
| `$theme-sidenav-current-border-width` | `0.25rem` |
| `$theme-sidenav-font-family` | `'ui'` |

### Banner

| Variable | Default |
|---|---|
| `$theme-banner-font-family` | `'ui'` |
| `$theme-banner-max-width` | `'desktop'` |

### Card

| Variable | Default |
|---|---|
| `$theme-card-border-color` | `'base-lighter'` |
| `$theme-card-border-radius` | `'lg'` |
| `$theme-card-border-width` | `2px` |
| `$theme-card-gap` | `2` |
| `$theme-card-flag-min-width` | `'tablet'` |
| `$theme-card-font-family` | `'body'` |
| `$theme-card-header-typeset` | `'heading', 'lg', 3` |
| `$theme-card-margin-bottom` | `4` |
| `$theme-card-padding-perimeter` | `3` |
| `$theme-card-padding-y` | `2` |

### Table

| Variable | Default |
|---|---|
| `$theme-table-border-color` | `'base-dark'` |
| `$theme-table-header-background-color` | `'base-lighter'` |
| `$theme-table-header-text-color` | `'base-dark'` |
| `$theme-table-stripe-background-color` | `'base-lightest'` |
| `$theme-table-stripe-text-color` | `'base-dark'` |
| `$theme-table-text-color` | `'base-dark'` |
| `$theme-table-sorted-background-color` | `'accent-cool-lighter'` |
| `$theme-table-sorted-header-background-color` | `'accent-cool-light'` |
| `$theme-table-sorted-icon-color` | `'base'` |
| `$theme-table-sorted-stripe-background-color` | `'blue-cool-10v'` |
| `$theme-table-unsorted-icon-color` | `'base'` |

### Button

| Variable | Default |
|---|---|
| `$theme-button-font-family` | `'ui'` |
| `$theme-button-border-radius` | `'md'` |
| `$theme-button-small-width` | `6` |
| `$theme-button-stroke-width` | `2px` |

### Form

| Variable | Default |
|---|---|
| `$theme-form-font-family` | `'ui'` |
| `$theme-input-max-width` | `'mobile-lg'` |
| `$theme-input-state-border-width` | `0.25rem` |

### Alert

| Variable | Default |
|---|---|
| `$theme-alert-bar-width` | `0.5` |
| `$theme-alert-font-family` | `'ui'` |
| `$theme-alert-icon-size` | `4` |
| `$theme-alert-padding-x` | `2.5` |
| `$theme-alert-text-color` | `'ink'` |
| `$theme-alert-text-reverse-color` | `'white'` |
| `$theme-alert-link-color` | `default` |
| `$theme-alert-link-reverse-color` | `'white'` |

### Modal

| Variable | Default |
|---|---|
| `$theme-modal-border-radius` | `'lg'` |
| `$theme-modal-default-max-width` | `'mobile-lg'` |
| `$theme-modal-lg-max-width` | `'tablet-lg'` |
| `$theme-modal-lg-content-max-width` | `'tablet'` |

---

## Utility Settings

### Breakpoints

```scss
$theme-utility-breakpoints: (
  'card':       false,
  'card-lg':    false,
  'mobile':     false,
  'mobile-lg':  true,   // 480px
  'tablet':     true,   // 640px
  'tablet-lg':  false,  // 880px (disabled by default)
  'desktop':    true,   // 1024px
  'desktop-lg': false,  // 1200px
  'widescreen': false,  // 1400px
);
```

### Enable/Disable Utility Output

```scss
// Example: enable flex utility responsive variants
$flex-settings: (
  responsive: true,
  active: false,
  hover: false,
  focus: false,
  visited: false,
);
```

---

## Sass Functions & Mixins

### Color Functions

```scss
color('primary')          // returns primary color value
color('blue-50')          // returns system color
color('error')            // returns error state color
```

### Spacing Functions

```scss
units(2)                  // returns 16px
units('card-lg')          // returns 240px
units(-1)                 // returns -8px
```

### Typography Functions

```scss
family('sans')            // returns sans-serif font stack
size('sans', 'lg')        // returns font-size for sans lg
font-weight('bold')       // returns 700
line-height('sans', 3)    // returns 1.35
measure(3)                // returns 64ex
```

### Utility Mixins

```scss
@include u-bg('primary');               // background-color
@include u-text('white');               // color
@include u-border('base-lighter');      // border-color
@include u-font('sans', 'lg');          // font-family + font-size
@include u-font-family('body');         // font-family only
@include u-font-size('body', 'sm');     // font-size only
@include u-font-weight('bold');         // font-weight
@include u-line-height('sans', 3);      // line-height
@include u-padding(2);                  // padding all
@include u-padding-x(2);               // padding left+right
@include u-padding-y(3);               // padding top+bottom
@include u-margin-top(4);              // margin-top
@include u-margin-x('auto');           // margin left+right auto
@include u-display('flex');            // display
@include u-flex('align-center');       // align-items
@include u-width('full');              // width
@include u-maxw('tablet');             // max-width
@include u-shadow(3);                  // box-shadow
@include u-radius('lg');               // border-radius
@include u-measure(3);                 // max-width (line length)
```

### Responsive Mixin

```scss
@include at-media('tablet') {
  // min-width: 640px
}

@include at-media('desktop') {
  // min-width: 1024px
}

@include at-media-max('tablet') {
  // max-width: 639px (below tablet)
}
```
