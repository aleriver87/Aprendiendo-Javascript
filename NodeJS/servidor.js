var net = require('net');

var server = net.createServer( function (con){

	con.setEncoding('utf8');

	con.on('data', function (chunk){
		RespuestaServidor(chunk);
	});

	con.on('close', function (){
		console.log('Cliente cerró conexión!');
	});
	

	con.on("error", function(err){
	    console.log("Se ha perdido la conexión con el cliente!");
	});


	function RespuestaServidor(frase){
		switch(frase){
			case 'Hola':
				console.log('Saludo del cliente: '+frase);
				con.write('Hola cómo estas?');
			break;
			case 'bien y tu?':
				console.log('Saludo del cliente: '+frase);
				con.write('bien, gracias por preguntar');
			break;
			case 'Me alegra!':
				console.log('Saludo del cliente: '+frase);
			break;
		}
	}

}).listen(8000);

console.log("Escuchando servidor en el puerto 8000");