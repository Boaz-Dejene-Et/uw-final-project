let quickForm = document.querySelector('.quick_booking')
function quickBooking(beds, date, guestsNo) {
    email.addEventListener('input', () => {
        if(!emailReg.test(email.value)) {
            email.setCustomValidity(`Please enter a valid email`);
            email.reportValidity();
        }
    })
}

quickForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.beds.setCustomValidity("")
    e.target.guest.setCustomValidity("")
    let bedValid = false
    let dateValid = false
    let guestValid = false
    console.log(e.target.beds.value)
    console.log(e.target.date.value)
    console.log(e.target.guest.value)
    if(e.target.beds.value === "tent" || e.target.beds.value === "singleRoom" || e.target.beds.value === "coupleRoom") {
        e.target.beds.setCustomValidity("")
    } else {
        e.target.beds.setCustomValidity("Please Provide a Valid Room type")
        e.target.beds.reportValidity();
    }
    if(e.target.guest.value.length === 0) {
        e.target.guest.setCustomValidity("Please specify quest number")
        e.target.guest.reportValidity();
    } else {
        e.target.guest.setCustomValidity("")
    }
    // e.target.email.setCustomValidity("")
    // footerListener(e.target.email)
});