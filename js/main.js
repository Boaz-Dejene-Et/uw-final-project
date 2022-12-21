let emailReg = /\w+@\w+\.\w+/;
let modal = document.querySelector('#modal')
let seenModal = localStorage.getItem("seenModal");
let tl = new TimelineLite();

const closeModal = () => {
    modal.classList.add('close_modal')
    modal.classList.remove('modal_container')
}

const showModal = () => {
    if(!seenModal) {
        modal.classList.add('modal_container')
        modal.classList.remove('close_modal')
        localStorage.setItem("seenModal", true)
        setTimeout(()=>{
            localStorage.removeItem("seenModal")
        }, 10000)
    }
}

showModal()

document.addEventListener("DOMContentLoaded", function() {
    ScrollTrigger.create({
        start: 0,
        end: "bottom",
        onUpdate: scrollTriggerOnUpdate,
    });
    
    window.history.scrollRestoration = "manual"
})