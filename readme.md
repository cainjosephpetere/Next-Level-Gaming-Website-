# Next Level Gaming & Esports Arena Website

## Student information

| Student name | Student number |
| --- | --- |
| Mulenga Noam | ST10517736 |
| Cain Joseph | ST10541995 |
| Neo Sipho | ST10535603 |
| Umile Mbombela | ST10524342 |

| Field | Information |
| --- | --- |
| Institution | ROSEBANK INTERNATIONAL COLLEGE |
| Programme / course | WORK INTEGRATED LEARNING 1 |
| Module | XHAW5112 |
| Submission date | November 13, 2026 |

## Project overview

This project is a responsive, single-page website for Next Level Gaming & Esports Arena, presented as a gaming venue in Rosebank, Johannesburg. It introduces the arena and its experiences, explains session packages, provides an interactive fee estimate in South African Rand (ZAR), and lets visitors send a booking enquiry.

The site is built with HTML, CSS and vanilla JavaScript. It has no build step or package installation requirement. Google Fonts supplies the Inter typeface (Google Fonts, n.d.); the contact section embeds a Google Map centered on Johannesburg (Google, n.d.); and the booking enquiry form uses Formspree (Formspree, n.d.). The site also uses photographs hosted by Unsplash (Unsplash, n.d.-a, n.d.-b, n.d.-c, n.d.-d).

## Website goals and objectives

- Present the arena, its location and its gaming experiences in a clear, welcoming format.
- Help visitors compare casual gaming, tournament preparation, and group or corporate sessions.
- Make estimated pricing easier to understand by showing selected options, extras, subtotal, VAT and total.
- Give prospective visitors a direct way to submit an enquiry with their preferred date and contact details.
- Provide straightforward navigation and a layout that adapts to mobile, tablet and desktop screens.
- Make the venue's Johannesburg location easy to find using the embedded map.

## Key features and functionality

- **Responsive one-page layout:** Section navigation, mobile menu and layouts adapt to smaller screens.
- **Arena and experience information:** Introductory content describes the venue, equipment and available activities.
- **Session packages:** Visitors can compare casual gaming, tournament prep, and group or corporate options.
- **Interactive fee estimator:** Options update an itemized estimate immediately, including applicable extras and 15% VAT.
- **Booking enquiry dialog:** Visitors provide a name, email and preferred date. The selected session details and estimated costs are included in the Formspree submission. Sending an enquiry does not confirm a booking; the arena team must respond.
- **Contact information and map:** The contact section provides the listed address, hours and email, plus a Google Map centered on Johannesburg.
- **Accessibility and usability:** Semantic page landmarks, descriptive image text, visible form labels, keyboard-operable controls, and reduced-motion styling are included.

## Page and component details

| Part | Details |
| --- | --- |
| Header and navigation | Brand logo, links to the main page sections, desktop booking actions, and a collapsible mobile navigation menu. |
| Home / hero | Introduces the arena and its Johannesburg location, with links to plan a session or explore the site. |
| Arena highlights | Summarizes key venue details, including gaming stations, displays and other experiences. |
| Experiences | Presents casual gaming, tournament preparation, and group or corporate sessions. Links can preselect the matching estimator experience. |
| The arena | Describes the venue and lists its advertised equipment and services. |
| Equipment highlights | Summarizes gaming PC, display, connectivity and play options. |
| Packages | Compares the three session types and their displayed starting rates, with links into the estimator. |
| Fee estimator | Calculates an estimate from experience, group size, duration and optional extras. Displays line items, subtotal, VAT and total. |
| Contact | Displays the venue contact information, opening hours, booking prompt and Johannesburg-centered map. |
| Booking dialog | Collects a visitor's name, email and preferred date; submits the enquiry and estimate to Formspree and displays success or error feedback. |
| Footer | Repeats key venue details and provides additional links to the page sections. |

### Fee estimator

The estimator calculates the base session amount as:

`Experience base rate × group-size multiplier × duration multiplier`

It adds selected extras to get the subtotal, calculates VAT at 15%, and adds VAT to display the estimated total. The estimate is for planning only; it is not a quote or confirmed booking.

| Experience | Base rate |
| --- | ---: |
| Casual gaming | R600 |
| Tournament prep | R1,200 |
| Group & corporate | R2,500 |

| Group size | Multiplier |
| --- | ---: |
| Solo (1 gamer) | 0.6× |
| Squad (2–10 players) | 1× |
| Full arena (10+ players) | 2.2× |

| Session length | Multiplier |
| --- | ---: |
| 2 hours | 0.6× |
| 4 hours | 1× |
| All day | 1.8× |

| Optional extra | Price |
| --- | ---: |
| 1-on-1 pro coaching | R285 |
| Catering pack | R1,000 |
| Live stream setup | R1,026 |

## Sitemap

```text
Home (#home)
├── Experiences (#experiences)
├── The arena (#arena)
├── Packages (#packages)
├── Fee estimator (#estimator)
└── Contact (#contact)
    └── Johannesburg map

Booking dialog (opened from booking/enquiry buttons)
Footer (links to page sections and venue information)
```

## Project files

- `index.html` — Page structure, content, navigation, estimator controls, contact details, map and booking form.
- `style.css` — Visual design, responsive layouts, menu/dialog states and reduced-motion styling.
- `script.js` — Navigation and dialog interactions, estimator calculations, and Formspree submission.
- `assets/nextlevel-logo.png` — Arena logo used in the header and footer.
- `robots.txt` — Allows search engine crawlers and points them to the XML sitemap.
- `sitemap.xml` — Lists the published homepage for search engines.

## Run locally

Open `index.html` in a modern browser, or use VS Code Live Server. There is no build step or package installation.

The website's external fonts, photographs, map and booking service require an internet connection. Before publishing, verify that the displayed venue details and Formspree endpoint are correct and active.

## Changelog

### 12 November 2026

- Added a responsive, lazy-loaded Google Map centered on Johannesburg to the contact section.
- Expanded this README with project information, feature and page details, a sitemap, and references.
- Added `robots.txt` and `sitemap.xml` for search engine crawling and discovery.

##  References (Harvard Anglia style)


Formspree (n.d.) *Formspree* [Online]. Available at: https://formspree.io/ (Accessed: 12 November 2026).

Google (n.d.) *Google Maps: Johannesburg, South Africa* [Online]. Available at: https://maps.google.com/maps?q=Johannesburg%2C%20South%20Africa&z=12&output=embed (Accessed: 12 November 2026).

Google Fonts (n.d.) *Inter* [Online]. Available at: https://fonts.google.com/specimen/Inter (Accessed: 12 November 2026).

Unsplash (n.d.-a) *Arena photograph* [Photograph]. Available at: https://images.unsplash.com/photo-1560253023-3ec5d502959f (Accessed: 12 November 2026).

Unsplash (n.d.-b) *Esports event photograph* [Photograph]. Available at: https://images.unsplash.com/photo-1542751371-adc38448a05e (Accessed: 12 November 2026).

Unsplash (n.d.-c) *Gaming PC photograph* [Photograph]. Available at: https://images.unsplash.com/photo-1593305841991-05c297ba4575 (Accessed: 12 November 2026).

Unsplash (n.d.-d) *Group event photograph* [Photograph]. Available at: https://images.unsplash.com/photo-1521737711867-e3b97375f902 (Accessed: 12 November 2026).
