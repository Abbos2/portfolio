const href__p = document.querySelector('.href__p')
const About__h3 = document.querySelector('.About__h3')
const About__h1 = document.querySelector('.About__h1')
const About__p = document.querySelector('.About__p')
const About__p2 = document.querySelector('.About__p2')
const darkmode = document.querySelector('.darkmode')
const header =document.querySelector('.header')
const About__li = [...document.querySelectorAll('.About__li')]

About__li.forEach(el => {
    
});

darkmode.addEventListener('click',function () {
    href__p.classList.toggle('active')
    About__h3.classList.toggle('active')
    About__h1.classList.toggle('active')
    About__p.classList.toggle('active')
    About__p2.classList.toggle('active')
    darkmode.classList.toggle('dark__mode')
    header.classList.toggle('active2')
    About__li.classList.toggle('active')
})