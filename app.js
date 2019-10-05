const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");
});

function homePage(){
    window.location.href = 'https://tuddle.github.io/tuddle/';
}