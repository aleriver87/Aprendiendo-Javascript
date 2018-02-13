//Validando formulario
$.validator.setDefaults({
    
    submitHandler: function(form ){

        var codigo = $("#codigo").val();
        var nombre = $("#nombre").val();
        var nota = $("#nota").val();
        $("#codigo").removeAttr('disabled');

        var alumno = {
            codigo:codigo,
            nombre:nombre,
            nota:nota
        };

        localStorage.setItem(codigo,JSON.stringify(alumno));

        listarAlumnos();
       
        $("#codigo").val("");
        $("#nombre").val("");
        $("#nota").val("");
    }
});

//Función para editar registro
function editarEstudiante(codigo){
    var alumno;
    for(var i=0; i<localStorage.length; i++){
        var clave = localStorage.key(i);
        if (clave == codigo){
            alumno = $.parseJSON(localStorage.getItem(clave));

            $("#codigo").val(alumno.codigo);
            $("#codigo").attr('disabled','disabled');
            $("#nombre").val(alumno.nombre);
            $("#nota").val(alumno.nota);
        }
    }
}

//Función eliminar alumno
function eliminarAlumno(codigo){
    localStorage.removeItem(codigo);
    listarAlumnos();
}

//Funcion para listar alumnos
function listarAlumnos(){
    var tabla = "";
    var parrafo1 = $("#p1");

    tabla += '<table border="1">';
    tabla += '<tr>';
    tabla += '<th>CODIGO</th>';
    tabla += '<th>NOMBRE</th>';
    tabla += '<th>NOTA</th>';
    tabla += '</tr>';

    for(var i=0; i<localStorage.length; i++){
        var clave = localStorage.key(i);
        var alumno = $.parseJSON(localStorage.getItem(clave));

        tabla += '<tr>';
        tabla += '<td>'+ alumno.codigo + '</td>';
        tabla += '<td>'+ alumno.nombre + '</td>';
        tabla += '<td>'+ alumno.nota + '</td>';
        tabla += '<td><button onclick="editarEstudiante(\''+ alumno.codigo +'\');">Editar</button></td>';
        tabla += '<td><button onclick="eliminarAlumno(\''+ alumno.codigo +'\');">Eliminar</button></td>';
        tabla += '</tr>';
    }
    tabla += '</table>';
    $(parrafo1).html(tabla);
}

$(document).ready(function(){   
    var validator = $("#formulario").validate({
        errorPlacement: function(error, element){
            $(element).closest("form")
            .find("label[for='"+element.attr("id")+"']")
            .prepend(error);
        },
        errorElement: "span",
        messages: {
            codigo:{
                required: "El código del estudiante es obligatorio"
            },
            nombre: {
                required: "El nombre del estudiante es obligatorio",
                minlength: "El nombre debe tener al menos 3 caractéres"
            },
            nota: {
                required:"La nota del estudiante es obligatorio",
                maxlength: "La nota no puede ser un número de 3 dígitos",
            }
        }
    });


    //Función para mostrar el promedio de las notas registradas
    $("#mostrar").click(function(){
        var suma = 0;
        var promedio = 0;
        var total_alumnos = localStorage.length;

        for(var i=0; i<localStorage.length; i++){
            var clave = localStorage.key(i);
            var alumno = $.parseJSON(localStorage.getItem(clave));

           suma += parseFloat(alumno.nota);
        }

        promedio = suma/total_alumnos;
        alert("El promedio de notas de los alumnos registrados es de: "+ promedio);
    });

    //Función para mostrar la mayor nota de los alumnos registrados
    $("#notaMayor").click(function(){
        var notaMayor = 0;

        for(var i=0; i<localStorage.length; i++){
            var clave = localStorage.key(i);
            var alumno = $.parseJSON(localStorage.getItem(clave));

            if(parseFloat(alumno.nota)>notaMayor){
                notaMayor = parseFloat(alumno.nota);
                console.log("la nota mayor cambió a:"+notaMayor);
            } else {
                console.log("la nota mayor se mantiene en: "+notaMayor);
            }
        }
        alert("La mayor nota es: " + notaMayor);
    });

    //Función para mostrar la menor nota de los alumnos registrados
    $("#notaMenor").click(function(){
        var notaMenor = 10000; //Inicializo variable en donde se guardará la nota menor -- se pone 10000 para que en la primera evaluación se haga el cambio con una nota registrada

        for(var i=0; i<localStorage.length; i++){
            var clave = localStorage.key(i);
            var alumno = $.parseJSON(localStorage.getItem(clave));

            if(parseFloat(alumno.nota)<notaMenor){
                notaMenor = parseFloat(alumno.nota);
                console.log("la nota menor cambio en: "+notaMenor);
            } else {
                console.log("la nota menor se mantiene en: "+notaMenor);
            }
        }
        alert("La menor nota es: " + notaMenor);
    });
  
});