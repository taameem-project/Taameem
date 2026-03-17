// ==========================
// SEARCH FUNCTION
// ==========================
const searchInput = document.getElementById("searchInput");
const rows = document.querySelectorAll("tbody tr");

searchInput.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();

  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(value) ? "" : "none";
  });
});

// ==========================
// FILTER BY STATUS
// ==========================
const statusFilter = document.getElementById("statusFilter");

statusFilter.addEventListener("change", function () {
  const value = this.value.toLowerCase();

  rows.forEach(row => {
    const status = row.querySelector(".status").innerText.toLowerCase();

    if (value === "all" || status.includes(value)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

// ==========================
// DATE FILTER
// ==========================
const dateFilter = document.getElementById("dateFilter");

dateFilter.addEventListener("change", function () {
  const selectedDate = this.value;

  rows.forEach(row => {
    const sentDate = row.querySelector(".sent-date").innerText;

    if (!selectedDate || sentDate.includes(selectedDate)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

// ==========================
// ACTION BUTTONS
// ==========================
document.querySelectorAll(".btn-view").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Opening circular details...");
  });
});

document.querySelectorAll(".btn-delete").forEach(btn => {
  btn.addEventListener("click", (e) => {
    if (confirm("Are you sure you want to delete this circular?")) {
      e.target.closest("tr").remove();
    }
  });
});

// ==========================
// NEW CIRCULAR BUTTON
// ==========================
const newBtn = document.getElementById("newCircular");

if (newBtn) {
  newBtn.addEventListener("click", () => {
    alert("Redirecting to Send Circular page...");
  });
}