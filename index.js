$("document").ready(function(){
const btn = document.getElementById('menu-button')
const nav = document.querySelector('.nav-bar-container')
const form = document.getElementById('form-container')
const errorMessages = document.getElementById('error-log')
const emailField = document.getElementById('email-input') 
const senderName = document.getElementById('name')
const userMessage = document.getElementById('message')


btn.addEventListener('click', () => {
    nav.classList.toggle('active')
})

function hideFunction(){
    nav.classList.toggle('active')
} 

$(".nav-links").click(hideFunction)

form.addEventListener('submit', (e) => {
    let messages = []

    if (emailField.value === '' || emailField.value == null){
        messages.push("Please provide your valid Email address")
    }

    if (senderName.value === '' || senderName.value == null){
        messages.push("Please Enter your Name")
    }

    if(userMessage.value === '' || userMessage.value == null){
        messages.push("Please Type your message before submission")
    }

    if(messages.length > 0){
        e.preventDefault()
        errorMessages.innerText = messages.join('  |  ')
    }else{
        $("#email-button").css('background', '#008000')
    }
    



    
})

})


