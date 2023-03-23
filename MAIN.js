const NavMenuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');

NavMenuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    DesktopMenu.classList.toggle('inactive');
}
