var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	url = require('url');




app.get('/', function(req, res){
	var params = url.parse(req.url, true).query;
	var nombre = params.nombre;

	res.send('Hola '+ nombre);
});


var port = Number(process.env.PORT || 3000);

server.listen(port, function(){
	console.log('Servidor corriendo en: '+port);
});