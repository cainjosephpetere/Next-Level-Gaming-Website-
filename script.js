const state = {
  type: "prep",
  squad: "small",
  duration: "4h"
};

const pricing = {
  types: {
    casual: { name: "Casual gaming", base: 600 },
    prep: { name: "Tournament prep", base: 1200 },
    corporate: { name: "Group & corporate", base: 2500 }
  },
  squads: {
    solo: { name: "Solo · 1 gamer", multiplier: 0.6 },
    small: { name: "Squad · 2–10 players", multiplier: 1 },
    arena: { name: "Full arena · 10+ players", multiplier: 2.2 }
  },
  durations: {
    "2h": { name: "2 hours", multiplier: 0.6 },
    "4h": { name: "4 hours", multiplier: 1 },
    day: { name: "All day", multiplier: 1.8 }
  },
  extras: {
    coaching: { name: "1-on-1 pro coaching", cost: 285 },
    catering: { name: "Catering pack", cost: 1000 },
    stream: { name: "Live stream setup", cost: 1026 }
  }
};

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const bookingDialog = document.querySelector(".booking-dialog");
const bookingForm = document.getElementById("booking-form");
const dialogFeedback = document.querySelector(".dialog-feedback");
const preferredDateInput = document.getElementById("booking-date");
let lastFocusedElement = null;
let currentEstimate = { subtotal: 0, vat: 0, total: 0, extras: [] };

const localToday = new Date();
localToday.setMinutes(localToday.getMinutes() - localToday.getTimezoneOffset());
preferredDateInput.min = localToday.toISOString().slice(0, 10);

function formatRand(amount) {
  return `R${amount.toLocaleString("en-ZA")}`;
}

function getEstimate() {
  const type = pricing.types[state.type];
  const squad = pricing.squads[state.squad];
  const duration = pricing.durations[state.duration];
  const base = Math.round(type.base * squad.multiplier * duration.multiplier);
  const extras = Object.entries(pricing.extras)
    .filter(([key]) => document.querySelector(`[data-extra="${key}"]`).checked)
    .map(([, item]) => item);
  const subtotal = base + extras.reduce((sum, item) => sum + item.cost, 0);
  const vat = Math.round(subtotal * 0.15);

  return { type, squad, duration, base, extras, subtotal, vat, total: subtotal + vat };
}

function appendEstimateLine(container, label, amount) {
  const row = document.createElement("div");
  row.className = "estimate-line";
  const name = document.createElement("span");
  const price = document.createElement("span");
  name.textContent = label;
  price.textContent = formatRand(amount);
  row.append(name, price);
  container.append(row);
}

function calculateTotal() {
  const estimate = getEstimate();
  const items = document.getElementById("estimate-items");
  items.replaceChildren();

  appendEstimateLine(items, `${estimate.type.name} · ${estimate.squad.name} · ${estimate.duration.name}`, estimate.base);
  estimate.extras.forEach(item => appendEstimateLine(items, item.name, item.cost));

  document.getElementById("txt-subtotal").textContent = formatRand(estimate.subtotal);
  document.getElementById("txt-vat").textContent = formatRand(estimate.vat);
  document.getElementById("txt-total").textContent = formatRand(estimate.total);
  document.getElementById("dialog-total").textContent = formatRand(estimate.total);
  currentEstimate = estimate;
}

function selectOption(category, value) {
  state[category] = value;
  document.querySelectorAll(`[data-category="${category}"]`).forEach(button => {
    const selected = button.dataset.value === value;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  calculateTotal();
}

function closeMobileMenu() {
  navigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}

function openBookingDialog() {
  lastFocusedElement = document.activeElement;
  dialogFeedback.hidden = true;
  dialogFeedback.replaceChildren();
  dialogFeedback.className = "dialog-feedback";
  document.getElementById("dialog-total").textContent = formatRand(currentEstimate.total);
  bookingDialog.showModal();
  document.body.classList.add("dialog-open");
}

function showDialogFeedback(message, state) {
  dialogFeedback.className = `dialog-feedback is-${state}`;
  dialogFeedback.textContent = message;
  dialogFeedback.hidden = false;
}

function closeBookingDialog() {
  bookingDialog.close();
  document.body.classList.remove("dialog-open");
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => selectOption(button.dataset.category, button.dataset.value));
});

document.querySelectorAll("[data-extra]").forEach(input => {
  input.addEventListener("change", calculateTotal);
});

document.querySelectorAll("[data-preset]").forEach(link => {
  link.addEventListener("click", () => selectOption("type", link.dataset.preset));
});

document.querySelectorAll("[data-open-booking]").forEach(button => {
  button.addEventListener("click", openBookingDialog);
});

document.querySelectorAll(".site-nav a").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
  navigation.classList.toggle("is-open", !expanded);
});

document.querySelector(".dialog-close").addEventListener("click", closeBookingDialog);
bookingDialog.addEventListener("click", event => {
  if (event.target === bookingDialog) closeBookingDialog();
});
bookingDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

bookingForm.addEventListener("submit", async event => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;

  const submitButton = bookingForm.querySelector('button[type="submit"]');
  const formData = new FormData(bookingForm);
  const extras = currentEstimate.extras.map(item => item.name).join(", ") || "None";
  formData.set("_subject", "Next Level Arena booking enquiry");
  formData.set("_replyto", String(formData.get("email")));
  formData.set("experience", currentEstimate.type.name);
  formData.set("group_size", currentEstimate.squad.name);
  formData.set("session_length", currentEstimate.duration.name);
  formData.set("extras", extras);
  formData.set("subtotal", formatRand(currentEstimate.subtotal));
  formData.set("vat", formatRand(currentEstimate.vat));
  formData.set("estimated_total", formatRand(currentEstimate.total));

  submitButton.disabled = true;
  bookingForm.setAttribute("aria-busy", "true");
  showDialogFeedback("Sending your enquiry…", "pending");

  try {
    const response = await fetch(bookingForm.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      console.error("Formspree rejected the booking enquiry.", response.status);
      showDialogFeedback("We couldn’t send your enquiry. Please try again in a moment.", "error");
      return;
    }

    showDialogFeedback("Your enquiry has been sent. This is not a confirmed booking; the arena team will reply to confirm availability.", "success");
    bookingForm.reset();
  } catch (error) {
    console.error("Unable to reach Formspree.", error);
    showDialogFeedback("We couldn’t reach the enquiry service. Check your connection and try again.", "error");
  } finally {
    submitButton.disabled = false;
    bookingForm.removeAttribute("aria-busy");
  }
});

const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".nav-link").forEach(link => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-30% 0px -60% 0px" });
  sections.forEach(section => sectionObserver.observe(section));
}

calculateTotal();
