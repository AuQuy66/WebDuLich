const header=document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("stick",window.scrollY>60)
});