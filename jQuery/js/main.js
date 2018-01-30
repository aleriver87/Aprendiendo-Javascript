$(document).ready(function(){
    $("select").change(function(){
        var fruta = "";
        $("select option:selected").each(function(){
            fruta += $(this).text() + " ";
            alert("Tu fruta preferida es: "+fruta);
        });
    }).change();
});