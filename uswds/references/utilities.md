# USWDS utilities

Use current documentation: https://designsystem.digital.gov/utilities/

Utilities are generated from project settings. Do not assume an example class exists merely because it follows a plausible naming pattern.

## Use utilities deliberately

```html
<div class="display-flex flex-column padding-y-3">
  <div class="margin-bottom-2">...</div>
  ...
</div>
```

There is no `gap-*` utility family; for gutters between grid columns use `grid-gap` on a `grid-row`, or use margin/padding utilities. Responsive prefixes are not free either: for example, `tablet:flex-row` exists only if the `flex-direction` family's `responsive` setting is enabled — it is off in a default build.

Before using a utility:

1. Confirm the family is enabled in the project's settings.
2. Confirm the token and responsive prefix exist in the installed version.
3. Prefer semantic component classes for component structure and utilities for bounded adjustments.
4. Avoid long, conflicting utility chains that hide the intended layout.
5. Test responsive variants and high zoom.

If a needed utility is disabled, enable it through documented settings or write a small semantic rule using USWDS functions/mixins; do not invent a class.
