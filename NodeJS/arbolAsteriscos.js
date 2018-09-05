process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdout.write("Ingrese el número de filas para dibujar el árbol (comienza desde 0):\n")
process.stdin.on('data', function(chunk){
    if(!isNaN(chunk)){
        var data = chunk.toString().trim();
        dibujarTriangulo2(parseInt(data)); //elegir con que funcion hacerlo la Triangulo2 lo dibuja de un solo
    } else {
        process.stdout.write("No es un número válido.");
    }
});

process.stdin.on('end', function(){
    process.stdout.write('end');
});

function dibujarTriangulo(numero){ //lo dibuja linea por linea
    var j = 0;
    for (i = 0; i<=numero; i++){
        for(k=numero; k>=i; k--){
            process.stdout.write(" ");
        }
    
        var a = i-(i*2);
    
        for(k=i; k>=a; k--){
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
}

var j = 0;
var i = 0;

function dibujarTriangulo2(numero){ //dibuja el triangulo de un solo
    i=0;
    setInterval(function(){
        if(i<=numero){
            for(k=numero; k>=i; k--){
                process.stdout.write(" ");
            }
            var a = i-(i*2);
            for(k=i; k>=a; k--){
                process.stdout.write("*");
            }
            process.stdout.write("\n");
            i++;
        }
    }, 1000);
}