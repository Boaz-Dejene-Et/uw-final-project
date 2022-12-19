let emailReg = /\w+@\w+\.\w+/;
let modal = document.querySelector('#modal')
let seenModal = localStorage.getItem("seenModal");

const closeModal = () => {
    modal.classList.add('close_modal')
}

const showModal = () => {
    if(!seenModal) {
        modal.classList.add('modal_container')
        localStorage.setItem("seenModal", true)
    }
}

showModal()

document.addEventListener("DOMContentLoaded", function() {
})