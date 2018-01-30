$(document).ready(function(){
    $("body").delegate("p","click",function(){
        $("#parrafo_nuevo").append("Soy un parrafo nuevo<br>");
    });

    $("#undelegate").click(function(){
        $("body").undelegate();
    });
});