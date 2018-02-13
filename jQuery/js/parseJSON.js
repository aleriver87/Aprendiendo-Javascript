$(document).ready(function(){
    var datos = '[{"Marca":"Ford"},{"Marca":"Chevrolet"},{"Marca":"Ferrari"},{"Marca":"Toyota"}]';
    var cadena = '';
    var base_datos = $.parseJSON(datos);
    $.each(base_datos, function(){
        cadena += "<li>"+ this['Marca']+"<br>";
    });

    $('span').html(cadena);
});