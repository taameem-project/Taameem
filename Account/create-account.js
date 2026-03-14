function selectCard(card){

document.querySelectorAll(".entity-card")
.forEach(el => el.classList.remove("active"))

card.classList.add("active")

}
