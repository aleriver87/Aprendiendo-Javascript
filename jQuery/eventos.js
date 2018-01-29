$(document).ready(function(){
    $("#b_click").click(function(){
        $("#p_click").append("texto nuevo. ");
    });

    $("#b_mouseenter").mouseenter(function(){
        alert("!Has pasado el mouse por el boton!");
    });

    $("#b_mouseleave").mouseleave(function(){
        alert("!El mouse dejo de estar sobre el boton!");
    });

    $("#t_focus").focus(function(){
        $(this).css("background-color","#848484");
    });

    $("#t_focus").blur(function(){
        $(this).css("background-color","#ffffff");
    });

    $("#b_dblclick").dblclick(function(){
        $("#p_dblclick").append("Texto nuevo. ");
    });
});