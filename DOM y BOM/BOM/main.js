var ventana1;
var ventana2;

function abrirVentana(){
    ventana1 = window.open("http://www.google.com","_blank","width=400, height=200");
    ventana1.focus();
}

function abrirVentana2(){
    ventana2 = window.open("","_blank","width=800, height=500");
    ventana2.focus();
}

function resizeVentana2(){
    ventana1.resizeTo(800,800);
    ventana1.focus();
}

function infoPantalla(){
    var info = "";
    info += 'Propiedades de la pantalla <br>';
    info += 'Altura disponible: '+ screen.availHeight + '<br>';
    info += 'Ancho disponible: '+ screen.availWidth + '<br>';
    info += 'Altura: ' + screen.height + '<br>';
    info += 'Ancho: ' + screen.width + '<br>';
    info += 'Cantidad de Bits: ' + screen.colorDepth + '<br>';

    document.getElementById("info").innerHTML = info;
}