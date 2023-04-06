const iconBurguerMenu  = document.querySelector('.icon-burguer-menu');
const burguerMenuMobile  = document.querySelector('.burguer-menu-mobile');
const iconCarritoMenu = document.querySelector('.navbar-shopping-cart');
const asideCarritoMenu = document.querySelector('.product-detail');
const navMenuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navMenuEmail.addEventListener('click', toggleDesktopMenu);
iconBurguerMenu.addEventListener('click', toggleBurguerMenu);
iconCarritoMenu.addEventListener ('click', toggleAsideMenu);


function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');

    const isBurgerMenuClosed = burguerMenuMobile.classList.contains('inactive')
    const isAsideClosed = asideCarritoMenu.classList.contains('inactive');

    if (!isBurgerMenuClosed || !isAsideClosed) {
        burguerMenuMobile.classList.add('inactive');
        asideCarritoMenu.classList.add('inactive');
    }
}

function toggleBurguerMenu () {
    burguerMenuMobile.classList.toggle('inactive');

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideClosed = asideCarritoMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed || !isAsideClosed) {
        desktopMenu.classList.add('inactive');
        asideCarritoMenu.classList.add('inactive');
    }
}

function toggleAsideMenu () {
    asideCarritoMenu.classList.toggle('inactive');

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isBurgerMenuClosed = burguerMenuMobile.classList.contains('inactive')

    if (!isDesktopMenuClosed || !isBurgerMenuClosed) {
        desktopMenu.classList.add('inactive');
        burguerMenuMobile.classList.add('inactive');
    }
}