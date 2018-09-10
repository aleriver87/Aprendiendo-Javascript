var express = require('express'),
	app = express(),
	server = require('http').createServer(app);

//Logger de peticiones http
var logger = require('morgan');
//Parsea las cookies y pobla el objeto req.cookies con un objeto de llaves, que tiene el nombre de la cookie
var cookieParser = require('cookie-parser');
//Parsea el cuerpo de las peticiones y respuestas http
var bodyParser = require('body-parser');

var path = require('path');
var fs = require('fs');
var _ = require('lodash');

//Leccion 4
var _ = require('lodash');


//Requerimos Swig
var swig = require('swig');

//Con esto le decimos a express, que motor de template utilizar, a lo que asignamos Swig.
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//En desarrollo deshabilitamos el cacheo de templates, pero en un entorno de desarrollo es esencial, para el optimo rendimiento.
//Leccion 4
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/', function (req, res){
	var stream = fs.createReadStream(__dirname+'/base_datos.json');
	stream.setEncoding('utf8');
	var cuerpo = '';

	stream.on('data', function(chunk){
		cuerpo += chunk;
	});

	stream.on('end', function(){
		try{
			var data = JSON.parse(cuerpo);
		}catch(err){
			res.statusCode = 400;
			return res.end('error: '+err.message);
		}

		//Leccion 4
		res.render('index',{
			usuarios : data
		});
		
	});
});


var port = Number(process.env.PORT || 3000);

server.listen(port, function(){
	console.log('Servidor corriendo en: '+port);
});