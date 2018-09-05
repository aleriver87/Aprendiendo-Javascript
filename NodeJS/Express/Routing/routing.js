var express = require('express');
app = express(),
server = require('http').createServer(app);

var logger = require('morgan'); //variable logger de peticiones
var cookieParser = require('cookie-parser');//objeto parse de las cookies para llenar las cookies con el objeto de llave qeu tiene el nombre de la cookie
var bodyParser = require('body-parser');//para hacer parser de las peticiones y las respuestas http
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.write('Hola Mundo');
    res.end();//termine de escribir
});

app.get('/usuarios', function(req, res){
    var stream = fs.createReadStream(__dirname+'/base_datos.json');//le decimos que cree un directorio
    stream.setEncoding('utf8');
    stream.pipe(res);
});

app.post('/usuario', function(req, res){
    var user = {
        "_id" : "5ab73sadfa8a0s7df8as7d0asdf789s",
        "age": 28,
        "name": "Nuevo usuario",
        "gender": "male",
        "email": "carpenterayer@xumonk.com",
        "phone": "+1 (933) 354-4534"
    };

    var datos = [];
    var streamR = fs.createReadStream(__dirname+'/base_datos.json');
    streamR.setEncoding('utf8');

    streamR.on('data',function(chunk){
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

app.put('/usuario', function(req, res){
    var id = "54b73e7e2ce42eb971c7bde3";

    var datos = [];
    var streamR = fs.createReadStream(__dirname+'/base_datos.json');
    streamR.setEncoding('utf8');

    streamR.on('data', function(chunk){
        chunk = JSON.parse(chunk);
        var index = _.findIndex(chunk, {'_id':id});
        datos = chunk.slice();
    });

    streamR.on('end', function(){
        var streamW = fs.createWriteStream(__dirname+'/base_datos.json');
        streamW.write(JSON.stringify(datos));
        res.send(datos);
    });
});

app.delete('/usuario', function(req, res){
    var id = "54b73e7e306710843c7eeeea";

    var datos = [];
    var streamR = fs.createReadStream(__dirname+'/base_datos.json');
    streamR.setEncoding('utf8');

    streamR.on('data', function(chunk){
        chunk = JSON.parse(chunk);
        var index = _.findIndex(chunk, {'_id':id});
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
})