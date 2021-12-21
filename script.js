

const header = document.querySelector('header');
const footer = document.querySelector('footer');
const topRow = document.querySelector('#top_row');
const bottomRow = document.querySelector('#bottom_row');
const gallery = document.querySelectorAll('.container');
const delay = document.querySelectorAll('.delayed');

const mediaQuery = window.matchMedia('(max-width: 760px)');
const mobileNav = document.querySelector('.mobileNav');
const menu = document.querySelector('.menu');
const main = document.querySelector('main');
const navOpen = document.querySelector('.menuOut');

//animate elements onto screen on load
window.addEventListener('load', e => {
    topRow.style.transform = 'translateX(0px)';
    bottomRow.style.transform = 'translateX(0px)';
    header.classList.add('fadeIn');
    footer.classList.add('fadeIn');
})

for (let i = 0; i < delay.length; i++) {
    const anchor = delay[i];

    anchor.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.parentElement.href;
        topRow.style.transform = 'translateX(2000px)';
        bottomRow.style.transform = 'translateX(-2000px)';

        console.log(e.target.parentElement.href);

        setInterval(() => {
            window.location.href = target;
        }, 500);
    });
};

//Allow pop-out menu with icon for smaller/mobile displays
if (mediaQuery.matches) {
    menu.classList.remove('hidden');
}

menu.addEventListener('click', function () {
    mobileNav.classList.toggle('navOpen');
    main.classList.toggle('blur');
    if (mobileNav.classList.contains('navOpen')) {
        menu.style.transform = 'rotate(270deg)';
    } else {
        menu.style.transform = 'rotate(0deg)';
    }
});