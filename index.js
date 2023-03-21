let openIcon = document.querySelector('.open');
let closeIcon = document.querySelector('.close');
let body = document.querySelector('body');
let mainNavigation = document.querySelector('.main-navigation')

openIcon.addEventListener('click',()=>{
    mainNavigation.classList.add('navigation');
    body.style.overflow = 'hidden';
})

closeIcon.addEventListener('click',()=>{
    mainNavigation.classList.remove('navigation');
    body.style.overflow = 'visible';

})
