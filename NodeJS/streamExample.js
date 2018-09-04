var http = require('http');//activamos el modulo de http

http.createServer(function(request, response){//creamos el servidor
    response.writeHead(200);//escribimos la cabecera 

    request.on('data',function(chunk){
        console.log(chunk.toString());//ver lo que sucede en la consola
        response.write(chunk);//escribir en pantalla el chunk que recibimos
    });

    request.on('end', function(){
        response.end();
    });
}).listen(8000);
console.log("Servidor corriendo en el puerto 8000");
//ejecutar en una ventana el servidor este y en otra escribir curl -d 'hola' http://localhost:8000 con eso se valida la comunicacion