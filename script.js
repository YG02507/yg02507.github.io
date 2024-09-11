const modal = document.getElementById("modal")

function modalOn() {
    modal.style.display="flex"
}
function isModalOn() {
    return modal.style.display === "flex"
}
function modalOff() {
    modal.style.display = "none"
}
const btnModal = document.getElementById("btn-modal")

btnModal.addEventListener("click", e => modalOn())
