var express = require('express'),
app = express(),
server = require('http').createServer(app);

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res){
    res.send("Hola Mundo");
});

var port = Number(process.env.PORT || 3000);

server.listen(port, function(){
    console.log('Servidor corriendo en '+port);
});