let quickForm = document.querySelector('.quick_booking')

quickForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.beds.setCustomValidity("")
    e.target.guest.setCustomValidity("")
    let bedValid = false
    let dateValid = false
    let guestValid = false
    
    // console.log(e.target.beds.value)
    // console.log(e.target.date.value)
    // console.log(e.target.guest.value)

    if(e.target.beds.value === "tent" || e.target.beds.value === "singleRoom" || e.target.beds.value === "coupleRoom") {
        e.target.beds.setCustomValidity("")
        bedValid = true
    } else {
        e.target.beds.setCustomValidity("Please Provide a Valid Room type")
        e.target.beds.reportValidity();
        bedValid = false
    }
    if(e.target.guest.value.length === 0) {
        e.target.guest.setCustomValidity("Please specify quest number")
        e.target.guest.reportValidity();
        guestValid = false
    } else {
        e.target.guest.setCustomValidity("")
        guestValid = true
    }
    if(e.target.beds.value.length > 0) {
        dateValid = true
    } else {
        dateValid = false
    }
    if(bedValid && guestValid && dateValid) {
        alert('booked successfully')
        e.target.reset()
    }
});