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


//Requerimos Swig
var swig = require('swig');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', function (req, res){
	res.write('Hola Mundo');
	res.end();
});

app.get('/usuarios', function (req, res){
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

		var index = swig.renderFile(__dirname+'/index.html', {usuarios : data}, function(err, output){
			if (err) {
				throw err;
			}
			res.send(output);
			res.end();
		});
		
	});
	/**/

});


app.post('/usuario', function (req, res){
	var user =  {
	    "_id": "54b73e7e14f84d59250577c7",
	    "age": 28,
	    "name": "Nuevo usuario",
	    "gender": "male",
	    "email": "carpenterayers@xumonk.com",
	    "phone": "+1 (933) 527-3679"
	};

	var datos = [];
	var streamR = fs.createReadStream(__dirname+'/base_datos.json');
	streamR.setEncoding('utf8');

	streamR.on('data', function (chunk){
		chunk = JSON.parse(chunk);
		chunk.push(user);
		datos = chunk.slice();
	});

	streamR.on('end', function(){
		var streamW = fs.createWriteStream(__dirname+'/base_datos.json');
		streamW.write(JSON.stringify(datos));
		res.send(datos);
	});

});

app.put('/usuario', function (req, res){
	//Para el put instalaremos un modulo llamado lodash
	var id = "54b73e7e5407f9c90c2fca40";

	var datos = [];
	var streamR = fs.createReadStream(__dirname+'/base_datos.json');
	streamR.setEncoding('utf8');

	streamR.on('data', function (chunk){
		chunk = JSON.parse(chunk);
		var index = _.findIndex(chunk, {'_id' : id });
		chunk[index].name = "Nombre Editado";
		datos = chunk.slice();
	});

	streamR.on('end', function(){
		var streamW = fs.createWriteStream(__dirname+'/base_datos.json');
		streamW.write(JSON.stringify(datos));
		res.send(datos);
	});

});

app.delete('/usuario', function (req, res){
	//Para el put instalaremos un modulo llamado lodash
	var id = "54b73e7e5407f9c90c2fca40";

	var datos = [];
	var streamR = fs.createReadStream(__dirname+'/base_datos.json');
	streamR.setEncoding('utf8');

	streamR.on('data', function (chunk){
		chunk = JSON.parse(chunk);
		var index = _.findIndex(chunk, {'_id' : id });
		console.log(index);
		delete chunk[index];
		datos = _.compact(chunk.slice());
	});

	streamR.on('end', function(){
		var streamW = fs.createWriteStream(__dirname+'/base_datos.json');
		streamW.write(JSON.stringify(datos));
		res.send(datos);
	});

});

var port = Number(process.env.PORT || 3000);

server.listen(port, function(){
	console.log('Servidor corriendo en: '+port);
});