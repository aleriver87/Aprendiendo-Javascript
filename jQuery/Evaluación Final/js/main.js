$.validator.setDefaults({
    submitHandler: function(form ){
        alert("El alumno fue registrado exitosamente");
        $("#codigo").val("");
        $("#nombre").val("");
        $("#nota").val("");
    }
});

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
                maxlength: "La nota no puede ser un número de 3 dígitos"
            }
        }
    });
  
});