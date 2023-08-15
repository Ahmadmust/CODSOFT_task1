
var open_nav = document.getElementById("open");
var close_nav = document.getElementById("close");
var mobile_nav = document.querySelector(".mobile-nav");

open_nav.addEventListener("click",()=>{
    close_nav.classList.remove("active")
    open_nav.classList.add("active")
    mobile_nav.classList.remove("active")
});
close_nav.addEventListener("click",()=>{
    close_nav.classList.add("active")
    open_nav.classList.remove("active")
    mobile_nav.classList.add("active")
});