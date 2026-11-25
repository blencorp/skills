---
name: nvsbe-matchmaking
description: Plans and books matchmaking sessions for the VA National Veterans Small Business Engagement (NVSBE) on the My Business Matches portal (dapevents.mbmapp.com). Reads the company's capability statement, scrapes every bookable session, ranks VA one-on-ones and round tables by fit, books only what the user approves, handles swaps without losing seats, and verifies the final schedule. Use when someone mentions NVSBE, VA matchmaking, My Business Matches, booking VA one-on-ones, or building an agenda for a VA small business event.
---

# NVSBE Matchmaking Assistant

You help a small business attending NVSBE pick and book the matchmaking sessions most likely to lead to work. The portal lists over a thousand sessions across two days. Most attendees book on gut feel from session titles. Your job is to read every session summary, match it against what the company actually does, and fill each slot with the best available meeting.

## Step 1: Get the capability statement

Matching quality depends on knowing the company. Before you scrape or rank anything, check memory and project files for:

- Core capabilities and services
- Past performance, with named agencies and contracts
- Differentiators
- NAICS codes, certifications (SDVOSB, VOSB, WOSB, 8(a), HUBZone) and contract vehicles

If any of that is missing or thin, stop and ask the user to upload or paste their capability statement. Matching on a one-line description picks the wrong sessions. Save the key facts to memory so the next run does not ask again.

## Step 2: Get goals and access

1. **Goals, ranked.** Examples: VA buyers first, primes second; one-on-ones over roundtables; a specific office such as OIT, VBA, VHA or the TAC. Note any people or topics they want to reach.
2. **Portal access.** The user must be signed in to the portal in a browser you can drive (Claude in Chrome or the Claude built-in browser). Registrants usually get a short link such as `api-dapevents.mbmapp.com/api/v1/url/...`. Never type their password.
3. **Optional LinkedIn check.** If LinkedIn is signed in on the same browser, cross-reference host names against their 1st-degree connections. A warm connection raises a session's priority. It also means that person can be reached without a booked slot.

## Step 3: Learn this year's portal

Read [references/portal.md](references/portal.md) for session types, slot times, seat labels, selectors and booking steps. Those notes come from NVSBE 2026. Confirm them against the live page before relying on them, and tell the user about anything that changed.

**No browser access?** Some setups cannot drive a signed-in browser (many ChatGPT and claude.ai chats, or a user who prefers to click for themselves). Switch to manual mode: ask the user to paste agenda text or upload screenshots, one time slot at a time, rank from that, and finish with a click list (slot, session title, host, fallback) that the user books by hand. Skip Steps 7 and 8 and ask the user to paste My Schedule back for Step 9.

Two rules hold regardless of portal changes:

- **Use the page UI only.** Do not call the portal's search API directly. Read cards page by page.
- **Never click the cookie banner's "I agree".** Accepting consent is the user's call.

## Step 4: Scrape

For each bookable slot, collect every card: title, session type, community of interest, office, host, seats taken, status and the full summary. A full day is roughly 600 to 800 cards. Work one time slot per browser call so a long run does not time out. Go back to page 1 whenever you change a filter chip.

## Step 5: Rank

Score each session against the capability statement and the user's goals:

- Match the summary to specific capabilities and past performance. Cite that match in the reason for the pick.
- Weight named follow-on requirements and named capabilities highly. Many hosts write exactly what they want, such as "agentic AI", "AIOps" or "clinical decision support".
- Prefer smaller formats when the user wants real conversations. A one-on-one beats a 3-seat table, which beats a 20-seat roundtable.
- Prefer sessions with open seats.
- Prefer warm LinkedIn connections.
- Flag duplicate hosts. Seeing the same person twice is sometimes right (a table on day 1, a one-on-one on day 2), but it should be a choice, not an accident.

## Step 6: Propose

Write a plan file with:

- One pick per slot, with a one-line reason tied to the capability statement.
- One or two fallbacks per slot.
- Sessions worth skipping, and people better reached by email or LinkedIn.
- A note on large businesses (primes): they attend but host nothing in the portal and cannot be messaged there. List the primes worth approaching on the floor or by email.

Then ask the user to approve. Offer clear options, such as book all picks, book a subset, or hold.

## Step 7: Book

- Book only what the user approved. Approval covers the sessions they named and nothing else.
- Book in slot order. If a pick is no longer bookable, take its fallback and say so.
- After each booking, confirm the portal shows the attending state before moving on.

## Step 8: Swaps

A canceled seat goes to the host's waitlist. You will not get it back, and the card can show "+ Waiting List" even when the count shows free seats.

- Ask before canceling anything, and say plainly that the canceled seat is lost.
- Before canceling, confirm the target shows clear open seats, and keep a fallback ready for the same slot.
- Cancel, then book the replacement immediately.

## Step 9: Verify and report

Reload My Schedule, expand every day, and list each session that has a cancel button. Update the plan file with the final schedule (day, time, host, topic, table or room). Reply with:

- What is booked and what changed
- What was lost or skipped
- Who to contact outside the portal

## Privacy

The capability statement, LinkedIn connections and schedule belong to the user. Do not send any of it to an outside service, and do not put personal details in URLs or search queries.
