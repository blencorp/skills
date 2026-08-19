# VA Design System sources

Retrieved 2026-08-18. Recheck before dependency upgrades or new production adoption.

## Authoritative sources

- https://design.va.gov/
- https://design.va.gov/about/developers/install
- https://github.com/department-of-veterans-affairs/component-library
- https://github.com/department-of-veterans-affairs/va-mobile-library

## Captured facts

- Scope: VA.gov and VA-governed web or native-mobile services. Select the web or mobile channel before choosing packages.
- Release: Actively maintained official web and mobile libraries. The native-mobile packages are still pre-1.0 (`mobile-component-library` 0.x, `mobile-tokens` 0.x) although upstream presents them as the consumer offering — pin versions and watch releases on the mobile path.
- Delivery: Web components with React bindings, CSS/tokens, and a separate native-mobile library.
- Registry snapshot: @department-of-veterans-affairs/component-library@56.11.0; @department-of-veterans-affairs/css-library@0.34.2; @department-of-veterans-affairs/mobile-component-library@0.36.3; @department-of-veterans-affairs/mobile-tokens@0.23.0
- License/terms: `component-library` package metadata reports MIT, but `css-library` declares no license in its package metadata and the monorepo has no root LICENSE file — confirm terms with the VA before redistribution. Both mobile packages report ISC. Preserve upstream notices.

Government names, seals, and marks may have restrictions separate from the code license. Preserve attribution and confirm branding authorization.
