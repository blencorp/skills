<video src="assets/introduction.mp4" controls="controls" style="max-width: 730px;"></video>

# BLEN Public Sector Skills

Open-source agent skills for building with publicly available U.S. federal and state government design systems.

The collection contains:

- **15 Ready implementation skills** backed by current public packages, source, or complete distributions;
- **21 Conditional implementation skills** with explicit beta, pre-1.0, work-in-progress, product-scope, hosted-delivery, completeness, or maintenance gates;
- **1 complete router** covering all 50 states, the District of Columbia, five inhabited territories, and the researched federal landscape.

The skills use the common `SKILL.md` format supported by OpenAI and Anthropic. They are designed to fail closed: when official public material does not define a component, token, package, or implementation, the skill says so instead of inventing one.

Federal implementation skills live in [`federal/`](federal/) and state implementation skills live in [`states/`](states/). The existing [`uswds`](uswds/), [`usmds`](usmds/), and [`gsa-mas`](gsa-mas/) directories remain at the repository root, along with the cross-jurisdiction [`public-sector-design-systems`](public-sector-design-systems/) router.

## Install

Install the router first when you do not know which system governs a product:

```bash
npx skills add blencorp/skills --skill public-sector-design-systems
```

Install a focused implementation skill:

```bash
npx skills add blencorp/skills --full-depth --skill maryland-web-design-system
npx skills add blencorp/skills --full-depth --skill cms-design-system
npx skills add blencorp/skills --skill uswds
```

Install the full repository:

```bash
npx skills add blencorp/skills --full-depth
```

The `--full-depth` flag is required for skills inside `federal/` and `states/`. Root skills remain discoverable without it.

## Ready systems

| Level | System | Skill |
|---|---|---|
| Federal | U.S. Web Design System Core | [`uswds`](uswds/) |
| Federal | Login.gov Identity Design System | [`login-gov-design-system`](federal/login-gov-design-system/) |
| Federal | CMS Design System Core | [`cms-design-system`](federal/cms-design-system/) |
| Federal | HealthCare.gov child system | [`healthcare-gov-design-system`](federal/healthcare-gov-design-system/) |
| Federal | Medicare.gov child system | [`medicare-gov-design-system`](federal/medicare-gov-design-system/) |
| Federal | CMS.gov child system | [`cms-gov-design-system`](federal/cms-gov-design-system/) |
| Federal | VA Design System, web and native mobile | [`va-design-system`](federal/va-design-system/) |
| Federal | NASA JPL Explorer 1 | [`jpl-explorer-1`](federal/jpl-explorer-1/) |
| Federal | NCI Design System | [`nci-design-system`](federal/nci-design-system/) |
| State | Georgia Orchard | [`georgia-orchard`](states/georgia-orchard/) |
| State | Louisiana Pelican | [`louisiana-pelican`](states/louisiana-pelican/) |
| State | Michigan Digital Guidelines | [`michigan-digital-guidelines`](states/michigan-digital-guidelines/) |
| State | New Jersey Grove/NJWDS | [`new-jersey-web-design-system`](states/new-jersey-web-design-system/) |
| State | New York State Design System | [`new-york-state-design-system`](states/new-york-state-design-system/) |
| State | Utah Design System | [`utah-design-system`](states/utah-design-system/) |

"Ready" does not mean risk-free. Georgia's package ships compiled assets without a public source repository, and every consuming service still needs accessibility and product testing.

## Conditional systems

