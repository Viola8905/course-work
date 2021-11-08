"use strict"

//for page scrolling
window.addEventListener("scroll",function(){
    let header = document.querySelector(".header");
    header.classList.toggle("sticky",window.scrollY > 0);
})





//for menu burger
function toggleMenu(){
    const button = document.getElementById('btn-menu');
    const menu = document.getElementById('list-menu');
    button.classList.toggle('active');
    menu.classList.toggle('active');
}