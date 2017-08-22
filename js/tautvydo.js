lemputes_busena = false;

function toggleLempute() {
    if (lemputes_busena) {
        isjungti();
    } else {
        ijungti();
    }
    lemputes_busena = !lemputes_busena;
}

function ijungti(){
    document.getElementById('lempute').src='../img/pic_bulbon.gif'
}
function isjungti(){
    document.getElementById('lempute').src='../img/pic_bulboff.gif'
}