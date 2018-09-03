var http = require('http');//requerir modulo http
var url = require('url');//requerimos el modulo url para el manejo de las url y sus parametros

http.createServer(function(request, response){//creamos un servidor con los parametros request y response
    response.writeHead(200,{'Content-Type':'text/plain'});//cabecera de la respuesta con el codigo 200 y el contenido es texto plano
    var params = url.parse(request.url, true).query;//recibir los parametros de la url
    var numero = params.numero;//creamos variable
    response.write("Descendiendo "+numero+" a 0: \n"); //imprimimos en el navegador

    var descendentAsync = function(number, callback){//definimos la variable 
        for(var i=number; i>=0; i--){
            callback(i);
        }
    }

    descendentAsync(numero, function(i){//invocamos la variable 
        response.write("- "+i+"\n"); //imprimimos en el navegador
    });
    response.end();
}).listen(3000);//puerto en el que va a escuchar el servidor
console.log("Servidor corriendo en http://127.0.0.1:3000");//imprimir en consola para conocer cuando este ejecutandose el servidor