var http = require('http'); //requerir modulo http
var url = require('url');//requerimos el modulo url para el manejo de las url y sus parametros

http.createServer(function(request, response){ //creamos un servidor con los parametros request y response
    response.writeHead(200,{'Content-Type':'text/plain'});//cabecera de la respuesta con el codigo 200 y el contenido es texto plano
    var params = url.parse(request.url, true).query;//recibir los parametros de la url
    var nombre = params.nombre;//creamos variable
    response.end('Hola '+nombre); //imprimimos en el navegador
}).listen(3000);//puerto en el que va a escuchar el servidor
console.log("Servidor corriendo en http://127.0.0.1:3000");//imprimir en consola para conocer cuando este ejecutandose el servidor