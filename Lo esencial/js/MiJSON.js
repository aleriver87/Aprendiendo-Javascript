var miJSON = [
    {
        "CODIGO" : "001",
        "NOMBRE" : "Calculo"
    },
    {
        "CODIGO" : "002",
        "NOMBRE" : "Fisica"
    },
    {
        "CODIGO" : "003",
        "NOMBRE" : "Algoritmo"
    }
];

function leerJSON(json){
    var out = "";
    var i;
    for(i=0;i<json.length;i++){
        alert("Codigo: "+json[i].CODIGO+" - "+"Nombre: "+json[i].NOMBRE);
    }
}
leerJSON(miJSON);