var net = require('net');


var client = net.connect({port : '8000'}, function(){
	client.setEncoding('utf8');
	console.log('Conectado');
});


//process naturalmente está en pausa, lo iniciamos para poder escribir en consola
process.stdin.resume();

//Escuchamos cuando se envie un dato y escribimos lo que acabamos de enviar
process.stdin.on('data', function (chunk){
	client.write(chunk.toString().trim());
});

client.on('data', function (chunk){
	RespuestaCliente(chunk);
});

client.on('close', function(){
	console.log('Se cerró la conexión');
	
});

client.on("error", function(err){
    console.log("Se ha perdido la conexión con el servidor!");
});

function RespuestaCliente(frase){
	switch(frase){
		case 'Hola cómo estas?' : 
			console.log('Respuesta del servidor: '+frase);
			client.write('bien y tu?');
		break;
		case 'bien, gracias por preguntar' : 
			console.log('Respuesta del servidor: '+frase);
			client.write('Me alegra!');
		break;
	}
}