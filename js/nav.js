const menu = document.querySelector(".nav-links")
const hamburger = document.querySelector(".nav-links .fa-bars")

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("show")
})