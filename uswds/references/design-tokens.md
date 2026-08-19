# USWDS design tokens

Use current token documentation: https://designsystem.digital.gov/design-tokens/

Tokens are system decisions, not magic constants. Prefer role and theme tokens where the design should follow the project theme; use system color tokens only for deliberate fixed palette choices.

## Use tokens

```scss
@use "uswds-core" as *;

.service-summary {
  color: color("ink");
  background: color("base-lightest");
  padding: units(2);
}
```

Utilities can express the same vocabulary in markup:

```html
<section class="bg-base-lightest text-ink padding-2">...</section>
```

## Rules

- Verify a token in the current documentation or installed package before using it.
- Do not freeze theme-token results as copied hex values.
- Do not assume every token or responsive utility is enabled; utility generation is configurable.
- Use the official color-grade contrast guidance only as a design aid, then test actual foreground/background combinations.
- Preserve the project's font licenses and asset-loading strategy.
