// search filter

const searchInput = document.querySelector(".filter-bar input")

searchInput.addEventListener("keyup", function(){

let value = this.value.toLowerCase()
let rows = document.querySelectorAll("tbody tr")

rows.forEach(row => {

let text = row.innerText.toLowerCase()

row.style.display = text.includes(value) ? "" : "none"

})

})