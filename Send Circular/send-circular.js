const uploadBox = document.getElementById("uploadBox")
const fileInput = document.getElementById("fileInput")
const fileList = document.getElementById("fileList")

uploadBox.addEventListener("click",()=>{

fileInput.click()

})

fileInput.addEventListener("change",(e)=>{

const file = e.target.files[0]

if(file){

fileList.innerHTML =
"<p>Uploaded: "+file.name+"</p>"

}

})