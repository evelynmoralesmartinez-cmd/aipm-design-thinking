// Placeholder history for this prototype — not real check-in data.
const SEED_HISTORY = [
  { when: "Mon, 09:14", result: "No slot available" },
  { when: "Mon, 21:47", result: "No slot available" },
  { when: "Tue, 07:30", result: "No slot available" },
  { when: "Tue, 18:05", result: "No slot available" },
  { when: "Wed, 12:52", result: "Slot found — booked!" },
  { when: "Thu, 06:58", result: "No slot available" },
  { when: "Thu, 23:11", result: "No slot available" },
  { when: "Fri, 15:37", result: "No slot available" },
  { when: "Sat, 10:22", result: "No slot available" },
  { when: "Sun, 20:04", result: "No slot available" },
];

const homeView = document.getElementById("home-view");
const setupView = document.getElementById("setup-view");
const historyView = document.getElementById("history-view");

const reminderStatus = document.getElementById("reminder-status");
const setupForm = document.getElementById("setup-form");
const customFields = document.getElementById("custom-fields");
const historyList = document.getElementById("history-list");
const cadenceError = document.getElementById("cadence-error");

function showView(view) {
  [homeView, setupView, historyView].forEach((section) => {
    section.hidden = section !== view;
  });
  view.querySelector("h2").focus?.();
}

document.getElementById("go-setup").addEventListener("click", () => {
  showView(setupView);
});

document.getElementById("go-history").addEventListener("click", () => {
  showView(historyView);
});

document.getElementById("setup-back").addEventListener("click", () => {
  showView(homeView);
});

document.getElementById("history-back").addEventListener("click", () => {
  showView(homeView);
});

document.querySelectorAll('input[name="cadence"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    customFields.hidden = radio.value !== "custom" || !radio.checked;
    cadenceError.hidden = true;
  });
});

setupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const checkedCadence = setupForm.querySelector('input[name="cadence"]:checked');

  if (!checkedCadence) {
    cadenceError.hidden = false;
    return;
  }
  cadenceError.hidden = true;

  const selected = checkedCadence.value;

  let label;
  if (selected === "every-2h") {
    label = "every 2 hours";
  } else if (selected === "every-6h") {
    label = "every 6 hours";
  } else if (selected === "daily") {
    label = "once a day";
  } else {
    const amount = document.getElementById("custom-number").value || "1";
    const unit = document.getElementById("custom-unit").value;
    label = `every ${amount} ${unit}`;
  }

  reminderStatus.textContent = `✓ Reminder set: checking ${label}.`;
  reminderStatus.classList.add("confirmed");
  showView(homeView);
});

function renderHistory() {
  historyList.innerHTML = "";
  SEED_HISTORY.forEach((entry) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${entry.when}</td><td>${entry.result}</td>`;
    historyList.appendChild(row);
  });
}

renderHistory();
