var openOffer =  document.getElementById('openOffer'); //выбор предложений
var offerList__top = document.getElementById('offerList__top');

openOffer.onclick=function(){
    offerList__top.style.display='flex'
}

offerList__top.onclick=function(){
    offerList__top.style.display='none'
}
