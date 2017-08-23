

function toggleLempute(){
    if(document.getElementById('lempute').alt == "off")
    {
        turnOn();
    }
    else
    {
        turnOff();
    }

}

function turnOn()
{
    document.getElementById('lempute').src="../img/pic_bulbon.gif";
    document.getElementById('lempute').alt="on";
    return;
}
function turnOff()
{
    document.getElementById('lempute').src="../img/pic_bulboff.gif";
    document.getElementById('lempute').alt="off";
    return;
}