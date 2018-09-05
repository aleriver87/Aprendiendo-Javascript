var numero_limite = 5;
var i = 1;
var num = 1;


process.stdin.resume();

process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
  
  if (!isNaN(chunk)) {
    var data = chunk.toString().trim();
    iniciarFactorial(parseInt(data));
  }else{
  	process.stdout.write('No es un numero valido');
  }
});

process.stdin.on('end', function() {
  process.stdout.write('end');
});


function iniciarFactorial(numero){
  var intervalo = setInterval(function (){
    //console.log(i,numero);

    if (i == numero) {
      //clearInterval(intervalo);
    }
    if (numero === 0 || numero === 1) {
      console.log(1);
      clearInterval(intervalo);
    }else{
      if (i <= numero) {
        //process.nextTick(function(){
          num = num * i;
          console.log(num);
        //});
      }else{
        clearInterval(intervalo);
      }
      //numero -= 1;
      //console.log(num);
    }
    i++;
  },1000);
}


function factorial(numero){
   return 0 === numero || 1 === numero ? 1 : numero * factorial(numero - 1)
}