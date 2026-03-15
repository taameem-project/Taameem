
const accountButtons = document.querySelectorAll(".account-switch button")

accountButtons.forEach(btn => {

btn.addEventListener("click",()=>{

accountButtons.forEach(b=>b.classList.remove("active"))

btn.classList.add("active")

})

})


const eye = document.querySelector(".eye")
const password = document.querySelector(".password-field input")

eye.addEventListener("click",()=>{

if(password.type === "password"){

password.type="text"

}else{

password.type="password"

}

})
