$(document).ready(function(){
    $("#arrastrar").draggable();
    $("#soltar").droppable({
        drop: function(){
            alert("Has soltado el objeto");
        }
    })
});