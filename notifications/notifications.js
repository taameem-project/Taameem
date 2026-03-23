// =====================
// ELEMENTS
// =====================
const items = document.querySelectorAll(".item");
const searchInput = document.querySelector(".search");
const tabs = document.querySelectorAll(".tab");
const countText = document.getElementById("count");
const markAllBtn = document.querySelector(".btn");

// =====================
// COUNT UNREAD
// =====================
function updateCount() {
let unread = document.querySelectorAll(".item.unread").length;
countText.innerText = unread;
}
updateCount();

// =====================
// SEARCH
// =====================
searchInput.addEventListener("keyup", function () {
let value = this.value.toLowerCase();

items.forEach(item => {
let text = item.innerText.toLowerCase();
item.style.display = text.includes(value) ? "flex" : "none";
});
});

// =====================
// TABS FILTER
// =====================
tabs.forEach(tab => {
tab.addEventListener("click", () => {

// active style
tabs.forEach(t => t.classList.remove("active"));
tab.classList.add("active");

let text = tab.innerText.toLowerCase();

items.forEach(item => {

if (text.includes("all")) {
item.style.display = "flex";
}

else if (text.includes("unread")) {
item.style.display = item.classList.contains("unread") ? "flex" : "none";
}

else {
item.style.display = "flex";
}

});

});
});

// =====================
// MARK ALL AS READ
// =====================
markAllBtn.addEventListener("click", () => {
items.forEach(item => {
item.classList.remove("unread");
});
updateCount();
});

// =====================
// CLICK ITEM = MARK READ
// =====================
items.forEach(item => {
item.addEventListener("click", () => {
item.classList.remove("unread");
updateCount();
});
});

// =====================
// LOAD MORE (DEMO)
// =====================
document.querySelector(".load").addEventListener("click", () => {

const list = document.querySelector(".list");

let newItem = document.createElement("div");
newItem.className = "item unread";

newItem.innerHTML = `
<div class="icon">🔔</div>
<div>
<b>New Notification Added</b>
<div class="time">Just now</div>
</div>
`;

list.appendChild(newItem);

// إعادة تفعيل الأحداث
location.reload();

});