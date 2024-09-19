const modal = document.getElementById("modal")
const buttonModal = document.getElementById("btn-modal")

function modalOn() {
    modal.style.display = "flex"
}
// function modalOff() {
//     modal.style.display = "none"
// }
// function isModalOn() {
//     return modal.style.display === "flex"
// }

buttonModal.addEventListener("click", e => modalOn())
