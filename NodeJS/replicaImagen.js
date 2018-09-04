var fs = require('fs');//activando modulo file system
var http = require('http');//activando modulo http

http.createServer(function(request, response){//creando servidor http con sus funciones de request y response
    var random = Math.random();
    var new_file = new fs.createWriteStream('nueva_imagen_'+random+'.jpg');//crear variable para subir un archivo (sin el random sobreescribe el archivo)
    var bytes_totales = request.headers['content-length'];
    var bytes_subidos = 0;

    request.pipe(new_file);//el tubo de la conexion - abrimos conexion para subir el archivo

    request.on('data', function(chunk){
        bytes_subidos += chunk.length;
        var progreso = (bytes_subidos/bytes_totales)*100;
        response.write("Progress: "+parseInt(progreso,10)+"%\n");
    });

    request.on('end', function(){
        response.end('Carga completa');//cuando termina de subir se avisa que fue exitoso
    });
}).listen(8000);
console.log("Servido corriendo en el puerto 8000");