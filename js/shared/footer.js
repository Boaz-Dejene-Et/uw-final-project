let footerForm = document.querySelector('#footer_form')
function footerListener(email) {
    email.addEventListener('input', () => {
        if(!emailReg.test(email.value)) {
            email.setCustomValidity(`Please enter a valid email`);
            email.reportValidity();
        }
    })
}

footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.email.setCustomValidity("")
    footerListener(e.target.email)
});