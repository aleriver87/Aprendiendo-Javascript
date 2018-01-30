$(document).ready(function(){
    $("body").delegate("p","click",function(){
        $("#parrafo_nuevo").prepend("Este parrafo es nuevo<br>");
    });
});