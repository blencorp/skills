---
name: public-sector-design-systems
description: Routes federal, state, District of Columbia, and U.S. territorial digital-service work to the correct official public design system. Use when selecting a government design system, checking whether a jurisdiction has reusable public implementation, or avoiding unsupported cross-jurisdiction substitutions.
---

# Public-sector design-system router

Choose the authoritative system before writing interface code.

## Route the request

1. Identify the government owner, product, and channel. Distinguish a statewide system from an agency- or product-specific system.
2. Read [references/catalog.md](references/catalog.md) for the current public evidence and corresponding implementation skill.
3. If a matching implementation skill is installed, read and follow that skill. If it is not installed, tell the user its exact skill name and continue only from the public material available in this router.
4. If the row is guidance-only, internal, legacy, or not found, say so before producing code. Do not invent component names, tokens, packages, or source availability.
5. Use USWDS as a fallback only when the official system inherits USWDS or the user explicitly authorizes that fallback.

## Source precedence

Use evidence in this order:

1. Current official government documentation
2. Official government-controlled source repository
3. Package registry metadata linked to that source
4. Official policy, procurement, audit, or annual-report evidence

Do not treat third-party catalogs, screenshots, look-alike packages, university systems, or agency examples as statewide authority.

## Output contract

When routing, state:

- jurisdiction and product scope;
- system name and release state;
- installable skill name, if one exists;
- official documentation and source/package links;
- any limitation that prevents a grab-and-build implementation.

For product work, preserve the target project's framework and build tooling unless the official system requires a specific integration.

## Guardrails

- A design system helps accessibility work; it does not prove legal or WCAG conformance for the finished service.
- Do not mix state branding or federal product branding without authorization.
- Do not present an internal platform component as portable source.
- Do not start new work on a superseded system when a current successor is documented.
- Recheck dated package versions before changing dependencies.

Read [references/methodology.md](references/methodology.md) when assessing a new or changed upstream system.
