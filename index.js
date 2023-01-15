$("document").ready(function(){
const btn = document.getElementById('menu-button')
const nav = document.querySelector('.nav-bar-container')


btn.addEventListener('click', () => {
    nav.classList.toggle('active')
})

function hideFunction(){
    nav.classList.toggle('active')
} 

$(".nav-links").click(hideFunction)

})

