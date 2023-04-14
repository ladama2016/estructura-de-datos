const enviar=document.querySelector(".enviar");

enviar.addEventListener("click",function(e)
{
    e.preventDefault();

    send();

});


function send()
{
   
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("last").value;
    var compañia = document.getElementById("compañia").value;
    var telefono = document.getElementById("telefono").value;
    var etiqueta_t = document.getElementById("etiqueta_t").value;
    var email = document.getElementById("email").value;
    var etiqueta_h = document.getElementById("etiqueta_h").value;
    var fecha = document.getElementById("fecha").value;

    var url="BEGIN:VCARD\nVERSION:3.0\nN:"+apellido+";"+nombre+";;;"+"\nORG:"+compañia+"\nTEL;TYPE="+etiqueta_t+":+"+telefono+"\nEMAIL;"+"TYPE="+etiqueta_h+":"+email+"\nBDAY:"+fecha+"\nEND:VCARD";

    new QRCode(document.getElementById("qr"),
    {
        text: url,
        wiidth:256,
        height:256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    })

}