function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    setTimeout(function() {
        modal.classList.add("show");
    }, 10);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";
    }, 300);
}

function closeAllModals() {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        modals[i].classList.remove("show");
        setTimeout(function() {
            modals[i].style.display = "none";
        }, 300);
    }
}

window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            closeAllModals();
        }
    }
}