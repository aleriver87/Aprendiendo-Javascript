net = require('net');//activamos el modulo net

var clientes = [];//almacenamos nuestros clientes en un arreglo

net.createServer(function(socket){ //iniciar el servidor, recibiremos por socket la conexion
    socket.name = socket.remoteAddress + ":" + socket.remotePort; //agregaremos la direccion remota
    clientes.push(socket);//agregamos los clientes al arreglo
    socket.write("Welcome "+socket.name+"\n");//escribimos en consola el nombre del cliente
    broadcast(socket.name + "joined the chat\n", socket); //enviamos por broadcast a cada cliente el aviso del nuevo cliente conectado

    socket.on('data', function(data){//mensajes enviados por los clientes
        broadcast(socket.name+ "> "+data, socket);//manda el mensaje a todos los clientes del arreglo
    });

    socket.on("end", function(){ //informa el cierre de la conexion de un cliente
        clientes.splice(clientes.indexOf(socket),1); //eliminar el cliente del arreglo
        broadcast(socket.name + "left the chat.\n");//avisamos a los demas clientes sobre el abandono del cliente
    });

    function broadcast(mensaje, remitente){ //enviar mensaje a todos los clientes
        clientes.forEach(function(client){
            if(client === remitente) return;//evitar que el mismo se mande el mensaje
            client.write(mensaje); //mandar mensaje en pantalla
        });
        process.stdout.write(mensaje+"\n");//escribiendo en el servidor el mensaje
    }
}).listen(8000);
console.log("Servidor corriendo en el puerto 8000\n");