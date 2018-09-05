process.stdin.setEncoding('utf8');
process.stdout.write("Ingrese el número a decrementar:\n");
process.stdin.on('data',function(chunk){
    if(!isNaN(chunk)){
        decremento(chunk);
    } else {
        process.stdout.write("No es un número válido.");
    }
});

process.stdin.on('end', function(){
    process.stdout.write('end');
});

function decremento(numero){ //recibe el numero que es el chunk
    var intervalo = setInterval(function(){
        numero -=1;
        process.stdout.write(numero+'\n');

        if(numero == 0){
            process.stdout.write("Secuencia terminada!\n\n Ingrese el número a decrementar:\n");
            clearInterval(intervalo);
        }
    }, 1000);
}