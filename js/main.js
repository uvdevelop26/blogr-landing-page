
const navbar = document.querySelector('#navbar');
const btnToggleMenu = navbar.querySelector('#openMenu');
const navbarContent = navbar.querySelector('#navbarContent');
const btnDisplaySubmenu = navbar.querySelectorAll('.navbar__toggle__button');

const hamburguerIcon = './images/icon-hamburger.svg';
const closeIcon = './images/icon-close.svg';
const arrowUp = './images/icon-arrow-dark.svg';
const arrowDown = './images/icon-arrow-light.svg';

btnToggleMenu.addEventListener('click', (e) => {
    const img = btnToggleMenu.firstElementChild;

    if (navbarContent.classList.contains('hidden')) {
        navbarContent.classList.remove('hidden');
        navbarContent.classList.add('visible');
        img.src = closeIcon;
    } else if (navbarContent.classList.contains('visible')) {
        navbarContent.classList.remove('visible');
        navbarContent.classList.add('hidden');
        img.src = hamburguerIcon;
    }

});

btnDisplaySubmenu.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const img = btn.firstElementChild;

        const submenu = btn.nextElementSibling;
        if (submenu.classList.contains('max-h-0')) {
            img.src = arrowDown;
            submenu.classList.remove('max-h-0');
            submenu.classList.add('max-h-full');


        } else if (submenu.classList.contains('max-h-full')) {
            img.src = arrowUp;
            submenu.classList.remove('max-h-full');
            submenu.classList.add('max-h-0');
        }
    });
});
