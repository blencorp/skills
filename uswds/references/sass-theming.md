# USWDS Sass theming

Use current settings documentation: https://designsystem.digital.gov/documentation/settings/

Configure the core module before forwarding component styles:

```scss
@use "uswds-core" with (
  $theme-image-path: "../img",
  $theme-font-path: "../fonts"
);

@forward "uswds";
```

Exact load paths and asset paths depend on the project's compiler and deployment layout.

## Rules

- Keep theme configuration in one discoverable entry point.
- Configure before `@forward "uswds"`.
- Verify every setting name against the installed version.
- Prefer theme tokens and settings to post-compile overrides.
- Do not edit package source.
- Build with Dart Sass and address USWDS compile warnings.
- Copy fonts and images into production assets and verify URLs from built CSS.
- Rebuild visual regression and accessibility tests after theme changes.
