$(document).ready(function() {
        // Se inicializan las variables
        var marcadores = [];
        var marcadorRegistro;
        var Hoteles = [];
        var mapaRegistro;
        var latlngInicial = new google.maps.LatLng(25.760527, -80.192800); 
        var latitudPunto=25.760527;
        var longitudPunto=-80.192800;


        $(".btnVolver").click(function() {
            cambiarPagina("paginaInicio");
        });


        $("#btnVerMapa").click(function() {
            cambiarPagina("paginaMapa");
            mostrarMapa();
        });
        
        $("#btnListaHoteles").click(function() {
            cambiarPagina("listaHoteles");
            mostrarListado();
        });
        
        $(".btnVolverLista").click(function() {
            cambiarPagina("listaHoteles");
            mostrarListado();
        });
        
        $("#btnRegistroHotel").click(function() {
            cambiarPagina("paginaRegistrarHotel");
            mostrarMapaRegistro();
        });

        
        $("#btnGuardarPunto").click(function() {
            var nombre= $("#nombre").val();
            var ciudad= $("#ciudad").val();
            var telefono= $("#tel").val();
            var estrellas= $("#estrellas").val();
            if(nombre!="" && ciudad!="" && telefono!="" && estrellas!="") {  
            var hotel = {            
                nombre: nombre,
                ciudad: ciudad,
                telefono: telefono,
                estrellas: estrellas,
                latitud: latitudPunto,
                longitud: longitudPunto        
            };
            //Se agregan al localstorage para despues poder acceder
            localStorage.setItem($("#nombre").val(), JSON.stringify(hotel));
            alert("Hotel Registrado");
            // Se limpain los campos para que se puedan ingresar varios hoteles 
            $("#nombre").val("")
            $("#ciudad").val("")
            $("#tel").val("")
            $("#estrellas").val("")
            marcadorRegistro.setPosition(latlngInicial);
            mapaRegistro.setCenter(latlngInicial);
        }else{
            alert("Llene todos los campos para agregar la informacion del Hotel")
        }
        });


        function mostrarListado(){
            var element_html="";
            //Se recorre el localStorage para mostrar la lista
            for (var i = 0; i < localStorage.length; i++) {
                var clave = localStorage.key(i);
                var hotel = $.parseJSON(localStorage.getItem(clave));
                element_html+="<a  class=\"btninfoHotel ui-link ui-btn ui-shadow ui-corner-all\" data-role=\"button\" onclick=\"mostrarInfoHotel("+i+")\">"+hotel.nombre+"</a>";
            }
            //Se crean los botones para uqe se puedan mostrar y el usuario pueda escoger 
            $("#listadoHotel").html(element_html);
        }

        function mostrarMapaRegistro() {
            // Se crean las opciones para el mapa de google
            var opciones = {            
                zoom: 10,
                center: latlngInicial,
                mapTypeId: google.maps.MapTypeId.ROADMAP        
            };
            //Se crea el mapa con la API
             mapaRegistro = new google.maps.Map(document.getElementById("divMapaRegistro"), opciones);   
             //Se crea el marcador para mostrar en el mapa
             marcadorRegistro = new google.maps.Marker({            
                position: latlngInicial,
                map: mapaRegistro,
                draggable: true,
                title: "Mi hotel!!"        
            });
            //Se crea un listener para que se pueda obtener la latitud y longitud una vez que el marcador se deje de mover 
            google.maps.event.addListener(marcadorRegistro, 'dragend', function(event) {
                latitudPunto = event.latLng.lat();
                longitudPunto = event.latLng.lng();
            });                
        }
    });
    //Borra todos los elementos del localStorage
    function borrar(){
        for (var i = 0; i <= localStorage.length; i++) {
            var clave = localStorage.key(i);
            localStorage.removeItem(clave);
        }
    }
    //Muestra la informacion del localStorage
    function mostrarInfoHotel(id_elem){
        id=id_elem;
        for (var i = 0; i < localStorage.length; i++) {
            var clave = localStorage.key(i);// seontiene la clave para poder recorrer el local storage
            var hotel = $.parseJSON(localStorage.getItem(clave));//Se asigna los valores a la variable hotel
            if(id_elem==i){ // Se checa que el hotel escogido se muestre la informacion correcta
                //Se pasan los valores a los labels , paa que el usuario pueda verlos
                $("#nombre_texto").html(hotel.nombre);
                $("#ciudad_texto").html(hotel.ciudad);
                $("#tel_texto").html(hotel.telefono);
                $("#estrellas_texto").html(hotel.estrellas);
                cambiarPagina("paginaMapa"); // Se cambia a la pagina para mostrar los valores 
                $(function(){
                    // Se inicializan los valores de los mapas
                    var opciones = {            
                        zoom: 9,
                        center: new google.maps.LatLng(hotel.latitud, hotel.longitud),
                        mapTypeId: google.maps.MapTypeId.ROADMAP        
                    };

                    var mapa = new google.maps.Map(document.getElementById("divMapaHotel"), opciones);    
                    var latlngnN = new google.maps.LatLng(hotel.latitud, hotel.longitud);
                    var marcador = new google.maps.Marker({            
                        position: latlngnN,
                        map: mapa,
                        title: hotel.nombre        
                    }); 
                });
            }
        }
    }
    //Borra todos los elementos del localStorage
    borrar();