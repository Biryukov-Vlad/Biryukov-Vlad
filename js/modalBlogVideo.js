var play_LeadGen = document.getElementsByClassName('play-img_Lead-Gen')[0];
var modal_LeadGen = document.getElementsByClassName('modal-blog-Lead-Gen')[0];
var cross_LeadGen = document.getElementsByClassName('cross-Lead-Gen')[0];

var play_eComm = document.getElementsByClassName('play-img_eComm')[0];
var modal_eComm = document.getElementsByClassName('modal-blog-eComm')[0];
var cross_eComm = document.getElementsByClassName('cross-eComm')[0];

var play_SaaS = document.getElementsByClassName('play-img_SaaS')[0];
var modal_SaaS = document.getElementsByClassName('modal-blog-SaaS')[0];
var cross_SaaS = document.getElementsByClassName('cross-SaaS')[0];


 
//Lead Gen
play_LeadGen.onclick = function () {
    modal_LeadGen.style.display = 'flex';
}

cross_LeadGen.onclick = function () {
    modal_LeadGen.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == modal_LeadGen) {
        modal_LeadGen.style.display = 'none';
    }
}



//eComm

play_eComm.onclick = function () {
    modal_eComm.style.display = 'flex';
}

cross_eComm.onclick = function () {
    modal_eComm.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == modal_eComm) {
        modal_eComm.style.display = 'none';
    }
}

//Saas

play_SaaS.onclick = function () {
    modal_SaaS.style.display = 'flex';
}

cross_SaaS.onclick = function () {
    modal_SaaS.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == modal_SaaS) {
        modal_SaaS.style.display = 'none';
    }
}