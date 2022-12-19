let contactForm = document.querySelector('#contact-us')
let fullName = document.querySelector('#fullName')
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')
let message = document.querySelector('#message')
let fullNameIsValid
let emailIsValid
let phoneIsValid
let messageIsValid

fullName.addEventListener('input', () => {
    fullName.setCustomValidity("")
    fullNameIsValid = fullName.value.length >= 3
    if(fullName.value.length === 0) {
        fullName.classList.remove('is-invalid')
    } else if(!fullNameIsValid) {
        fullName.setCustomValidity(`Please use 3 or more characters!. Number of characters is ${fullName.value.length}`);
        fullName.reportValidity();
        fullName.classList.add('is-invalid')
    } else {
        fullName.classList.remove('is-invalid')
    }
})

email.addEventListener("input", () => {
    email.setCustomValidity("")
    emailIsValid = email.value.length === 0 || emailReg.test(email.value)
    if(!emailIsValid) {
        email.setCustomValidity('Please enter a valid email address');
        email.reportValidity();
        email.classList.add('is-invalid')
    } else {
        email.classList.remove('is-invalid')
    }
})

phone.addEventListener('input', () => {
    phone.setCustomValidity("")
    phoneIsValid = phone.value.length >= 10
    if(phone.value.length === 0) {
        phone.classList.remove('is-invalid')
    } else if(!phoneIsValid) {
        phone.setCustomValidity(`Please use 10 digits!. Number of digits is ${phone.value.length}`);
        phone.reportValidity();
        phone.classList.add('is-invalid')
    } else {
        phone.classList.remove('is-invalid')
    }
})

message.addEventListener('input', () => {
    message.setCustomValidity("")
    messageIsValid = message.value.length >= 10
    if(message.value.length === 0) {
        message.classList.remove('is-invalid')
    } else if(!messageIsValid) {
        message.setCustomValidity(`Please use 10 or more characters!. Number of characters is ${message.value.length}`);
        message.reportValidity();
        message.classList.add('is-invalid')
    } else {
        message.classList.remove('is-invalid')
    }
})

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!fullNameIsValid || !emailIsValid || !phoneIsValid || !messageIsValid) {
        alert('Bad input')
        console.log(fullName.value, email.value, phone.value, message.value)
    } else {
        alert('Form successfully submitted!')
        e.target.reset()
    }
});