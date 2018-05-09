function cambiarPagina(page){
    $.mobile.changePage("#"+page,{
        transition: "flip"
    });
}

var hoteles =[];
var latlngInicial; 
var latlng1;

$(document).ready(function(){
    latlngInicial = new google.maps.LatLng(25.760527, -80.192800); 
    var latlng1 = new google.maps.LatLng(39.54016, -89.348943);
    var marcador1;
    var latitud;
    var longitud;

    $(".btnVolver").click(function() {
        cambiarPagina("paginaInicio");
        $("#noHotel").remove();
    });

    $("#btnRegistrarHotel_1").click(function(){
        cambiarPagina("paginaMapa");
        mostrarMapa();
    });

    $("#btnListarHoteles").click(function(){
        cambiarPagina("hotelesRegistrados");
        listarHoteles();
    });

    function listarHoteles(){
        $('#hoteles').empty();
        var parrafo = "";
        if (hoteles.length == 0){
                parrafo = '<label id="noHotel">No hay hoteles registrados.</label>';
            } else {
                for(var i = 0; i < hoteles.length; i++){  
                    var hotelSeleccionado = "";
                        hotelSeleccionado += '<a href="#" class="ui-btn hotel" onclick="hotelSeleccionado(' + "'" + hoteles[i].nombre + "'" +')"><h3>'+ hoteles[i].nombre +'</h3></a>';

                        parrafo += '<li>'+ hotelSeleccionado +'</li>';
                    }
            }    

        $('#hoteles').listview('refresh');                    
        $("#hoteles").append(parrafo);
    }

    function mostrarMapa(){
        var opciones = {
            zoom: 2,
            center: latlng1,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    
        var mapa = new google.maps.Map(document.getElementById("divMapa"),opciones);

        marcador1 = new google.maps.Marker({
            position: latlng1,
            map: mapa,
            draggable: true,
            title: "Punto 1"
        });

        google.maps.event.addListener(marcador1, 'dragend', function(event){
            latitud = event.latLng.lat();
            longitud = event.latLng.lng();

        });
    
        $("#btnRegistrarHotel_2").click(function(){
            registrarHotel(latitud, longitud);
        });
    }

    function registrarHotel(latitud, longitud){
        var nombre = $("#nombre").val();
        var ciudad = $("#ciudad").val();
        var telefono = $("#telefono").val();
        var estrellas = $("#estrellas").val();
        var latitud = latitud;
        var longitud = longitud;
        var lista;

        var hotel = {
            nombre:nombre,
            ciudad: ciudad,
            telefono: telefono,
            estrellas: estrellas,
            latitud: latitud,
            longitud: longitud
        }

        if($.trim(nombre) == ""){
            alert("El nombre del hotel esta vacío.");
            $("#nombre").focus();
        } else {
            if($.trim(ciudad) == ""){
                alert("El nombre de la ciudad esta vacío.");
                $("#ciudad").focus();
            } else {
                if($.trim(telefono) == ""){
                    alert("El dato del teléfono esta vacío.");
                    $("#telefono").focus();
                } else {
                    if($.trim(estrellas) == ""){
                        alert("El dato de las estrellas esta vacío.");
                        $("#estrellas").focus();
                    } else {
                        if($.trim(latitud) == undefined || $.trim(latitud) == ""){
                            alert("Seleccione la ubicación del hotel en el mapa.");
                        } else {
                            hoteles.push(hotel);
                            limpiarCampos();
                        }
                    }
                }
            }
        }
        
        for (var i = 0; i < hoteles.length; i++) {
            lista+="nombre: "+hoteles[i].nombre+"-"+"ciudad: "+hoteles[i].ciudad+"-"+"telefono: "+hoteles[i].telefono+"<br>";
            lista+="estrellas: "+hoteles[i].estrellas+"-"+"latitud: "+hoteles[i].latitud+"-"+"longitud: "+hoteles[i].longitud;
        }

        console.log(lista);
   }

   function limpiarCampos() {
        $("#nombre").val("");
        $("#ciudad").val("");
        $("#telefono").val("");
        $("#estrellas").val("");
    }

});

function hotelSeleccionado(hotel){
    cambiarPagina("hotel");
    var hotel1 = hotel;
    var datos = "";

    for (var i=0; i<hoteles.length; i++){
        if(hotel1 == hoteles[i].nombre){
            datos+="nombre: "+hoteles[i].nombre+"<br>"+"ciudad: "+hoteles[i].ciudad+"<br>"+"telefono: "+hoteles[i].telefono+"<br>";
            datos+="estrellas: "+hoteles[i].estrellas+"<br>"+"Ubicación: "+"<br>";
            console.log(hoteles[i].latitud);
            console.log(hoteles[i].longitud);
            
            var opciones = {
                zoom: 2,
                center: new google.maps.LatLng(hoteles[i].latitud, hoteles[i].longitud),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        
            var mapa = new google.maps.Map(document.getElementById("mostrarMapa"),opciones);
            latlng1 = new google.maps.LatLng(hoteles[i].latitud, hoteles[i].longitud);

            marcador1 = new google.maps.Marker({
                position: latlng1,
                map: mapa,
                draggable: true,
                title: hoteles[i].nombre
            });

            $("#datos").html(datos);
            break;
        }
    };
}
