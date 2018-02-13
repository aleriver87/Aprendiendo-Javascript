$(document).ready(function(){
    var datos = "<xml version='1.0'><persona><nombres>Pedro</nombres><apellidos>Perez</apellidos><persona><nombres>Alejandra</nombres><apellidos>Rivera</apellidos><persona></xml>"
    var $xml = $(datos);

    var $nombres = $xml.find('nombres');
    var $apellidos = $xml.find('apellidos');

    $("#nombres").html($nombres);
    $("#apellidos").html($apellidos);
});