# GSA MAS Skill

An [Agent Skill](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) that guides first-time applicants through a complete [GSA Multiple Award Schedule (MAS)](https://www.gsa.gov/buy-through-us/purchasing-programs/multiple-award-schedule) application, focused on SIN 54151S (IT Professional Services). A majority of first-time offers are rejected or bounced back for documentation errors; this skill turns Claude into a methodical application assistant that works phase by phase, produces concrete deliverables at each step, and catches problems before submission.

## What this skill does

The skill structures the application into six phases, each ending in a reviewable deliverable:

1. **Eligibility check and readiness assessment** — business history, financial statements, NAICS alignment, past performance inventory, and an honest readiness report (including telling users who are not ready that they are not ready)
2. **Registration and prerequisites** — SAM.gov/UEI, FAS ID with multi-factor authentication, Pathways to Success training, and required solicitation reading, delivered as a tracked checklist
3. **Technical proposal** — interview-driven drafting of all four evaluation factors: Corporate Experience, Past Performance (CPARS, Past Performance Questionnaires, and permitted alternative formats), Quality Control Plan, and Relevant Project Experience, with character counts tracked against eOffer's hard 10,000-character limits
4. **Pricing** — interactive labor category (LCAT) collection one role at a time, Economic Price Adjustment clause selection, commercial price list assembly, and consistency checks under the current TDR (Transactional Data Reporting) regime, plus a conditional subcontracting plan step for large businesses
5. **Final assembly and submission** — an interactive document-by-document checklist, cross-document consistency review, and eOffer submission guidance
6. **Post-award obligations** — minimum sales thresholds, monthly TDR reporting, the Industrial Funding Fee, mass modification acceptance windows, and other ongoing compliance commitments

Behavioral features built into the skill:

- **Step Zero research** — at the start of every session, Claude runs a web search for the latest solicitation Refresh, template versions, and SIN status, and adjusts guidance when requirements have changed
- **Resume from anywhere** — users who arrive mid-process are taken directly to the phase they need; the skill does not restart completed work
- **Pushback on weak inputs** — vague marketing plans, boilerplate quality control language, questionable rates, and padded labor category lists are flagged rather than accepted
- **Current-requirements awareness** — the skill tracks solicitation Refresh changes (Refresh 30 through 32) and corrects outdated advice, such as preparing a CSP-1 disclosure or a Professional Compensation Plan, both of which have been removed from the solicitation
- **Plain-language onboarding** — federal contracting acronyms (SIN, eOffer, UEI, IFF, TDR, LCAT, and others) are defined in plain English on first use

## When Claude uses it

Claude triggers this skill automatically when a conversation mentions the GSA Schedule, GSA MAS, a GSA contract, selling to the government through GSA, SIN 54151S, or eOffer, and when a user uploads GSA application materials (financial statements, past performance documents, pricing sheets) and wants help assembling an offer package.

Example prompts:

```
We're an IT consulting firm and want to get on the GSA Schedule. Where do we start?
I already have my SAM registration. Help me write my corporate experience narrative.
Review my labor category rates before I submit my GSA offer.
What am I committing to after award if we get on the Schedule?
```

## Installation

Install with the [skills.sh](https://skills.sh) CLI:

```bash
npx skills add blencorp/skills --skill gsa-mas
```

Or install manually by copying the `gsa-mas` directory into a skills location:

- **Claude Code (personal):** `~/.claude/skills/gsa-mas/`
- **Claude Code (project):** `.claude/skills/gsa-mas/`
- **claude.ai:** upload the directory as a zip file under Settings > Features (requires a plan with code execution enabled)

The skill performs best in an environment with web search available, since it re-verifies current GSA requirements at the start of each session.

## Skill contents

| File | Purpose |
|------|---------|
| `SKILL.md` | The complete phase-by-phase application workflow, deliverable specifications, current-requirements caveats, and tone guidance |
| `evals/evals.json` | 42 evaluation cases with grading criteria |

The evaluation suite covers every phase plus behavioral checks: phase skipping for returning users, honest negative assessments, pushback on weak marketing plans and boilerplate quality control content, catching pricing errors, correcting outdated requirements, and Refresh 31/32 rule changes. Each case defines `must_contain` and `must_not_contain` criteria along with qualitative assertions, so the skill's behavior can be regression-tested as GSA requirements evolve.

## Currency and disclaimer

The GSA MAS solicitation (47QSMD20R0001) is periodically updated through Refreshes that add, change, and remove requirements. This skill is current through Refresh 32 (June 2026) and instructs Claude to verify requirements against live sources at the start of every session. The live solicitation on SAM.gov is always the authoritative source.

This skill provides guidance based on publicly available GSA documentation and common practices. It is not legal, financial, or contractual advice. For complex situations, particularly around pricing strategy, consider engaging a GSA Schedule consultant.

## License

Apache 2.0 — see [LICENSE](../LICENSE).

---

Built with ❤️ by [BLEN, Inc](https://www.blencorp.com).
