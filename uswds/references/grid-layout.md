# USWDS grid and layout

Use the current grid documentation: https://designsystem.digital.gov/utilities/layout-grid/

USWDS provides a mobile-first 12-column flexbox grid. A typical structure is container, row, then columns:

```html
<div class="grid-container">
  <div class="grid-row grid-gap">
    <aside class="grid-col-12 tablet:grid-col-4">...</aside>
    <main class="grid-col-12 tablet:grid-col-8">...</main>
  </div>
</div>
```

## Rules

- Start with a single-column small-screen layout.
- Enable and use only responsive prefixes supported by the project's USWDS settings.
- Do not rely on grid classes to establish document landmarks or reading order.
- Keep DOM order logical; visual reordering must not create a keyboard or screen-reader mismatch.
- Test long content, translated text, 200%/400% zoom, and narrow viewports.
- Use CSS Grid or another layout primitive when it better fits the product, while retaining USWDS tokens and accessibility conventions.
