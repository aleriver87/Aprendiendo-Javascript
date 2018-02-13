$.validator.setDefaults({
    submitHandler: function(form ){
        alert("El alumno fue registrado exitosamente");
        console.log(form);
        $("#codigo").val("");
        $("#nombre").val("");
        $("#nota").val("");
    }
});

$(document).ready(function(){

   
   
    $("p").focusin(function(){
        $(this).find("span").css("display","inline").fadeOut(2000);
        $(this).find("span").css("color","red");
        
    });

    var validator = $("#formulario").validate({
   
        errorPlacement: function(error, element){
            $(element).closest("form")
            .find("label[for='"+element.attr("id")+"']")
            .append(error);
        },
        errorElement: "span",
        messages: {
            codigo:{
                required: "(El código del estudiante es obligatorio)"
            },
            nombre: {
                required: "(El nombre del estudiante es obligatorio)",
                minlength: "(El nombre debe tener al menos 3 caractéres)"
            },
            nota: {
                required:"(La nota del estudiante es obligatorio)",
                maxlength: "(La nota no puede ser un número de 3 dígitos)"
            }
        }
    });
  
});