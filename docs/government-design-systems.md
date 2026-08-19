# U.S. federal, state, district, and territorial design-system inventory

**Research snapshot:** August 18, 2026; corrections applied August 19, 2026

**Scope:** publicly discoverable design systems, component libraries, pattern libraries, statewide web templates, digital style standards, and publicly documented internal systems for the U.S. federal government, all 50 states, the District of Columbia, and the five inhabited U.S. territories.

This is the final reconciled inventory. The earlier inventory and the independently prepared [research/design-systems-landscape.md](research/design-systems-landscape.md) were used only to generate candidates. Every conclusion below was rebuilt from an official government website, an official government-controlled GitHub organization, an official government document, or live package-registry metadata. Third-party design-system lists are not evidence for any row.

## What “complete” means here

- Every state appears exactly once in the state table.
- The District of Columbia and Puerto Rico, U.S. Virgin Islands, Guam, American Samoa, and the Northern Mariana Islands appear individually.
- Federal entries are separated into current public implementations, public guidance/platforms, evidence-only internal systems, and legacy/superseded systems.
- “Could not find” means no qualifying official public resource was found after targeted searches of the jurisdiction's technology office, portal, accessibility/brand guidance, official documents, official GitHub organizations, and likely package names. It does **not** prove that no internal system exists.
- A website's visual consistency alone is not treated as evidence of a design system.

## Classification and skill-build gate

| Code | Public evidence | Meaning | Skill decision |
|---|---|---|---|
| **P** | Package/source | Official reusable source or an installable package is public. | **Ready** when the implementation and current documentation are sufficient. |
| **H** | Hosted/downloadable | Official reusable HTML, CSS, JS, examples, or downloads are public, but no current package was verified. | **Conditional**; pin captured files and document update risk. |
| **G** | Guidance/platform | Official design, authoring, template, CMS, brand, or accessibility guidance is public; reusable implementation is internal or absent. | **Guidance only**; do not pretend to provide components. |
| **E** | Evidence only | An official report, procurement, or policy names a system, but its implementation and working documentation are not public. | **Do not build** until the system itself is obtained. |
| **V** | Preview | Officially announced, alpha, beta, early-development, or incomplete replacement. | **Conditional**; state maturity prominently. |
| **L** | Legacy | Officially archived, superseded, removed, or no longer maintained. | **Do not use for new work**; retain only for migration support. |
| **N** | Not found | No qualifying official public resource was located. | **No skill**. |

“Ready” means ready to create and test a faithful skill from public material—not an assertion that a design system is suitable for every production project.

## Material corrections to the earlier drafts

- Nebraska's statewide system is **Sower**, not Tyler Forge.
- Massachusetts made the new **Massachusetts Design System** its source of truth in December 2025; **Mayflower is explicitly not recommended for new work**.
- Georgia's **Orchard** ships as an official npm package (`@georgiagov/orchard`) and versioned CDN stylesheets, both documented in its Getting Started for Developers, in addition to ready-to-copy examples. An earlier draft of this inventory wrongly recorded the npm delivery as unreleased.
- Michigan and Louisiana both have live official npm packages; they are not documentation-only systems.
- Texas launched the **Texas Design System** in June 2026, with 37 copy-ready HTML/CSS components in its v1 deliverable.
- Pennsylvania now publishes **Keystone** documentation and a linked Storybook.
- Puerto Rico publishes **GUIDI**, and Guam publishes official government website standards.
- American Samoa and the Northern Mariana Islands must be researched separately; “territories” is not a single inventory row.
- The official NASA Web Design System is no longer maintained. A community package with the same lineage is not an official replacement. NASA's current public systems are Horizon and the JPL systems listed below.

# Federal government

## Current public code and installable implementations

Package versions are live registry observations made on August 18, 2026, not versions copied from a catalog.

