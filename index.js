$("document").ready(function(){
const btn = document.getElementById('menu-button')
const nav = document.querySelector('.nav-bar-container')
const form = document.getElementById('form-container')
const errorMessages = document.getElementById('error-log')
const emailField = document.getElementById('email-input') 
const senderName = document.getElementById('name')
const userMessage = document.getElementById('message')
const successMessage = document.getElementsByClassName('sent-message')[0]
const successContainer = document.getElementsByClassName('success')[0]
const okayBtn = document.getElementById('okay-btn')


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
        successMessage.innerHTML = "<p>Thank You. Your Message Has Been Successfully Submitted.</p>"; 
        successContainer.classList.add('active')
    }
    
    // {
    //     $("#email-button").css('background', '#008000')
    //     successMessage.innerHTML = `<p>Thank You. Your Message Has Been Successfully Submitted.</p>`;
    // }

    // if($("#email-button").css('background', '#008000')){
    //     //success container should now display
    //     successContainer.classList.add('active')
    // }

    // okayBtn.addEventListener('click', () => {
    //     successContainer.classList.remove('active')
    // })



    
})

})


window.addEventListener('load', () => {
    
    fetch(`https://formsubmit.co/api/get-apikey/isaacharrison2808@gmail.com`,{
        method: "GET"
    })
    .then(resp => resp.json())
    .then(
        data => console.log(data)
    )


    fetch(`https://formsubmit.co/api/get-submissions/67bc4b073de34cdef07d8783fc467049e932ac9ff07b3ce9fda0af768ddaac2e`,{
        method: "GET"
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
})

