var http = require('http'); //requerimos el modulo HTTP
http.createServer(function(request,response){ //Crear el servidor 
    response.writeHead(200,{'Content-Type':'text/plain'}); //cabecera de la respuesta con el codigo 200 y el contenido es texto plano
    response.end('Hola Mundo');//terminar la respuesta con el texto hola mundo
}).listen(3000); //puerto en el que va a escuchar el servidor
console.log("Servidor Corriendo en http://127.0.0.1:3000"); //imprimir en consola para conocer cuando este ejecutandose el servidor