# NVSBE Matchmaking Skill

An [Agent Skill](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) that plans and books matchmaking sessions for the VA National Veterans Small Business Engagement (NVSBE) on the My Business Matches portal (`dapevents.mbmapp.com`). The portal lists more than a thousand sessions across two days, and most attendees pick from titles alone. This skill reads every session summary, scores it against the company's capability statement, and fills each slot with the meeting most likely to lead to work.

## What this skill does

1. **Capability statement first.** Pulls core capabilities, past performance, differentiators, NAICS codes, certifications and contract vehicles from memory or project files, and asks for the statement if any of it is missing.
2. **Goals and access.** Collects ranked goals (VA buyers vs. primes, one-on-ones vs. roundtables, target offices such as OIT, VBA, VHA or the TAC) and confirms the user is signed in to the portal in a browser Claude can drive. It never types a password. An optional LinkedIn pass flags hosts who are 1st-degree connections.
3. **Portal check.** Loads [`references/portal.md`](references/portal.md), which records session types, slot times, seat labels, CSS selectors and booking steps observed during NVSBE 2026, and confirms them against the live page.
4. **Scrape.** Reads every card in every bookable slot through the page UI (title, type, office, host, seats, status, full summary), one time slot per browser call.
5. **Rank.** Scores sessions on capability match, named follow-on requirements, format size, open seats and warm connections, and flags duplicate hosts.
6. **Propose.** Writes a plan file with one pick and one or two fallbacks per slot, sessions to skip, people better reached by email, and primes to approach on the floor. Then it waits for approval.
7. **Book.** Books only the approved sessions, in slot order, confirming the attending state after each one.
8. **Swap.** Asks before any cancellation and warns that a canceled seat goes to the host's waitlist and is not recoverable.
9. **Verify.** Reloads My Schedule, lists every booked session and reports what was booked, lost or skipped.

A manual mode covers setups without browser control: the user pastes agenda text or screenshots one slot at a time and gets back a click list to book by hand.

Guardrails built into the skill:

- Reads the agenda through the page UI only and never calls the portal's search API directly.
- Never accepts the cookie consent banner on the user's behalf.
- Books, cancels and swaps only with explicit approval for the named sessions.
- Keeps the capability statement, LinkedIn connections and schedule out of outside services, URLs and search queries.

## When Claude uses it

Claude triggers this skill when a conversation mentions NVSBE, VA matchmaking, My Business Matches, booking VA one-on-ones, or building an agenda for a VA small business event.

Example prompts:

```
Help me book my NVSBE matchmaking sessions. Our capability statement is attached.
Which VA OIT one-on-ones on day 2 fit our cloud and AI work?
Swap my 9:00 roundtable for a one-on-one if a better one is open.
I can't give you browser access. Here's the 1:15 PM agenda text, rank it for me.
```

## Installation

Install with the [skills.sh](https://skills.sh) CLI:

```bash
npx skills add blencorp/skills --skill nvsbe-matchmaking
```

Or copy the `nvsbe-matchmaking` directory into a skills location:

- **Claude Code (personal):** `~/.claude/skills/nvsbe-matchmaking/`
- **Claude Code (project):** `.claude/skills/nvsbe-matchmaking/`
- **claude.ai:** upload the directory as a zip file under Settings > Features

Automated booking needs a browser Claude can drive with the user already signed in (Claude in Chrome or the Claude built-in browser). Without one, the skill falls back to manual mode.

## Skill contents

| File | Purpose |
|------|---------|
| `SKILL.md` | The nine-step workflow from capability statement to verified schedule |
| `references/portal.md` | Portal notes from NVSBE 2026: session types, slots, selectors, booking and cancel flow, lessons learned |

## Currency and disclaimer

The portal notes reflect NVSBE 2026 (Cleveland, December 8-9) as observed in November 2026. The vendor can change the portal between events, and the skill tells Claude to check each note against the live page and report differences. The portal itself is the authoritative source for session availability and booking rules.

This skill is not affiliated with or endorsed by the Department of Veterans Affairs or the portal vendor.

## License

Apache 2.0. See [LICENSE](../LICENSE).

---

Built with ❤️ by [BLEN, Inc](https://www.blencorp.com).
