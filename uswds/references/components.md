# USWDS components

Use the current official component page as the API reference: https://designsystem.digital.gov/components/overview/

## Implement a component

1. Confirm the component solves the user need and read its "when to use" and "when to consider something else" guidance.
2. Copy the current official semantic markup and required `usa-` classes.
3. Include documented data attributes, assets, and JavaScript only when the component requires them.
4. Preserve headings, labels, instructions, error text, and status messages.
5. Initialize USWDS JavaScript once.
6. Test the documented interaction with keyboard, screen reader, zoom/reflow, and touch.

Example static alert:

```html
<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h2 class="usa-alert__heading">Informational status</h2>
    <p class="usa-alert__text">Explain what changed and what the person should do.</p>
  </div>
</div>
```

Recheck the official alert page before production because variants and accessibility notes can change.

## React and other frameworks

USWDS Core does not require React. In React, Vue, Angular, Svelte, server templates, or static HTML, preserve the official DOM and behavior contract.

`@trussworks/react-uswds` is a community React adapter. When using it:

- install it explicitly and verify its current peer dependencies;
- read its Storybook/API for prop names instead of inferring them from USWDS classes;
- load official styles through one documented path;
- do not also initialize the same interactive component with duplicate USWDS JavaScript;
- fall back to official markup when the adapter lacks a current component.
