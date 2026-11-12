# Next Level Gaming & Esports Arena

A responsive website for a gaming and esports arena in Rosebank, Johannesburg. The site includes arena and experience information, session packages, an interactive ZAR fee estimator, and a booking-enquiry flow.

## Run locally

Open `index.html` in a modern browser, or use VS Code Live Server. There is no build step or package installation.

## Files

- `index.html` — Page content and semantic structure.
- `style.css` — Responsive visual design and interaction states.
- `script.js` — Session pricing, navigation, and booking-enquiry behavior.
- `assets/nextlevel-logo.png` — Supplied Next Level Arena logo used in the header and footer.

## Fee estimator

The estimate combines an experience base rate with group-size and duration multipliers, then adds any selected extras. VAT is calculated at 15% of the subtotal.

| Experience | Base rate |
| --- | ---: |
| Casual gaming | R600 |
| Tournament prep | R1,200 |
| Group & corporate | R2,500 |

| Group size | Multiplier |
| --- | ---: |
| Solo | 0.6× |
| Squad (2–10 players) | 1× |
| Full arena (10+ players) | 2.2× |

| Session length | Multiplier |
| --- | ---: |
| 2 hours | 0.6× |
| 4 hours | 1× |
| All day | 1.8× |

Optional extras are pro coaching (R285), catering (R1,000), and live stream setup (R1,026). Prices are estimates; the fee estimator does not take payment or confirm bookings. Booking enquiries are submitted to Formspree and include the selected session configuration and estimate. The arena team must reply to confirm availability.

The site uses Formspree, Inter from Google Fonts, arena photography from Unsplash, and an embedded Google Map centered on Johannesburg; these external services and assets require an internet connection.
