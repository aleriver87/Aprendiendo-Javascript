process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
  
  if (!isNaN(chunk)) {
   	incremento(parseInt(chunk));
  }else{
  	process.stdout.write('No es un numero valido');
  }
});

process.stdin.on('end', function() {
  process.stdout.write('end');
});


function incremento(numero){
	var intervalo = setInterval(function (){
		numero+=10;
		process.stdout.write(numero+'\n');
		if (numero >= 100) {
			process.stdout.write("Secuencia terminada!");
			clearInterval(intervalo);
		}
	}, 1000);
}