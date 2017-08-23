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
    document.getElementById('bodis').style.backgroundColor = 'black';
    document.getElementById('bodis').style.color = 'white';
}
function isjungti(){
    document.getElementById('lempute').src='../img/pic_bulboff.gif';
    document.getElementById('bodis').style.backgroundColor = 'white';
    document.getElementById('bodis').style.color = 'black';
}