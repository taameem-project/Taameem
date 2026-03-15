
const accountButtons = document.querySelectorAll(".account-switch button")

accountButtons.forEach(btn => {

btn.addEventListener("click",()=>{

accountButtons.forEach(b=>b.classList.remove("active"))

btn.classList.add("active")

})

})



const tabs = document.querySelectorAll(".tab")

tabs.forEach(tab=>{

tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"))

tab.classList.add("active")

})

})