let navtoggle=document.querySelector(".nav-toggle");
let sidebar=document.querySelector(".sidebar");
let cross=document.querySelector("#cross")
navtoggle.addEventListener("click",function(){
sidebar.classList.toggle("showsidebar")
})
cross.addEventListener("click",function(){
    sidebar.classList.toggle("showsidebar") 
})


