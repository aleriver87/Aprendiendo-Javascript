var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res){
    var stream = null;
    var params = url.parse(req.url, true).query;

    var tipo = params.tipo;
    switch(tipo){
        case 'imagen':
            stream = fs.createReadStream(__dirname+'/nueva_imagen.jpg');
            stream.pipe(res);
        break;

        case 'texto':
            stream = fs.createReadStream(__dirname+'/nuevo_texto.txt');
            stream.pipe(res);
        break;

        case 'video':
            stream = fs.createReadStream(__dirname + '/nuevo_video.mp4');
            stream.pipe(res);
        break;

        default:
            res.end('Sin datos');
        break;
    }
});
server.listen(8000);