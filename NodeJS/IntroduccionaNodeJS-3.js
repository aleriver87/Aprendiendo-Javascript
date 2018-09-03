var http = require('http');
var url = require('url');

http.createServer(function(request, response){

	response.writeHead(200, {'Content-Type' : 'text/plain'});
	var params = url.parse(request.url, true).query;
    var num1 = parseInt(params.num1);
    var num2 = parseInt(params.num2);

    var suma = num1 + num2;
    response.write("Suma "+num1+ " + "+num2+" = "+suma+"\n");
    
    var resta = num1 - num2;
    response.write("Resta "+num1+ " - "+num2+" = "+resta+"\n");
    
    var multiplicacion = num1 * num2;
    response.write("Multiplicacion "+num1+ " * "+num2+" = "+multiplicacion+"\n");
   
    response.end();
}).listen(3000, function(){
	console.log('Servidor corriendo en el puerto 3000');
});

