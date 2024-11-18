const menuBtn = document.querySelector('.menu-desplegable');
const navBar = document.querySelector('.header-navbar');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navBar.classList.toggle('active');
});

document.querySelectorAll('.header-navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navBar.classList.remove('active');
    });
});