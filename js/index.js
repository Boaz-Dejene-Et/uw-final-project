document.addEventListener("DOMContentLoaded", function() {
    let footerInput = document.querySelector('.footer_input')
    let footerForm = document.querySelector('#footer_form')

    function footerListener(email) {
        email.addEventListener('input', () => {
            if(!emailReg.test(email.value)) {
                email.setCustomValidity(`Email must be valid`);
                email.reportValidity();
            }
        })
    }

    footerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.email.setCustomValidity("")
        footerListener(e.target.email)
    });
})