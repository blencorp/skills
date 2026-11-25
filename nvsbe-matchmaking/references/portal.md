# My Business Matches portal notes (NVSBE 2026)

Observed on dapevents.mbmapp.com in November 2026, while booking for NVSBE 2026 (Cleveland, December 8-9). The portal can change between events. Check each item against the live page.

## Session types

| Type | Seats | When (2026) |
|---|---|---|
| VA One-on-one | 1 | Day 2 only |
| VA Networking Round Tables | 3 | Day 1 afternoon, some day 2 |
| Key Leader Roundtable | about 20 | Both days |
| General sessions, exhibit hall | n/a | Added to every schedule; not bookable |

Large businesses (primes) attend as "Large Business". They host no sessions and cannot be messaged in the portal. Their profiles accept a private label only (Potential, To meet, Future).

## Slots

Fixed 45-minute slots. You can hold one session per slot.

- Day 1: 1:15, 2:15, 3:15, 4:15 PM
- Day 2: 8:00, 9:00, 10:00, 11:00 AM; 1:15, 2:15 PM

## Agenda page (`/users/agenda`)

- Each session is an `article.v2-card` element.
- Filter by day chip (text like "Dec 08"), then by time chip (text like "1:15PM - 2:00PM").
- Ten cards per page. Next page: `[data-key="next"]`.
- The page index carries over when you change chips. Go back to page 1 after each change, or you will silently skip the first pages.
- A "Search by Session Title" box filters by title.
- Wait for the "Loading..." placeholder to clear before reading cards.

### Reading a card

- Seat label "X/Y seats" means X taken out of Y. "0/1 seats" is an open one-on-one.
- The last line is the status:
  - "Attend this session": bookable.
  - "+ Waiting List": full, or the seat is held for the waitlist.
  - "You have different session": the user already holds that slot. To check whether the session is open, look at the seat label.

## Booking

1. Click "Attend this session" on the card.
2. A side panel (`.nvd-panel`) opens. Click its "Attend this session" button.
3. Wait for "You're attending", then click "Done".
4. A toast reads "Your schedule has been updated successfully."

Re-locate the card right before clicking. The list re-renders, and a stale handle fails with "element is not attached to the DOM".

## My Schedule (`/users/timeline`)

- Day sections collapse. Expand one with `button.tl2-day-head[aria-controls="tl2-body-YYYY-MM-DD"]`; its body is `#tl2-body-YYYY-MM-DD`.
- Each item is a `.timelineblock__content`. Booked sessions carry a `button.btn--cancel` ("Cancel Session" or "Cancel Meeting").
- Canceling opens a modal with an optional message box. Click "Yes, cancel ..." and leave the message blank unless the user wrote one.

## Lessons from 2026

- A canceled seat went straight to the host's waitlist and could not be rebooked, even when the counter showed open seats.
- Popular OIT one-on-ones filled within the first day of booking.
- Direct calls to the agenda search endpoint were blocked as unauthorized. Reading the UI page by page worked.
