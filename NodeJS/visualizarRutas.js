var express = require('express'),
	app = express(),
	server = require('http').createServer(app);

app.get('/', function(req, res){
	res.send('Inicio');
});

app.get('/contacto', function(req, res){
	res.send('Contacto');
});

app.get('/nosotros', function(req, res){
	res.send('Nosotros');
});


var port = Number(process.env.PORT || 3000);

server.listen(port, function(){
	console.log('Servidor corriendo en: '+port);
});