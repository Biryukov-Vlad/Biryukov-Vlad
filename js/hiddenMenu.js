var hiddenMenu = document.getElementById('hidden-menu');
var cross = document.getElementById('cross');
var btnBurger = document.getElementById('btn-burger');
var check = document.getElementsByClassName('main');


btnBurger.onclick = function () {
    hiddenMenu.style.display = 'block';
}

cross.onclick = function () {
    hiddenMenu.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == hiddenMenu) {
        hiddenMenu.style.display = "none";
    }
}