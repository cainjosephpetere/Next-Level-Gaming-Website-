# NEXTLEVEL - Gaming & Esports Arena Web Application

A responsive, single-page web interface and fee calculator built for **NEXTLEVEL Gaming & Esports Arena** located in Rosebank, Johannesburg, South Africa. 

The application allows gamers, esports squads, and corporate teams to estimate arena session fees, configure customized hardware and training parameters, and submit booking requests with itemized ZAR price transparency.

---

## 🚀 Key Features

* **Exact Brand Identity**: Custom purple-gradient controller logo with multi-colored action buttons alongside the bold green `NEXTLEVEL` typography.
* **Interactive Fee Calculator**: Dynamic pricing engine that updates itemized estimates in real time (in South African Rand - ZAR).
* **Flexible Session Configuration**:
  * **Experience Types**: Casual Gaming, Tournament Prep, or Corporate Battle.
  * **Participant Squads**: Solo (1 Gamer), Standard Squad (2-10 Gamers), or Full Arena Bay (10+ Gamers).
  * **Duration Options**: 2-Hour Passes, 4-Hour Passes, or All Day Passes.
  * **Add-ons & Extras**: 1-on-1 Pro Coaching, Burger & Snack Catering, and HD Live Stream Cast Setup.
* **Instant Calculation Breakdown**: Itemized subtotal, Johannesburg Municipal VAT (15%), and total estimated fees.
* **Tab Navigation**: Seamless switching between *Home*, *About Us*, *Overview*, *Individual Passes*, and *Calculate Fees*.
* **Interactive Modal System**: Session reservation and member registration dialogues.
* **Responsive Layout**: Designed with Tailwind CSS for high usability across desktop, tablet, and mobile views.

---

## 🛠️ Built With

* **HTML5**: Semantic document layout.
* **Tailwind CSS**: Utility-first styling via CDN with custom color extensions (`#1E1B4B`, `#22C55E`, `#0EA5E9`).
* **JavaScript (Vanilla ES6+)**: Native state management, pricing formulas, UI tab routing, and DOM manipulation.
* **Google Fonts**: [Inter](https://fonts.google.com/specimen/Inter) font family.

---

## 📂 Project File Structure

Since the application uses a single-file Architecture for rapid deployment, all HTML, styling, and JavaScript logic are embedded within `index.html`:

```
nextlevel-arena/
│
├── index.html     # Complete Web Application (HTML, Tailwind Config, Inline SVG Logo, JS State)
└── README.md      # Project documentation
```

---

## ⚙️ Pricing Logic & Formula

The fee calculator estimates pricing based on the following matrix:

$$\text{Subtotal} = \left( \text{Base Price} \times \text{Squad Multiplier} \times \text{Duration Multiplier} \right) + \sum \text{Selected Extras}$$

$$\text{VAT (15\%)} = \text{Subtotal} \times 0.15$$

$$\text{Grand Total} = \text{Subtotal} + \text{VAT}$$

### Base Pricing Matrix (ZAR):
1. **Experience Base Rates**:
   * Casual Gaming: `R600`
   * Tournament Prep: `R1,200`
   * Corporate Battle: `R2,500`
2. **Squad Multipliers**:
   * Solo Gamer: `0.6x`
   * 2-10 Squad: `1.0x`
   * 10+ Grand Squad: `2.2x`
3. **Duration Multipliers**:
   * 2 Hours: `0.6x`
   * 4 Hours: `1.0x`
   * All Day Pass: `1.8x`
4. **Extras**:
   * Pro Coaching Assessment: `+R285`
   * Catering Pack: `+R1,000`
   * Live Stream Setup: `+R1,026`

---

## 💻 Getting Started / Local Setup

No build step or Node.js environment is required.

1. Clone or download the repository.
2. Open `index.html` directly in any modern web browser (Chrome, Firefox, Safari, Edge).
3. Alternatively, serve it via Live Server in VS Code.

---

## 🏢 Facility & Venue Context

* **Location**: 12 Oxford Road, Rosebank, Johannesburg, 2196, South Africa
* **Operating Hours**: Monday – Sunday: 09:00 – 00:00 SAST
* **Hardware Specs**: RTX 4080 GPU Rigs, 240Hz High Refresh Displays, Mechanical Keyboards, Fiber Redundancy, VIP Squad Rooms.

---

## 📜 License

Distributed under the MIT License. Free for commercial and non-commercial use.