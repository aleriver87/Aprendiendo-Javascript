jQuery.fn.plugin_hide = function(){
    this.each(function(){
        elemento = $(this);
        elemento.hide(1000);
    });
};

jQuery.fn.plugin_show = function(){
    this.each(function(){
        elemento = $(this);
        elemento.show(1000);
    });
};

$(document).ready(function(){
    $("#eliminar").click(function(){
        $("#parrafo").plugin_hide();
    });

    $("#mostrar").click(function(){
        $("#parrafo").plugin_show();
    });
});