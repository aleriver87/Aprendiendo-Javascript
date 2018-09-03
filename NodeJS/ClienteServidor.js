var net = require('net');//activamos el modulo net

var client = net.connect({port:'8000'}, function(){ //variable cliente, para conectarse al puerto 8000, la funcion no lleva parametros
    client.setEncoding('utf8'); //lejible para nosotros, traducir el buffer
    console.log('Conectado');//escribimos en consola
    client.write('Hola Servidor');//escribimos en pantalla
});

process.stdin.resume();//proceso en pausa, para iniciarlo y escribir en consola

process.stdin.on('data', function(chunk){//escuchar cuando enviemos un dato y escribimos lo que enviamos
    client.write(chunk);
});

client.on('data', function(chunk){ //si recibimos datos de vuelta, los volvemos a imprimir
    console.log(chunk);
});

client.on('close', function(){ //escuchemos cuando se cierra la conexion
    console.log('Se cerro la conexión');
});

client.on('error', function(err){//escuchamos cuando se pierde la conexion con el servidor
    console.log('Se ha perdido la conexion con el servidor');
});