| Level | System | Skill | Adoption gate |
|---|---|---|---|
| Federal | USWDS Elements | [`uswds-elements`](federal/uswds-elements/) | Alpha; component maturity varies |
| Federal | CFPB Design System | [`cfpb-design-system`](federal/cfpb-design-system/) | Upstream work-in-progress; interfaces will change |
| Federal | GSA TTS A U.S. Design System | [`gsa-usds`](federal/gsa-usds/) | Git-installed React package |
| Federal | SAM Design System | [`sam-design-system`](federal/sam-design-system/) | Product-specific Angular/MVP |
| Federal | FEC Pattern Library | [`fec-pattern-library`](federal/fec-pattern-library/) | Coupled to FEC CMS |
| Federal | NASA Horizon | [`nasa-horizon-design-system`](federal/nasa-horizon-design-system/) | NASA-only, pre-1.0 |
| Federal | NASA JPL Stellar | [`jpl-stellar-design-system`](federal/jpl-stellar-design-system/) | Mission-operations and framework limits |
| Federal | CDC DIBBs | [`cdc-dibbs-design-system`](federal/cdc-dibbs-design-system/) | Product source, no package |
| Federal | CBP Design System | [`cbp-design-system`](federal/cbp-design-system/) | Beta |
| Federal | IRS Web Design System | [`irs-web-design-system`](federal/irs-web-design-system/) | Limited public source |
| Federal | USDA FPAC/FSA | [`usda-fpac-design-system`](federal/usda-fpac-design-system/) | Older product-specific implementation |
| State | Alaska Look and Feel | [`alaska-look-and-feel`](states/alaska-look-and-feel/) | Hosted assets; official scope excludes apps |
| State | Delaware Lighthouse | [`delaware-lighthouse`](states/delaware-lighthouse/) | Versioned hosted CDN and copy-ready HTML/WordPress, no package |
| State | Maryland Web Design System | [`maryland-web-design-system`](states/maryland-web-design-system/) | Pre-1.0 alpha; under development |
| State | Massachusetts Design System | [`massachusetts-design-system`](states/massachusetts-design-system/) | Foundations released; components incomplete |
| State | Missouri.gov v5 | [`missouri-gov-design-system`](states/missouri-gov-design-system/) | Hosted customized Bootstrap assets |
| State | Montana.gov Template | [`montana-gov-template`](states/montana-gov-template/) | Hosted template service |
| State | Pennsylvania Keystone | [`pennsylvania-keystone`](states/pennsylvania-keystone/) | Public code examples, no package/source |
| State | Rhode Island eCMS/Quahog | [`rhode-island-pattern-library`](states/rhode-island-pattern-library/) | Maintenance status needs confirmation |
| State | Texas Design System | [`texas-design-system`](states/texas-design-system/) | One-time v1.0 reference delivery; agency owns maintenance |
| State | Virginia Web Standards | [`virginia-web-standards`](states/virginia-web-standards/) | Branding bar only; broader system unreleased |

## Complete jurisdiction routing

Use [`public-sector-design-systems`](public-sector-design-systems/) to select the correct system and avoid misclassifying guidance or internal platforms as reusable code.

The router includes every state, DC, and the five inhabited territories. It also records guidance-only, evidence-only, legacy, superseded, and not-found results. Those jurisdictions intentionally do not receive component skills until sufficient official implementation becomes public.

See:

- [Final government design-system inventory](docs/government-design-systems.md)
- [Machine-readable implementation roster](docs/government-skill-roster.json)
- [Cross-platform authoring standard](docs/government-skill-authoring-standard.md)
- [Independent Claude/Fable research retained for provenance](docs/research/design-systems-landscape.md)

## Skill structure

Each implementation skill contains:

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

The source ledger isolates changing versions, release states, URLs, and license notes from the concise runtime instructions. Conditional skills place their adoption gate directly in `SKILL.md`.

## Validate

Run the collection validator:

```bash
node scripts/validate-government-skills.mjs
```

Then run the installed OpenAI skill validator for each skill directory. Structural validation does not replace behavioral testing with the model families and application stacks intended for release.

Confirm nested installer discovery after changing the repository layout:

```bash
npx skills add . --list --full-depth
```

## Other public-sector skills

- [`usmds`](usmds/) — BLEN's U.S. Mobile Design System for React Native. It is not an official federal or state system and is not counted above.
- [`gsa-mas`](gsa-mas/) — GSA Multiple Award Schedule application assistant.

## License

This repository is Apache 2.0 licensed. Upstream design systems retain their own licenses, terms, notices, and government mark restrictions. The skills link to and describe upstream systems; they do not relicense those systems.

Built by [BLEN, Inc.](https://www.blencorp.com).
