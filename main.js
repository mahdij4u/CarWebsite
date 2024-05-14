// Toggle search box
let search = document.querySelector('.search-box');
let searchIcon = document.querySelector('#search-icon');

searchIcon.onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

// Toggle menu
let navbar = document.querySelector('.navbar');
let menuIcon = document.querySelector('#menu-icon');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

// Hide menu and search box on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

// Header shadow effect on scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
