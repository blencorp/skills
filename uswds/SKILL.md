---
name: uswds
description: Builds federal websites and services with the official U.S. Web Design System Core, including HTML components, Sass/CSS, JavaScript behaviors, tokens, utilities, layouts, patterns, and accessibility guidance. Use for USWDS 3 work or federal interfaces authorized to use USWDS; treat community framework wrappers as optional adapters.
---

# U.S. Web Design System Core

Build from the official USWDS contract, then adapt it to the project's existing stack.

## Before editing

1. Confirm that USWDS Core is the governing system. Use a documented agency or product system instead when it supplies a USWDS theme or child system.
2. Read [references/implementation.md](references/implementation.md) before installing or upgrading USWDS.
3. Read only the task-specific reference:
   - [components](references/components.md)
   - [tokens](references/design-tokens.md)
   - [grid](references/grid-layout.md)
   - [Sass theming](references/sass-theming.md)
   - [utilities](references/utilities.md)
4. Read [references/sources.md](references/sources.md) for version, provenance, and license checks.

## Workflow

1. Inspect the current package manager, Sass/bundler setup, asset paths, JavaScript initialization, templates, and tests.
2. Select one official delivery path: npm source, compiled distribution, or direct official download.
3. Pin the version and preserve the official package license and notices.
4. Start with documented components and patterns. Use official markup, class names, data attributes, content guidance, and JavaScript initialization.
5. Customize through theme settings, tokens, utilities, and composition. Do not edit `node_modules` or copy a component and silently diverge.
6. Verify keyboard interaction, focus, names/roles/states, errors and status messages, contrast, zoom/reflow, responsive behavior, and target browsers.

## Boundaries

- USWDS Core is framework-neutral. `@trussworks/react-uswds` is a community adapter, not an official USWDS package.
- Do not mix USWDS Core JavaScript initialization with a wrapper that already owns the same component behavior.
- Do not apply an agency or product theme unless the target is governed by it.
- USWDS supports accessibility work but does not make the completed service automatically conformant.
- USWDS Elements is a separate alpha effort; use the `uswds-elements` skill for deliberate evaluation.
- If a requested component or token is absent from current official documentation, say so rather than fabricating it.
