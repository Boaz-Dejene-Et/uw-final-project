let footerForm = document.querySelector('#footer_form')
let footerEmail = document.querySelector('.footer_input')
// function footerListener() {
    footerEmail.addEventListener('input', () => {
        if(footerEmail.value.length === 0) {
            // email.setCustomValidity("")
            footerEmail.classList.remove('is-invalid_footer_input')
        } else if(!emailReg.test(footerEmail.value)) {
            footerEmail.setCustomValidity(`Please enter a valid email address`);
            footerEmail.reportValidity();
            footerEmail.classList.add('is-invalid_footer_input')
        } else {
            footerEmail.classList.remove('is-invalid_footer_input')
            footerEmail.setCustomValidity("")
        }
    })
// }

footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(footerEmail.value.length === 0) {
        alert('Field can not be empty')
    } else {
        alert('Subscribed successfully')
    }
    e.target.reset()
});