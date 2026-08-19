# Government design-system skill authoring standard

Verified against current guidance on August 18, 2026.

## Compatibility baseline

This repository uses the common filesystem skill shape supported by OpenAI and Anthropic:

- required `SKILL.md` with `name` and `description` frontmatter;
- concise triggered instructions;
- optional `references/` loaded only when needed;
- optional deterministic `scripts/`;
- repository-only `evals/` for behavioral test cases.

Primary guidance:

- OpenAI: https://learn.chatgpt.com/docs/build-skills
- Anthropic overview: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
- Anthropic authoring practices: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices

`agents/openai.yaml` is intentionally omitted from the government skills because UI metadata was not requested and is not required by the portable skill contract. Add it only when the distribution needs product-specific presentation or dependency metadata.

## Collection architecture

The collection has two layers:

1. `public-sector-design-systems` routes every state, the District of Columbia, inhabited territory, and identified federal system.
2. Focused federal skills live in `federal/`, and focused state skills live in `states/`. An implementation skill exists only when a public package, official source repository, complete download, hosted assets, or copy-ready implementation can support real work.

The established root packages `uswds`, `usmds`, and `gsa-mas` stay at the repository root. The cross-jurisdiction router also stays at the root. The machine-readable roster records the install name separately from each package's repository path so nested organization does not change skill discovery or installation names.

Guidance-only, internal, legacy, and not-found systems remain in the router. They do not receive plausible-looking component skills.

Every implementation skill contains:

- `SKILL.md`: scope, workflow, boundaries, and progressive-disclosure routing;
- `references/implementation.md`: install/delivery decisions and verification;
- `references/sources.md`: dated official-source ledger, registry snapshot, and license notes;
- `evals/evals.json`: positive, boundary, and unsupported-API cases.

```text
federal/ or states/
└── system-name/
    ├── SKILL.md
    ├── references/
    │   ├── implementation.md
    │   └── sources.md
    └── evals/
        └── evals.json
```

## Discovery requirements

- Use lowercase letters, digits, and hyphens.
- Keep the name at 64 characters or fewer.
- Write the description in third person.
- Front-load the system, owner, technology, and trigger.
- State a meaningful exclusion when a nearby system could be selected incorrectly.
- Keep the description at 1,024 characters or fewer.

## Evidence rules

Use evidence in this order:

1. Current official government documentation
2. Official government-controlled source
3. Registry package linked to the official source
4. Official policy, procurement, audit, or annual-report evidence

Do not use a third-party catalog as authority. Do not infer statewide scope from one agency. Do not infer public availability from the name of an internal system. Do not infer licensing from government ownership.

Put changing versions and dates in `references/sources.md`, not the discovery description. Recheck them before dependency upgrades.

## Implementation classifications

- **Ready:** normal adoption is supported by a current public implementation.
- **Conditional:** usable public implementation exists, but adoption needs a beta, pre-1.0, product-scope, hosted-delivery, completeness, or maintenance gate.
- **Router-only:** public guidance or evidence is insufficient to create a truthful implementation skill.

Conditional skills must state the adoption gate near the top and specify a stable routing or stopping condition.

## Writing rules

- Keep `SKILL.md` well below 500 lines.
- Assume the agent knows ordinary software development; include only system-specific decisions.
- Route to one-level-deep references.
- Preserve the target project's framework and tooling unless upstream requires otherwise.
- Prefer exact official APIs and markup over reconstructed examples.
- Never invent packages, tokens, components, repositories, or compliance claims.
- Separate official behavior from optional community wrappers and custom extensions.
- Do not require runtime network access. Captured facts must be enough to recognize scope and choose a safe path; live sources are for re-verification when networking exists.

## Accessibility and legal boundary

A design system reduces repeated accessibility work but does not prove conformance of a completed service. Skills must require semantic, keyboard, focus, assistive-technology, error/status, contrast, zoom/reflow, responsive, and browser verification proportionate to the product.

Code licenses do not necessarily grant rights to government seals, names, typefaces, photographs, or other marks. Preserve notices and confirm branding authorization.

## Evaluation and release

Each government skill has at least three evaluation cases:

1. a realistic positive build or maintenance request;
2. a scope, framework, release-state, or branding boundary;
3. a request for an undocumented component or API.

Run:

```bash
node scripts/validate-government-skills.mjs
```

Also run the installed skill validator against every skill directory. Structural validation does not replace behavioral tests with each model family intended for distribution.

Because focused skills are nested under `federal/` and `states/`, verify package-manager discovery with a recursive scan:

```bash
npx skills add . --list --full-depth
```

Consumers must likewise pass `--full-depth` when installing a nested skill from the repository. Root packages do not require the flag.

## Maintenance

At least quarterly, and before a release:

1. Recheck all official URLs.
2. Query registry versions and repository archive state.
3. Review release, migration, deprecation, and replacement notices.
4. Update `references/sources.md` first.
5. Update implementation instructions only after the source ledger.
6. Re-run the router's not-found searches.
7. Run structural validation and behavioral evaluations.
