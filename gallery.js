//https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96f4908b-f839-46eb-8a75-80e90ed74142/d2nf0vy-f44a68ba-7255-449e-bb47-61b19c8a94c4.jpg/v1/fill/w_900,h_600,q_75,strp/yellow_eyes_by_mark1624_d2nf0vy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvOTZmNDkwOGItZjgzOS00NmViLThhNzUtODBlOTBlZDc0MTQyXC9kMm5mMHZ5LWY0NGE2OGJhLTcyNTUtNDQ5ZS1iYjQ3LTYxYjE5YzhhOTRjNC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.apQkfDWLqTOctcXMrPGsxt9OAl6OA9OYVG_k63GyLGM
//https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96f4908b-f839-46eb-8a75-80e90ed74142/d1jz7mk-44d26738-5be2-4889-ad1e-74fe2e8646c3.jpg/v1/fill/w_900,h_600,q_75,strp/the_fisherman_by_mark1624_d1jz7mk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvOTZmNDkwOGItZjgzOS00NmViLThhNzUtODBlOTBlZDc0MTQyXC9kMWp6N21rLTQ0ZDI2NzM4LTViZTItNDg4OS1hZDFlLTc0ZmUyZTg2NDZjMy5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9FvyA1nGcTyirk-jgJ1vy3NIdHgQSEwtbmeI01FClbE
//https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96f4908b-f839-46eb-8a75-80e90ed74142/d1jz661-e267d60d-c4e3-46a8-8bf8-e6d0fc41be23.jpg/v1/fill/w_900,h_600,q_75,strp/composed_by_mark1624_d1jz661-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvOTZmNDkwOGItZjgzOS00NmViLThhNzUtODBlOTBlZDc0MTQyXC9kMWp6NjYxLWUyNjdkNjBkLWM0ZTMtNDZhOC04YmY4LWU2ZDBmYzQxYmUyMy5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FLUnC_XQNo1HZNYdQZusKxZa5Zc4R8qPMvvo3fkViz4


const images = document.querySelector('.images');
const buttons = document.querySelectorAll('button');
const numberOfImages = document.querySelectorAll('.images img').length;
const backButton = document.querySelector('#back');
const nextButton = document.querySelector('#next');

const fadeIn = document.querySelector('.onLoad');
const fadeUp = document.querySelector('.loadUp');

const mediaQuery = window.matchMedia('(max-width: 760px)');
const mobileNav = document.querySelector('.mobileNav');
const menu = document.querySelector('.menu');
const main = document.querySelector('main');
const navOpen = document.querySelector('.menuOut');


let imageIndex = 1;
let translateX = 0;

//animate elements into screen on load
window.addEventListener('load', (event) => {
    fadeIn.classList.add('fadeIn');
    fadeUp.classList.add('fadeIn');
    fadeUp.style.transform = 'translateY(0px)';
});

//Moving the images when back and next buttons are clicked
buttons.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.id === 'back') {
            if (imageIndex !== 1) {
                imageIndex--;
                translateX += 900;
            }
        } else {
            if (imageIndex !== numberOfImages) {
                imageIndex++;
                translateX -= 900;
            }
        }
        images.style.transform = `translateX(${translateX}px)`;

        //Hide the back & next button 
        if (imageIndex === 1) {
            backButton.classList.add('hidden');
        } else if
            (imageIndex === numberOfImages) {
            nextButton.classList.add('hidden');
        } else {
            backButton.classList.remove('hidden');
            nextButton.classList.remove('hidden');
        };
    });
});

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