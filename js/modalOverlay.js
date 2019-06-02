var modal = document.getElementsByClassName('modal-overlay')[0];
var cross = document.getElementById('modal-overlay__cross');
var btnOffersModal = document.getElementById('btnOffersModal');

btnOffersModal.onclick = function () {
    modal.style.display = 'flex';
}
cross.onclick = function () {
    modal.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
 
