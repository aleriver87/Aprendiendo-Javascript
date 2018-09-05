process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {

  	var data = chunk.toString().split(' '),
    num1 = parseInt(data[0]),
    num2 = parseInt(data[1]),
    operacion = 1;
  	operaciones(num1, num2, operacion);
});

process.stdin.on('end', function() {
  process.stdout.write('end');
});


function operaciones(num1, num2, operacion){
	var intervalo = setInterval(function (){
		switch(operacion){
			case 1 :
				suma(num1, num2);
			break;
			case 2 :
				resta(num1, num2);
			break;
			case 3 :
				multiplicacion(num1, num2);
			break;
			default:
				process.stdout.write("Secuencia terminada!");
				clearInterval(intervalo);
			break;
		}
		operacion++;
	}, 5000);
}


function suma(num1, num2){
	console.log(num1+"+"+num2+" = ", num1 + num2);
}

function resta(num1, num2){
	console.log(num1+"-"+num2+" = ",num1 - num2);
}

function multiplicacion(num1, num2){
	console.log(num1+"*"+num2+" = ",num1 * num2);
}