

function toggleLempute(){
    if(document.getElementById('lempute').alt == "off")
    {
        document.getElementById('lempute').src="../img/pic_bulbon.gif";
        document.getElementById('lempute').alt="on";
        return;
    }
    else
    {
        document.getElementById('lempute').src="../img/pic_bulboff.gif";
        document.getElementById('lempute').alt="off";
        return;
    }

}