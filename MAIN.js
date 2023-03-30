const NavMenuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');

NavMenuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    DesktopMenu.classList.toggle('inactive');
}

const IconBurguerMenu  = document.querySelector('.icon-burguer-menu');
const BurguerMenuMobile  = document.querySelector('.burguer-menu-mobile');

IconBurguerMenu.addEventListener('click', toggleBurguerMenu);

function toggleBurguerMenu () {
    BurguerMenuMobile.classList.toggle('inactive');
}