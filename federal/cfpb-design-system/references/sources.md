# CFPB Design System sources

Retrieved 2026-08-19. Recheck before dependency upgrades or new production adoption.

## Authoritative sources

- https://cfpb.github.io/design-system/
- https://github.com/cfpb/design-system
- https://github.com/cfpb/design-system-react
- https://www.npmjs.com/package/@cfpb/design-system-react

## Captured facts

- Scope: CFPB product interfaces. The React library and core style package must remain version-compatible.
- Release: Active official core and React repositories, but upstream describes both as work in progress — the React repository's status note says interfaces will change and things will break.
- Delivery: Core HTML/CSS/JavaScript and a separate React/Storybook package.
- Registry snapshot: @cfpb/cfpb-design-system@5.10.0; @cfpb/design-system-react@2.0.2. The React package's peerDependencies pin core exactly at 5.8.1 — check the declared peer range before pairing versions.
- License/terms: Core repository metadata reports CC0-1.0; React repository reports MIT. Preserve package terms and notices.

Government names, seals, and marks may have restrictions separate from the code license. Preserve attribution and confirm branding authorization.
