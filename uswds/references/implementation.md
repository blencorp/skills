# USWDS Core implementation

## Verified snapshot

- Verified: 2026-08-18
- npm: `@uswds/uswds@3.14.0`
- compiler helper: `@uswds/compile@1.3.2`
- community React adapter, optional: `@trussworks/react-uswds@12.0.0`
- official source: https://github.com/uswds/uswds
- official developer guide: https://designsystem.digital.gov/documentation/developers/

## Install

```bash
npm install @uswds/uswds
```

Use `@uswds/compile` only when its documented Gulp workflow fits the existing project. A project with a working Sass/bundler pipeline can compile USWDS without replacing that pipeline.

Copy or serve the package's fonts, images, compiled CSS, and JavaScript through the application's established asset process. Set paths explicitly; do not rely on a development-only `node_modules` URL in production.

## Integration decisions

- Prefer modular Sass for theme customization and build-size control.
- Use the compiled distribution when the project cannot compile Sass.
- Initialize official USWDS JavaScript once for interactive components.
- Use plain official markup in any framework unless a vetted adapter materially helps.
- If using `@trussworks/react-uswds`, install and test it separately, follow its current API, and treat differences from official USWDS markup as adapter concerns.

## Upgrade

Before changing versions:

1. Read USWDS release notes and migration guidance.
2. Inspect custom Sass settings and deprecated APIs.
3. Build all bundles and verify asset paths.
4. Exercise every interactive component with keyboard and assistive technology.
5. Compare generated CSS size and visual regression results.