| Organization / system | Official evidence and public implementation | Status and scope | Skill gate |
|---|---|---|---|
| Federal government — **U.S. Web Design System (USWDS Core)** | [Documentation](https://designsystem.digital.gov/) · [official source](https://github.com/uswds/uswds) · npm `@uswds/uswds` **3.14.0** | Government-wide HTML, Sass/CSS, JS, tokens, components, patterns, and design assets. | **P — Ready** |
| Federal government — **USWDS Elements** | [Official source and status](https://github.com/uswds/uswds-elements) · npm `@uswds/elements` **1.0.0-alpha.6** | Web-component successor work, explicitly pre-release; USWDS recommends adopting Core 3.x rather than waiting. | **V/P — Conditional** |
| GSA TTS — **A U.S. Design System (USDS)** | [Official source](https://github.com/GSA-TTS/usds) · [live preview](https://gsa-tts.github.io/usds/) | React/TypeScript system for dense operational federal applications. Installable from GitHub; not yet on npm. Distinct from USWDS. | **P/V — Conditional** |
| Login.gov — **Identity Design System** | [Official source](https://github.com/18F/identity-design-system) · npm `@18f/identity-design-system` **9.7.0** | Login.gov extension of USWDS; active official repository and CC0 package. | **P — Ready** |
| GSA — **SAM Design System** | [Documentation](https://gsa.github.io/sam-design-system-site/) · [official source](https://github.com/GSA/sam-design-system) · npm `@gsa-sam/components` **17.0.15** | Angular system for SAM.gov; official documentation describes it as an MVP in active development. | **P/V — Conditional** |
| CMS — **CMS Design System Core** | [Documentation](https://design.cms.gov/) · [official monorepo](https://github.com/CMSgov/design-system) · npm `@cmsgov/design-system` **18.1.0** | USWDS-based CSS, JavaScript, React components, utilities, and tokens. | **P — Ready** |
| CMS — **HealthCare.gov Design System** | [Official child-system documentation](https://design.cms.gov/getting-started/child-design-systems/) · [official monorepo](https://github.com/CMSgov/design-system) · npm `@cmsgov/ds-healthcare-gov` **18.1.0** | Actively maintained CMS child theme/system; consumes CMS core. | **P — Ready** |
| CMS — **Medicare.gov Design System** | [Official child-system documentation](https://design.cms.gov/getting-started/child-design-systems/) · [official monorepo](https://github.com/CMSgov/design-system) · npm `@cmsgov/ds-medicare-gov` **18.1.0** | Actively maintained CMS child theme/system; consumes CMS core. | **P — Ready** |
| CMS — **CMS.gov Design System** | [Official child-system documentation](https://design.cms.gov/getting-started/child-design-systems/) · [official monorepo](https://github.com/CMSgov/design-system) · npm `@cmsgov/ds-cms-gov` **18.1.0** | Actively maintained CMS child theme/system; consumes CMS core. | **P — Ready** |
| Department of Veterans Affairs — **VA Design System (VADS), web and native mobile** | [Documentation](https://design.va.gov/) · [install guide](https://design.va.gov/about/developers/install) · [web source](https://github.com/department-of-veterans-affairs/component-library) · npm `@department-of-veterans-affairs/component-library` **56.11.0**, `css-library` **0.34.2**, `mobile-component-library` **0.36.3**, `mobile-tokens` **0.23.0** | One governed system covering VA.gov and the VA Health and Benefits mobile app; web components, React bindings, CSS/tokens, native-mobile components, patterns, content, and Figma guidance. | **P — Ready** |
| Consumer Financial Protection Bureau — **CFPB Design System** | [Documentation](https://cfpb.github.io/design-system/) · [core source](https://github.com/cfpb/design-system) · [React source](https://github.com/cfpb/design-system-react) · npm `@cfpb/cfpb-design-system` **5.10.0**, `@cfpb/design-system-react` **2.0.2** | Active HTML/CSS/JS system plus official React/Storybook implementation; upstream describes both as work in progress and the React repository warns that interfaces will change. | **P/V — Conditional** |
| Federal Election Commission — **FEC Pattern Library** | [Documentation](https://fec-pattern-library.app.cloud.gov/) · [official source](https://github.com/fecgov/fec-pattern-library) | Public source and live component/pattern documentation for FEC.gov; product-specific rather than government-wide. | **P — Conditional** |
| NASA — **Horizon Design System** | [Documentation](https://nasa.github.io/hds-core/) · [official source](https://github.com/nasa/hds-core) · npm `@nasa-hds/core` **0.9.0** | Current NASA USWDS theme layer; pre-1.0. | **P/V — Conditional** |
| NASA JPL — **Explorer 1** | [Documentation](https://nasa-jpl.github.io/explorer-1/) · [official source](https://github.com/nasa-jpl/explorer-1) · npm `@explorer-1/vue` **1.1.14**, `@explorer-1/common` **2.1.7** | JPL design system with Vue components and compiled framework-neutral assets. The repository describes its older HTML documentation as internal/legacy rather than the primary v3 path. | **P — Ready** |
| NASA JPL — **Stellar** | [Official source and developer docs](https://github.com/nasa-jpl/stellar) · npm `@nasa-jpl/stellar-svelte` and `@nasa-jpl/stellar-react` **2.1.10** | Svelte and React system specialized for spacecraft-operations tools. | **P — Conditional** |
| National Cancer Institute — **NCI Design System (NCIDS)** | [Documentation](https://designsystem.cancer.gov/) · [developer guide](https://designsystem.cancer.gov/get-started/developers) · [official source](https://github.com/NCIOCPL/ncids) | Current public release **3.5.1** with downloads/CDN and package/source instructions. | **P — Ready** |
| Centers for Disease Control and Prevention — **DIBBs Design System** | [Official source](https://github.com/CDCgov/dibbs-design-system) | Product-specific USWDS configuration, Sass overrides, build setup, and example markup for CDC Data Integration Building Blocks; no published package or full documentation hub. | **P — Conditional** |
| U.S. Customs and Border Protection — **CBP Design System** | [Documentation](https://us-cbp.github.io/design-system/) · [official source](https://github.com/US-CBP/design-system) · npm `@cbpds/web-components` and `@cbpds/react-components` **0.9.0-beta.2** | Active web-component and React system, explicitly beta. | **P/V — Conditional** |
| Internal Revenue Service — **IRS Web Design System** | [Public source](https://github.com/irs-user-experience/irs-web-design-system) | Public USWDS-compliant component source, but only a small repository with no release/package or complete public usage guide, hosted on a personal GitHub account rather than a government-controlled organization — IRS provenance is self-attested. | **P/V — Conditional** |
| USDA Farm Production and Conservation — **FPAC/FSA Design System** | [Documentation](https://usda-fsa.github.io/fsa-design-system/) · [official documentation source](https://github.com/USDA-FSA/fsa-design-system) · [official CSS source](https://github.com/USDA-FSA/fsa-style) | Public documentation and CSS implementation; activity is materially older than the systems marked Ready. | **P — Conditional** |

## Public guidance, standards, or internal-platform documentation

| Organization / system | Official evidence | What is actually public | Skill gate |
|---|---|---|---|
| Bureau of Indian Affairs — **Indian Affairs Design System** | [Web style system](https://www.bia.gov/web-guidance/web-style) · [topics](https://www.bia.gov/web-guidance/web-style/topics) | Public USWDS-based design, content, and component guidance; no separate public package was verified. | **G — Guidance only** |
| Department of Agriculture — **USDA Web Standards and Style Guide** | [Official guide](https://www.usda.gov/sites/default/files/documents/usda-web-standards-and-style-guide-v2-0.pdf) | Department-wide design/brand/web guidance; not a reusable component distribution. FPAC's code system is listed above. | **G — Guidance only** |
| Department of Transportation — **USDOT Web Design System** | [Official design guide](https://www.transportation.gov/digitalstrategy/web-standards/design-guide/usdot-web-design-system) · [official PDF](https://www.transportation.gov/sites/dot.gov/files/2020-07/USDOT%20Web%20Design%20System.pdf) | Public Drupal-oriented guidance and specifications; no current public package/source was verified. | **G — Guidance only** |
| Environmental Protection Agency — **One EPA Web / EPA Web Standards** | [Official standards](https://www.epa.gov/system/files/documents/2022-11/epa_web_standards.pdf) | Public USWDS-based standards for EPA web properties; reusable implementation is not separately public. | **G — Guidance only** |
| National Center for Biotechnology Information — **NCBI Style Guide** | [Documentation](https://www.ncbi.nlm.nih.gov/style-guide/) · [header/footer component guidance](https://www.ncbi.nlm.nih.gov/style-guide/components/header-footer/) | Public alpha guidance and examples; the supported implementation is oriented to NCBI's environment. | **G/V — Guidance only** |
| Department of Health and Human Services — **HHS Web Style Guide** | [Official guide](https://www.hhs.gov/digital/style-guide/index.html) | Current content/editorial guidance, not a component design system. Included to prevent it from being misclassified. | **G — Content guidance only** |

## Official evidence of non-public or internal federal systems

| Organization / named system | Official evidence | Finding | Skill gate |
|---|---|---|---|
| Department of Homeland Security — **DHS Design System / DHS USWDS theme** | [Official DHS site-review questionnaire](https://www.dhs.gov/sites/default/files/2025-08/24_0529_OPA_DHS-Site-Review-Questionnaire-508.pdf) · [DHS design-system policy page](https://www.dhs.gov/digital-experience/design-system) | The official document names the DHS version of USWDS, and DHS publishes a design-system policy page covering 21st Century IDEA/USWDS requirements, but no public component implementation, package, or repository was located. CBP's separate public system is listed above. | **E — Do not build** |
| Social Security Administration — **UX Framework 3.0** | [SSA FY2025 budget justification](https://www.ssa.gov/budget/assets/materials/2025/2025LAE.pdf) | Official evidence that the framework exists; no public implementation or documentation hub was located. | **E — Do not build** |
| Department of the Treasury — **Treasury Digital Design System (TDDS)** | [2020 IDEA report](https://home.treasury.gov/system/files/286/2020-Treasury-Report-to-OMB-21st-Century-IDEA-FINALv.pdf) · [2021 IDEA report](https://home.treasury.gov/system/files/286/2021-Treasury-Report-to-OMB-21st-Century-IDEA.pdf) | Official reports describe TDDS; no public component source or current documentation hub was located. IRS's separate public repository is listed above. | **E — Do not build** |
| Library of Congress — **global design system** | [FY2023 budget justification](https://www.loc.gov/static/portals/about/reports-and-budgets/documents/budgets/fy2023.pdf) | Official budget evidence of a global design-system effort; no public reusable implementation was located. | **E — Do not build** |

## Federal legacy, archived, removed, or superseded systems

| System | Official evidence | Current disposition | Skill gate |
|---|---|---|---|
| **NASA Web Design System (NASAWDS)** | [Archived official documentation repo](https://github.com/nasa/nasawds-site) · [archived official code](https://github.com/nasa/nasawds) | Official repositories say the system is no longer maintained. The similarly named community package is not NASA-controlled. | **L — Migration only** |
| **NIAID Design System** | [Archived official source](https://github.com/niaid/niaid-design-system) | Archived by NIAID on April 16, 2026. | **L — Migration only** |
| **FCC Design Standards** | [Documentation](https://fcc.github.io/design-standards/) · [official source](https://github.com/FCC/design-standards) | Public Bootstrap 3/jQuery-era system; retained for historical/product maintenance, not recommended as a new baseline. | **L — Migration only** |
| **CMS standalone HealthCare.gov and Medicare.gov repositories** | [Archived HealthCare.gov repo](https://github.com/CMSgov/hcgov-design-system) · [Medicare.gov repo](https://github.com/CMSgov/mgov-design-system) | Superseded by packages in the current CMS monorepo. | **L — Use current CMS child systems** |
| **VA Formation / vets.gov design-system repositories** | [Archived design-system repo](https://github.com/department-of-veterans-affairs/design-system-OLD) | Superseded by the current VA Design System and component library. | **L — Use VADS** |
| **CFPB Design Manual and Capital Framework** | [Design Manual source](https://github.com/cfpb/design-manual) · [Capital Framework source](https://github.com/cfpb/capital-framework) | Predecessors to the current CFPB Design System. | **L — Use current CFPB system** |
| **CBP Theme** | [Archived official source](https://github.com/US-CBP/cbp-theme) | Superseded by the beta CBP Design System. | **L — Use current CBP system** |
| **U.S. Forms System** (USDS adjunct) | [Official source and maintenance notice](https://github.com/usds/us-forms-system) | USWDS-based React/JSON Schema form library; its official README says it is not actively maintained. | **L — No new skill** |
| **USAJOBS Design System** | [Official OPM open-government plan referencing USAJOBS design work](https://www.opm.gov/about-us/open-government/reference-materials/governmentplan_v40.pdf) | Former public documentation/source could not be found at a current official URL. | **L/E — No new skill** |
| **USPTO UI Design Library** | [USWDS official acknowledgement of the former USPTO system](https://github.com/uswds/uswds#reuse-of-open-source-style-guides) | Former public system has been removed; no current official replacement implementation was located. | **L/E — No new skill** |

### Cabinet-department coverage check

This check prevents “no separate row” from being mistaken for “not researched.” A department can use USWDS without maintaining a distinct public design system.

| Cabinet department | Distinct public result in this inventory |
|---|---|
| Agriculture | FPAC/FSA public implementation; USDA department-wide guidance. |
| Commerce | No distinct department-wide public system found; Census publishes survey-design guidance that cites USWDS rather than a separate reusable system. |
| Defense | No distinct department-wide public design-system implementation found. |
| Education | No distinct department-wide public design-system implementation found. |
| Energy | Official web policy points implementers to USWDS; no separate public system found. |
| Health and Human Services | CMS family, NCI, CDC DIBBs, NCBI guidance, HHS content guidance, and legacy NIAID are all listed above. |
| Homeland Security | CBP is public; department-wide DHS system is evidence-only. |
| Housing and Urban Development | No distinct public design-system implementation found. |
| Interior | Indian Affairs guidance is public; no department-wide package found. |
| Justice | Current public sites document USWDS adoption; no separate department-wide public system found. |
| Labor | No distinct department-wide public design-system implementation found. |
| State | No distinct department-wide public design-system implementation found. |
| Transportation | USDOT public design guide; no current package found. |
| Treasury | IRS public source; department-wide TDDS is evidence-only. |
| Veterans Affairs | VADS web and mobile implementation is public. |

# States

## All 50 states

| State | Official system / result | Primary official links | Public reality | Skill gate |
|---|---|---|---|---|
| Alabama | State web-development policy | [OIT Policy 530](https://oit.alabama.gov/wp-content/uploads/2022/07/Policy_530_Web_Development.pdf) · [OIT web/privacy requirements](https://oit.alabama.gov/library/privacy-statements/) | Standards and required practices; no public statewide component library found. | **G — Guidance only** |
| Alaska | State of Alaska Look & Feel | [Look & Feel](https://www.alaska.gov/LookAndFeel/) · [public style resources](https://webcontent.alaska.gov/style/) | Mandated statewide presentation with publicly hosted CSS and HTML examples. | **H — Conditional** |
| Arizona | Agency Website Style Guide / Agency Platform | [Style guide](https://agencyplatform.az.gov/resources/agency-website-style-guide) · [2025 digital style guide PDF](https://agencyplatform.az.gov/sites/default/files/2025-02/State-of-Arizona-Digital-Style-Guide.pdf) · [platform service](https://aset.az.gov/service/online-services/agency-platform-website) | Public standards for a shared Drupal platform; portable component source/package not found. | **G — Guidance only** |
| Arkansas | Arkansas.gov Common Look and Feel | [Official CLF documentation](https://static.ark.org/portal/clf/Arkansas-gov-CLF-documentation.pdf) | Historical portal standard; no current successor or maintained public library found. | **L — No new skill** |
| California | California Design System, version 0 | [Current system](https://designsystem.ca.gov/) · [superseded beta reference](https://designsystem.webstandards.ca.gov/) · [legacy beta source](https://github.com/cagov/design-system) | Current system is explicitly in early development. The beta system stopped updates and its maintenance window ended July 1, 2026. | **V/L — Router-only; no implementation skill** |
| Colorado | Digital Guidelines and Design System | [Official hub](https://dcs.colorado.gov/ids/digital-guidelines-and-design-system) | USWDS-based soft launch and public guidance; no separate public package/source verified. | **G/V — Guidance only** |
| Connecticut | CT.gov Design System / Sitecore authoring standards | [Sitecore Center](https://portal.ct.gov/sitecore-center) · [standards](https://portal.ct.gov/sitecore-center/standards/) · [public style guide](https://portal.ct.gov/styleguide) | Public rules and examples for Connecticut's shared Sitecore implementation; code remains platform-controlled. | **G — Guidance only** |
| Delaware | Lighthouse Design System | [Official overview](https://gic.delaware.gov/lighthouse-design-system/) · [documentation/Storybook](https://lighthouse.delaware.gov/) · [v1.2 release notice](https://gic.delaware.gov/new-lighthouse-release/) | State-hosted versioned CDN CSS/JS with a Bootstrap dependency, public component examples, and HTML/WordPress guidance; no npm package or source repository was verified. | **H — Conditional** |
| Florida | State portal/web standards | [Official portal standard](https://www.dms.myflorida.com/content/download/18272/97768) · [current accessibility statement](https://www.dms.myflorida.com/accessibility_statement) | Legacy portal specification plus accessibility guidance; no current statewide component system found. | **L/G — No component skill** |
| Georgia | Orchard Design System | [Official service page](https://digital.georgia.gov/services/orchard-design-system) · [documentation](https://orchard.georgia.gov/) · npm `@georgiagov/orchard` **2.14.0** | Official npm package with compiled CSS, per-component JavaScript, and agency palettes, plus versioned CDN stylesheets and copy-ready documentation. No public source repository was verified. | **P — Ready** |
| Hawaii | Hawaii.gov Style Guide / WordPress template | [Style guide](https://styleguide.ehawaii.gov/) · [state WordPress documentation](https://wpwiki.hawaii.gov/) | Public style and authoring guidance for a maintained statewide WordPress platform; no portable official package found. | **G — Guidance only** |
| Idaho | State Web Templates for WordPress | [Official templates page](https://its.idaho.gov/state-web-templates-for-wordpress/) · [web services](https://its.idaho.gov/service/web-services-planning/) · [web publishing standard](https://ita.idaho.gov/psg/g310/) | Standard templates and mandatory policy; implementation/training access is internal. | **G — Guidance only** |
| Illinois | Illinois Design Framework / WCM components | [Author guide](https://wcmauthorguide.illinois.gov/starting.html) · [components](https://wcmauthorguide.illinois.gov/templates-and-components/components.html) | Public AEM author documentation; component implementation is internal to the state platform. | **G — Guidance only** |
| Indiana | IN.gov INWP design platform | [INWP](https://www.in.gov/inwp/) · [best-practices guide](https://www.in.gov/inwp/best-practices-guide/) | Standard responsive templates and components delivered through the state platform; no portable public library found. | **G — Guidance only** |
| Iowa | Iowa Digital Experience Platform | [Official training hub](https://dxtraining.iowa.gov/) · [web design standard](https://ocio.iowa.gov/sites/default/files/standards/2022-05/web_design_standard_2022.pdf) | Public Drupal author training and design guardrails; implementation is platform-controlled. | **G — Guidance only** |
| Kansas | State web-accessibility standards | [Official guidance for web developers](https://www.ebit.ks.gov/resources/governance/it-executive-council/kpat/resources/guidance-for-web-developers) · [state portal](https://portal.kansas.gov/) | Current statewide accessibility and implementation guidance; no statewide reusable component system or current public digital-style guide found. | **G — Guidance only** |
| Kentucky | Enterprise Web Design Template | [KITS report naming the mandatory template](https://technology.ky.gov/about-the-agency/Documents/KITS_Report.pdf) · [state portal](https://www.kentucky.gov/about/Pages/default.aspx) | Official evidence of the KITS 7020 template and supporting stylesheets; a current public implementation/download link could not be found. | **E/G — Guidance only** |
| Louisiana | Pelican Design System | [Documentation](https://pelican.ots.la.gov/) · [official source](https://github.com/la-ots/pelican) · npm `@la-ots/pelican` **2.3.5** | Current public package and source. | **P — Ready** |
| Maine | InforME web design/templates | [Web design service](https://www.maine.gov/informe/state/services/webdesign) · [official web standards](https://www.maine.gov/oit/sites/maine.gov.oit/files/inline-files/WebStandards.pdf) | State templates and services with public standards; no public package/source found. | **G — Guidance only** |
| Maryland | Maryland Web Design System | [State design-system hub](https://digital.maryland.gov/design-system/) · [documentation](https://designsystem.maryland.gov/) · npm `@maryland-gov/mdwds` **0.47.0** | Active public package and documentation; the only release is pre-1.0 and alpha-tagged, and the official site identifies ongoing development. | **P/V — Conditional** |
| Massachusetts | Massachusetts Design System (MDS) | [Current source of truth](https://www.mass.gov/massachusetts-design-system) · [developer resources](https://www.mass.gov/info-details/developer-resources-for-the-massachusetts-design-system) · [components](https://www.mass.gov/info-details/components) · npm `@massds/mds-tokens` **2.0.0**, `mds-assets` **1.2.0**, `mds-styles` **1.1.0** | Current replacement is partially released: tokens/assets/styles are public, while full component code is still being released. [Mayflower](https://mayflower.digital.mass.gov/) is not recommended for new work. | **V/P/L — Conditional** |
| Michigan | Michigan Digital Guidelines | [Documentation](https://digitalguidelines.michigan.gov/) · [developer start](https://digitalguidelines.michigan.gov/docs/gettingstarted) · npm `@migov/digital-guidelines-core`, `@migov/digital-guidelines-core-react`, and `@migov/digital-guidelines-core-angular` **5.5.0** | Current Stencil web components and React/Angular framework wrappers. The shorter `digital-guidelines-react` and `digital-guidelines-angular` package names do not exist. | **P — Ready** |
| Minnesota | No statewide system found | **Could not find a qualifying official statewide design-system link.** Agency exception: [MnDOT Design System](https://www.dot.state.mn.us/designsystem/). | The MnDOT system is agency-specific and must not be represented as Minnesota-wide. | **N — No statewide skill** |
| Mississippi | No statewide system found | **Could not find a qualifying official public design-system or statewide digital-style link.** | No official reusable system, statewide digital style guide, or named internal system was verified. | **N — No skill** |
| Missouri | MO.gov Design System / MO.gov v5 assets | [Official assets and documentation](https://assets.mo.gov/) · [components](https://assets.mo.gov/mov5/components.html) | Public customized Bootstrap assets, templates, and components; no package/repository verified. | **H — Conditional** |
| Montana | Montana.gov template | [Official template instructions](https://template.mt.gov/instructions.aspx) | Public template markup, CSS, JS, and implementation instructions; no package verified. | **H — Conditional** |
| Nebraska | Sower Design System | [Official documentation](https://sower-design.nebraska.gov/) | Statewide system with public component/design guidance integrated with Nebraska's AEM Edge platform; source access is through OCIO rather than a public package. | **G — Guidance only** |
| Nevada | State web style guidelines | [Official guidelines](https://www.ada.nv.gov/siteassets/adanew.nv.gov/content/resources/2019-05-01_WebStyleGuidelines.pdf) | Mandatory design/accessibility guidance; no current public component library found. | **G — Guidance only** |
| New Hampshire | Internal state standards/template evidence | [Official performance audit](https://www.gc.nh.gov/LBA/AuditReports/PerformanceReports/DoIT_2018.pdf) | The official audit references state web standards/templates, but a current public system or guide could not be found. | **E — No skill** |
| New Jersey | New Jersey Web Design System (NJWDS) | [Documentation](https://newjersey.github.io/njwds/) · [official source](https://github.com/newjersey/njwds) · [state procurement evidence](https://www.nj.gov/labor/assets/PDFs/rfq/UI_WERFQAgileDev3_10_2022.pdf) · npm `@newjersey/njwds` **2.9.2** | Current official USWDS-derived package and source. | **P — Ready** |
| New Mexico | No statewide system found | **Could not find a qualifying official public design-system or statewide digital-style link.** | No official reusable system, public guidance hub, or named internal system was verified. | **N — No skill** |
| New York | New York State Design System (NYSDS) | [Documentation](https://designsystem.ny.gov/) · [official source](https://github.com/ITS-HCD/nysds) · npm `@nysds/components`, `tokens`, and `styles` **1.20.0** | Current web components, tokens, styles, Angular wrapper, and official MCP server. | **P — Ready** |
| North Carolina | NC Digital Commons | [Official platform](https://digitalcommons.nc.gov/) · [official overview/training](https://files.nc.gov/ncdigitalcommons/Digital-Commons-Overview-Training.pdf) | Shared Drupal platform with a unified look and author documentation; implementation is internal. | **G — Guidance only** |
| North Dakota | State IT/web development standards | [Official IT standards hub](https://www.ndit.nd.gov/about-us/it-governance/it-standards) | Statewide technology standards include web-development requirements; no public component library or separate digital design system found. | **G — Guidance only** |
| Ohio | InnovateOhio Platform Digital Toolkit / Design System | [Official procurement evidence](https://dam.assets.ohio.gov/image/upload/procure.ohio.gov/pdf/DXDOH-20-01-0013162020151431DXDOH-20-01-001.pdf) · [additional official evidence](https://dam.assets.ohio.gov/image/upload/procure.ohio.gov/pdf/DXDRC-21-01-001525202115518DXDRC-21-01-001.pdf) | Official documents name approved patterns/code, but no current public documentation hub, package, or source was found. | **E — No skill** |
| Oklahoma | Oklahoma Web Modernization Framework | [Web design guidance](https://oklahoma.gov/branding/web-design.html) · [accessibility](https://oklahoma.gov/branding/web-design/accessibility.html) · [official UI/UX standard](https://oklahoma.gov/content/dam/ok/en/omes/documents/oklahoma-ui-ux-standard-UA.pdf) | Public standards and AEM author guidance; implementation is inside the state platform. | **G — Guidance only** |
| Oregon | State website style guidance / future enterprise system | [E-governance guidance](https://www.oregon.gov/eis/shared-services/pages/e-governance-guidance.aspx) · [style guidelines](https://www.oregon.gov/eis/shared-services/Documents/eis-ss-website-style-guidelines.pdf) · [2026 EPAB meeting materials](https://www.oregon.gov/eis/epab/Pages/meeting-documents.aspx) | Current public standards; February 2026 planning materials discuss design-system strategy for a future enterprise CMS, not a released system. | **G/V — Guidance only** |
| Pennsylvania | Keystone Design System | [Official hub](https://wcmauthorguide.pa.gov/keystone-design-system) · [components](https://wcmauthorguide.pa.gov/keystone-design-system/components) | Public principles, tokens, components, code examples, and linked Storybook/Figma; official text says the system is still getting started. No package/source repo was verified. | **H/V — Conditional** |
| Rhode Island | Quahog / ECMS Pattern Lab | [Official annual report naming Quahog](https://etss.ri.gov/sites/g/files/xkgbur466/files/2023-02/Enterprise-Technology-Strategy-and-Services-Annual-Report-2022.pdf) · [public Pattern Lab](https://state-of-rhode-island-ecms.github.io/ecms_patternlab/public/) · [official source](https://github.com/State-of-Rhode-Island-ECMS/ecms_patternlab) | Public code and pattern library, but current support/freshness could not be confirmed. | **H/P — Conditional** |
| South Carolina | Next Generation SC.gov platform | [Official demo/about](https://nextgen-demo.sc.gov/about) · [feature overview](https://scdgs.sc.gov/sites/scdgs/files/2023-09/Next%20Generation%20SC.GOV%20Feature%20Overview.pdf) | Shared portal platform, templates, and authoring capabilities; no independent public component library found. | **G — Guidance only** |
| South Dakota | BIT web-development design standards | [Official knowledge-base policy](https://b2b.sd.gov/b2b?id=kb_article_view&sysparm_article=KB0010219) · [accessibility hub](https://accessibility.sd.gov/) | Official policy says BIT maintains specific design standards, but the current standards themselves were not found at a public link. | **E/G — Guidance only** |
| Tennessee | State brand guidelines | [Official brand guidelines](https://www.tn.gov/content/dam/tn/education/tdoe-communication-branding-manuals-and-materials/State_of_TN_Brand_Guidelines_521%20%281%29.pdf) | Brand guidance only; no statewide public digital design system/component library found. | **G — Brand guidance only** |
| Texas | Texas Design System (TXDS) | [Official site](https://dir.texas.gov/txds/) · [documentation](https://dir.texas.gov/txds/getting-started/) · [launch announcement](https://dir.texas.gov/news/dir-launches-texas-design-system-modernize-state-websites) | v1.0.0 delivered May 2026 and launched June 2026: 37 copy-ready HTML/CSS components plus CSS/JS assets and Figma resources. It is documented as a one-time deliverable, not a continuously supported package; the adopting agency owns maintenance after handoff. | **H — Conditional** |
| Utah | Utah Design System | [Documentation](https://designsystem.utah.gov/) · [official source](https://github.com/utahdts/utah-design-system) · npm `@utahdts/utah-design-system` **5.3.0** | Current public package/source and header package. | **P — Ready** |
| Vermont | Enterprise CMS/design-system implementation evidence | [2024 official annual report](https://legislature.vermont.gov/assets/Legislative-Reports/ADS-2024-Annual-Report.pdf) | Official report places a design system within the CMS program, but no current public implementation or documentation hub was found. | **E — No skill** |
| Virginia | Commonwealth Design System | [Developer portal](https://www.developer.virginia.gov/) · [web standards quick start](https://www.developer.virginia.gov/web-standards-reference-guides/web-standards-a-quick-start-reference-guide/) | Public standards, banner/template code, and design-system references; the broader component system remains preview/incomplete. | **H/V — Conditional** |
| Washington | State accessibility and inclusive-design services | [Accessibility](https://watech.wa.gov/accessibility) · [inclusive design](https://watech.wa.gov/services/digital-experience/inclusive-design) | Public statewide standards/services and shared-platform templates; no distinct public component design system found. | **G — Guidance only** |
| West Virginia | No statewide system found | **Could not find a qualifying official public design-system or statewide digital-style link.** | No official reusable system, public guide, or named internal system was verified. | **N — No skill** |
| Wisconsin | Wisconsin Webmasters / agency templates | [Official webmasters hub](https://webmasters.wi.gov/Pages/Home.aspx) · [agency template overview](https://webmasters.wi.gov/Pages/AgencyTemplates/Overview.aspx) | Public guidance for centrally managed SharePoint templates; implementation is internal/vendor-controlled. | **G — Guidance only** |
| Wyoming | State accessibility standard | [Official accessibility page](https://ai.wyo.gov/about-us/accessibility) | Accessibility requirements for the state's Google-based platform; no statewide component design system found. | **G — Guidance only** |

## District of Columbia

| Jurisdiction | Official system / result | Primary official links | Public reality | Skill gate |
|---|---|---|---|---|
| District of Columbia | District Government Web Style and Standards | [Official OCTO hub](https://octo.dc.gov/page/district-government-web-style-and-standards) | Public Bootstrap-oriented style/authoring standards; referenced implementation resources are primarily for the District's managed environment. | **G — Guidance only** |

## Inhabited U.S. territories

| Territory | Official system / result | Primary official links | Public reality | Skill gate |
|---|---|---|---|---|
| Puerto Rico | GUIDI — Guías de Interfaz y Diseño | [Accessibility/GUIDI hub](https://www.accesibilidad.pr.gov/) · [official GUIDI PDF](https://docs.pr.gov/files/prits/Guias/PRITS-004%20-%20Gu%C3%ADas%20de%20Interfaz%20y%20Dise%C3%B1o%20%28GUIDI%29.pdf) · [2024 portal procedure](https://docs.pr.gov/files/prits/SOP/PRITS-SOP_0004-OPE%20Procedimiento%20para%20los%20Portales%20Web%20del%20Gobierno%20de%20Puerto%20Rico.pdf) | Official USWDS-derived interface/design modules and portal standards; no public package/source repository found. | **G — Guidance only** |
| U.S. Virgin Islands | No public system found | **Could not find a qualifying official public design-system or government web-style link.** Responsible technology bureau: [BIT](https://dpp.vi.gov/government-agencies/bureau-of-information-technology/). | No reusable system, public standards hub, or named internal system was verified. | **N — No skill** |
| Guam | Guam.gov Website Standards | [Official standards PDF](https://otech.guam.gov/wp-otech-content/uploads/2024/01/240130-OTECH2024-001-Guam.Gov-Website-Standards.pdf) · [Office of Technology policies](https://otech.guam.gov/policies/) | Current header/footer, branding, content, and accessibility standard; no reusable component source/package found. | **G — Guidance only** |
| American Samoa | No public system found | **Could not find a qualifying official public design-system or government web-style link.** | No reusable system, public standards hub, or named internal system was verified. | **N — No skill** |
| Northern Mariana Islands | Government website standardization effort | [Official FY2025 report](https://opa.cnmi.gov/storage/2026/03/CNMI-Department-of-Finance-FY-2025-CCR.pdf) | Official report says OIT is standardizing CNMI government sites to U.S. Web Design Standards; no public CNMI-specific implementation or guide was found. | **E — No skill; use USWDS only when authorized** |

# Recommended skill build queue

## Build now from complete public implementations

The strongest immediate candidates are:

- Federal: USWDS Core, Login.gov, CMS Core, the three CMS child systems, VA Design System, NCI, and JPL Explorer 1.
- State: Georgia Orchard, Louisiana Pelican, Michigan Digital Guidelines, New Jersey NJWDS, New York NYSDS, and Utah Design System.

For USWDS-derived systems, make the jurisdiction skill a thin delta over the existing `uswds` skill: jurisdiction-specific tokens, components, content rules, installation, and “when not to use.” Do not duplicate general USWDS guidance.

## Build only with explicit maturity warnings

USWDS Elements, GSA USDS, SAM, CFPB, FEC, NASA Horizon, NASA JPL Stellar, CDC DIBBs, CBP, IRS, USDA FPAC, Alaska, Delaware, Maryland, Massachusetts, Missouri, Montana, Pennsylvania, Rhode Island, Texas, and Virginia have usable public material but a beta/preview state, work-in-progress upstream, hosted-only or one-time delivery, incomplete code, specialized scope, or uncertain maintenance.

California version 0 remains router-only: the current official site says it is in early development but does not publish a reusable implementation. The superseded beta must not be repackaged as the current system.

## Do not generate component skills from guidance or evidence alone

A guidance-only skill may summarize official rules and point to the state's managed platform, but it must not invent component APIs, tokens, packages, or source availability. Evidence-only, legacy, and not-found rows should not become implementation skills unless the authoritative system is later obtained.

# Current best practices for building the skills

The authoritative current OpenAI guidance is [Build skills](https://learn.chatgpt.com/docs/build-skills). The collection also follows Anthropic's [Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) and [Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices), supplemented by the installed `skill-creator` instructions in this workspace.

1. Give each skill one focused job. Put jurisdiction/system boundaries and trigger terms at the start of the `description`; descriptions may be shortened or omitted when many skills are installed.
2. Use progressive disclosure: a short `SKILL.md`, with detailed component, token, accessibility, content, and migration material in `references/`.
3. Keep `SKILL.md` under 500 lines. Use lowercase letters, digits, and hyphens for a name no longer than 64 characters. Write a third-person description that says what the skill does and when it applies. Use only `name` and `description` in frontmatter unless a supported extension is actually needed. Add `agents/openai.yaml` only for requested UI metadata.
4. Prefer instructions and examples over scripts. Add scripts only for deterministic work such as version checks, asset downloads, link checks, token conversion, or validation.
5. Write imperative instructions with explicit inputs, outputs, source precedence, refusal conditions, and version/maturity warnings.
6. Store a source ledger in every skill: official documentation URL, source URL, package name/version observed, retrieval date, license, and known replacement/legacy status.
7. Never silently fill missing official guidance from visual inspection or another jurisdiction. Fall back to USWDS only when the official system explicitly inherits it or the user asks for that fallback.
8. Store at least three realistic evaluations covering a positive use, a scope/release boundary, and a missing/unsupported API. Run the local skill validator before treating a skill as installable, and test across the model families intended for release when those runtimes are available.

Recommended shape:

```text
federal/ or states/
└── system-name/
    ├── SKILL.md
    ├── agents/
    │   └── openai.yaml
    ├── references/
    │   ├── sources.md
    │   ├── foundations.md
    │   ├── components.md
    │   ├── accessibility.md
    │   └── migration.md
    └── scripts/
        └── check-upstream-version.*
```

The `sources.md` ledger should be the first file updated when an upstream system changes. A skill must fail closed—explain that the requested component or rule is not in the captured official material—rather than manufacture a plausible government pattern.

# Maintenance protocol

- Recheck live packages and official status pages before generating each skill; the version numbers above are a dated snapshot.
- Re-run the not-found searches at least quarterly because several jurisdictions are actively modernizing platforms.
- Treat redirects, archived repositories, “early development,” “beta,” and “not recommended for new work” banners as release-state facts, not cosmetic notices.
- Preserve legacy systems only for migrations. New-work skills must point to the documented successor.
- Keep the independently supplied [research/design-systems-landscape.md](research/design-systems-landscape.md) as provenance, but do not copy claims from it without primary-source confirmation.
