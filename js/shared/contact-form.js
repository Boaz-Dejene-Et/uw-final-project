// contact-us
let contactForm = document.querySelector('.contact-us')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.fullName.value)
    console.log(e.target.email.value)
    console.log(e.target.phone.value)
    // if(e.target.beds.value === "tent" || e.target.beds.value === "singleRoom" || e.target.beds.value === "coupleRoom") {
    //     e.target.beds.setCustomValidity("")
    // } else {
    //     e.target.beds.setCustomValidity("Please Provide a Valid Room type")
    //     e.target.beds.reportValidity();
    // }
    // if(e.target.guest.value.length === 0) {
    //     e.target.guest.setCustomValidity("Please specify quest number")
    //     e.target.guest.reportValidity();
    // } else {
    //     e.target.guest.setCustomValidity("")
    // }
    // e.target.email.setCustomValidity("")
    // footerListener(e.target.email)
});