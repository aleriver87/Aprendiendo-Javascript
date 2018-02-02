
$(document).ready(function(){
    //Creando JSON
    var archivoJSON = '{"clientes": []}';
    var miArchivoJSON = JSON.parse(archivoJSON);

    $("#boton").click(function(){
        registrarCliente();
        $(document).trigger("descuento");
        limpiarForm();
    });

    function limpiarForm() {
        $("#id").val("");
        $("#nombre").val("");
        $("#total").val("");
    }   
    
    $(document).on("descuento", function(event, param1, param2){
        var nombre = $("#nombre").val();
        var totalCompra = parseFloat($("#total").val());

        if(totalCompra>=50000){
            alert("El cliente "+nombre+" se ganó un descuento de 10,000");
        }
    });

    function registrarCliente(){
        //Obtener los datos del formulario
        var id = $("#id").val();
        var nombre = $("#nombre").val();
        var totalCompra = parseFloat($("#total").val());

        if(id.trim() != ""){
            if(nombre.trim() != ""){
                if(isNaN(totalCompra) == false){
                    miArchivoJSON.clientes.push({"id":id,"nombre":nombre,"total":totalCompra});
                    listarClientes(miArchivoJSON);
                } else {
                    alert("El total de compra ingresado debe ser un número.");
                    $( "#total" ).focus();
                }
            } else {
                alert("Debe ingresar el nombre del cliente");
                $( "#nombre" ).focus();
            }
        } else {
            alert("Debe ingresar un ID al cliente");
            $( "#id" ).focus();
        }    
    }

    function listarClientes(json){
        var lista = "";
        for(var i=0; i<json.clientes.length;i++){
            lista+="<b>Id:</b>"+json.clientes[i].id+"-"+"<b>Nombre:</b>"+json.clientes[i].nombre+"-"+"<b>Total Compra:</b>"+json.clientes[i].total+"<br>";
            
            $("#resultado").html(lista);
        }
    }

});