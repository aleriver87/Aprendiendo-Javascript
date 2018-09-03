var net = require('net'); //cargar el modulo net para cargar un servidor tcp
var server = net.createServer(function(con){//instanciamos la funcion para crear el servidor que recibe como argumento la instancia del socket a conectarse. con = conexion
    con.on('data',function(chunk){ //vamos a escuchar cuando un dato sea enviado por el socket
        console.log('Dato enviado desde el cliente: '+chunk);
        con.write('Repetimos: '+chunk);//escribir en pantalla
    });

    con.on('close', function(){ //escuchamos cuando un socket es cerrado
        console.log('Cliente cerro conexión!'); 
    });

    con.on("error", function(err){//recibimos el error si se pierde la conexion con el cliente
        console.log("Se ha perdido la conexión con el cliente");
    });
}).listen(8000);
console.log("Escuchando servidor en el puerto 8000");