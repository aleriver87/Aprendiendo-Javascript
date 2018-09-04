var fs = require('fs');//activando modulo file system
var http = require('http');//activando modulo http

http.createServer(function(request, response){//creando servidor http con sus funciones de request y response
    var new_file = new fs.createWriteStream('nuevo_texto_'+Math.random()+'.txt');//crear variable para subir un archivo (sin el random sobreescribe el archivo)

    request.pipe(new_file);//el tubo de la conexion - abrimos conexion para subir el archivo

    request.on('end', function(){
        response.end('Subido Exitosamente');//cuando termina de subir se avisa que fue exitoso
    });
}).listen(8000);
console.log('Servido corriendo en el puerto 8000');
//se ejecuta esto en una ventana cmd y en otra el comando curl --upload-file texto.txt http://localhost:8000