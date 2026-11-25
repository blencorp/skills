# NVSBE Matchmaking Skill

[![Download the skill (zip)](https://img.shields.io/badge/Download-nvsbe--matchmaking.zip-0b5fff?style=for-the-badge)](https://github.com/blencorp/skills/releases/latest/download/nvsbe-matchmaking.zip)

NVSBE has 1,400 sessions. This skill reads every one against your capability statement and books the ones that fit.

It helps veteran-owned small businesses prepare for the VA National Veterans Small Business Engagement (NVSBE) matchmaking on the My Business Matches portal. It is free and open source (Apache 2.0), built by BLEN, an SDVOSB. It asks before it books anything, and it never cancels a seat without warning you that the seat is gone.

<!-- TODO: embed the 60-second screen recording here. -->

## Install

Every option below uses the same skill folder. The zip from the download button holds that folder, named `nvsbe-matchmaking` to match the skill name. Claude rejects an upload when the two differ.

### No install: paste one prompt

Paste this into Claude or ChatGPT:

```text
Read https://raw.githubusercontent.com/blencorp/skills/main/nvsbe-matchmaking/SKILL.md and follow it to help me plan my NVSBE matchmaking schedule. Ask me for my capability statement first.
```

This works on any plan with web access. It lasts one conversation, so paste it again next time.

### Claude Code, Codex and other agent CLIs

```bash
npx skills add blencorp/skills --skill nvsbe-matchmaking
```

In these tools you can also ask the assistant to run the command for you. Chat apps can't install a skill from a prompt, so on claude.ai and ChatGPT you upload the zip.

### claude.ai and the Claude apps

Available on Free, Pro, Max, Ultra, Team and Enterprise plans.

1. Turn on code execution: **Settings > Capabilities > Code execution and file creation**.
2. [Download the zip](https://github.com/blencorp/skills/releases/latest/download/nvsbe-matchmaking.zip).
3. Go to **Customize > Skills**, click **+**, then **Create skill > Upload a skill**, and pick the zip.

On Team and Enterprise, an owner can turn off user-created skills. If the upload option is missing, ask your owner to add it org-wide.

### Claude for your whole organization

Team and Enterprise owners can turn the skill on for every user:

1. In **Organization settings > Plugins & skills**, open the **Policy** tab and check that **Cloud code execution and file creation** and **Skills** are both on.
2. Click **Add > Upload a skill** and pick the zip.

### ChatGPT

Skills are available on ChatGPT Business, Enterprise, Healthcare and Edu workspaces. Go to **Plugins > Skills > Create > Upload from your computer** and pick the zip. Plan coverage and menu names change, so check [Skills in ChatGPT](https://help.openai.com/en/articles/20001066-skills-in-chatgpt) if your workspace looks different. On Free, Plus and Pro, use the paste-one-prompt option above.

## Booking needs a browser the assistant can drive

To read the agenda and book for you, the assistant needs a browser where you are already signed in to the portal: Claude in Chrome, the Claude desktop app, or ChatGPT agent mode. It never types your password.

Without one, the skill still works. Paste agenda text or upload screenshots one time slot at a time. It ranks the sessions and hands back a click list (slot, session, host, fallback) for you to book yourself. This mode works on every plan.

## What it does

1. **Reads your capability statement.** It pulls capabilities, past performance, NAICS codes, certifications and contract vehicles from memory or project files, and asks for the statement if anything is missing.
2. **Asks for your goals.** VA buyers or primes, one-on-ones or roundtables, target offices such as OIT, VBA, VHA or the TAC. If LinkedIn is open in the same browser, it flags hosts you already know.
3. **Checks the portal.** It confirms the notes in [`references/portal.md`](references/portal.md) (session types, slot times, seat labels, booking steps from NVSBE 2026) against the live page and tells you what changed.
4. **Reads every session.** It goes through each card in each bookable slot using the page itself, not the portal's search API.
5. **Ranks them.** Capability match, requirements the host named in the summary, smaller formats, open seats and warm connections. It flags duplicate hosts.
6. **Proposes a plan.** One pick and one or two fallbacks per slot, sessions to skip, people better reached by email, and primes to find on the floor. Then it waits for your approval.
7. **Books what you approved.** Only those sessions, in slot order, confirming each one.
8. **Handles swaps carefully.** It asks before canceling and warns that a canceled seat goes to the host's waitlist and won't come back.
9. **Verifies the schedule.** It reloads My Schedule and reports what is booked, what was lost and who to contact outside the portal.

It never accepts the portal's cookie banner for you, and it keeps your capability statement, connections and schedule out of outside services.

## Example prompts

```text
Help me book my NVSBE matchmaking sessions. Our capability statement is attached.
Which VA OIT one-on-ones on day 2 fit our cloud and AI work?
Swap my 9:00 roundtable for a one-on-one if a better one is open.
I can't give you browser access. Here's the 1:15 PM agenda text, rank it for me.
```

## Skill contents

| File | Purpose |
|------|---------|
| `SKILL.md` | The nine-step workflow from capability statement to verified schedule |
| `references/portal.md` | Portal notes from NVSBE 2026: session types, slots, selectors, booking and cancel flow, lessons learned |

## Currency and disclaimer

The portal notes reflect NVSBE 2026 (Cleveland, December 8-9) as observed in November 2026. The portal can change between events, so the skill checks each note against the live page. The portal is the authoritative source for session availability and booking rules.

This skill is not affiliated with or endorsed by the Department of Veterans Affairs or the portal vendor.

## License

Apache 2.0. See [LICENSE](../LICENSE).

---

Built with ❤️ by [BLEN, Inc](https://www.blencorp.com).
