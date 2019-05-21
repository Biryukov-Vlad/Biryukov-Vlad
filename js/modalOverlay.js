var modalOverlay = document.getElementById('modal-overlay');
var cross = document.getElementById('modal-overlay__cross');
var btnOffersModal = document.getElementById('btnOffersModal');

btnOffersModal.onclick = function () {
    modalOverlay.style.display = 'flex';
}
cross.onclick = function () {
    modalOverlay.style.display = 'none'
}
window.onclick = function (event) {
    if (event.target == modalOverlay) {
        modalOverlay.style.display = 'none'
    }
}
