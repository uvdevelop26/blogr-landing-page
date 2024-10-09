
const navbar = document.querySelector('#navbar');
const btnToggleMenu = navbar.querySelector('#openMenu');
const navbarContent = navbar.querySelector('#navbarContent');
const btnDisplaySubmenu = navbar.querySelectorAll('.navbar__toggle__button');
const desktopSubmenus = navbar.querySelectorAll('.navbar__content__list__inner');


const icon = {
    hamburguer: './images/icon-hamburger.svg',
    close: './images/icon-close.svg',
    arrowUp: './images/icon-arrow-dark.svg',
    arrowDown: './images/icon-arrow-light.svg'
}


/* toggle mobile menu */
btnToggleMenu.addEventListener('click', (e) => {
    const img = btnToggleMenu.firstElementChild;

    const isHidden = navbarContent.classList.contains('hidden');

    if (isHidden) {
        navbarContent.classList.remove('hidden');
        navbarContent.classList.add('visible');
        img.src = icon.close;
    } else {
        navbarContent.classList.remove('visible');
        navbarContent.classList.add('hidden');
        img.src = icon.hamburguer;
    }

});

/* toggle submenu mobile and desktop */
const toggleSubmenu = (btn, submenu) => {

    const isMobile = window.matchMedia('(max-width: 1024px)').matches;
    const isHidden = submenu.classList.contains('max-h-0') || submenu.classList.contains('hidden');
    const img = btn.firstElementChild;
    if (isHidden && isMobile) {
        img.src = icon.arrowDown;
        submenu.classList.remove('max-h-0');
        submenu.classList.add('max-h-full');
    } else if (!isHidden && isMobile) {
        img.src = icon.arrowUp;
        submenu.classList.remove('max-h-full');
        submenu.classList.add('max-h-0');
    } else if (isHidden && !isMobile) {
        img.src = icon.arrowDown;
        submenu.classList.remove('hidden');
        submenu.classList.add('visible');
    } else if (!isHidden && !isMobile) {
        img.src = icon.arrowUp;
        submenu.classList.remove('visible');
        submenu.classList.add('hidden');
    }

}

btnDisplaySubmenu.forEach((btn) => {
    btn.addEventListener('click', () => {
        const submenu = btn.nextElementSibling;
        toggleSubmenu(btn, submenu);
    });
});


/* handle media queries */
document.addEventListener('DOMContentLoaded', () => {
    const navbarContent = document.querySelector('#navbarContent');
    const navbarSubmenu = navbarContent.querySelectorAll('.navbar__content__list__inner')
    const mql = window.matchMedia("(min-width: 1024px)");


    const handleNavbarVisibility = (mql) => {
        if (mql.matches) {
            navbarContent.classList.remove('hidden');

            navbarSubmenu.forEach((submenu) => {
                submenu.classList.remove('max-h-0');
                submenu.classList.add('hidden');
            });
        } else {
            navbarContent.classList.add('hidden');

            navbarSubmenu.forEach((submenu) => {
                submenu.classList.add('max-h-0');
                submenu.classList.remove('hidden');
            });
        }
    };

    handleNavbarVisibility(mql);

    mql.addEventListener('change', (e) => handleNavbarVisibility(e));
});

