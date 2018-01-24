/** Escucha de clic en los botones creados **/
document.getElementById("registrar").addEventListener("click",registrar);
document.getElementById("promedio").addEventListener("click",prom);
document.getElementById("notaMayor").addEventListener("click",notaMayor);
document.getElementById("notaMenor").addEventListener("click",notaMenor); 

/** Declarando archivo JSON donde se guardara la data de los estudiantes **/
var archivoJSON = '{ "estudiantes" :[]}';
var miJSON = JSON.parse(archivoJSON);

function registrar(){ //Funcion que se ejecuta al dar clic en el boton Registrar Estudiante
    //Obteniendo la data ingresada
    var codigo1 = document.getElementById("codigo").value;
    var nombre1 = document.getElementById("nombre").value;
    var nota1 = parseFloat(document.getElementById("nota").value);

    //Validando data ingresada
    if(codigo1.trim() != ""){
        if(nombre1.trim() != ""){
            if(isNaN(nota1) == false){
                miJSON.estudiantes.push({"codigo":codigo1,"nombre":nombre1,"nota":nota1});
                var fila = document.getElementById("tabla_estudiantes").insertRow(1);
                fila.insertCell(0).innerHTML = codigo1;
                fila.insertCell(1).innerHTML = nombre1;
                fila.insertCell(2).innerHTML = nota1;
            } else {
                alert("La nota ingresada no es un numero.");
                document.getElementById("nota").focus();
            }
        } else {
            alert("Falta ingresar el nombre del alumno.");
            document.getElementById("nombre").focus();
        }
    }else {
        alert("Falta ingresar el codigo del alumno.");
        document.getElementById("codigo").focus();
    }
    
}

function prom(){ //Funcion que se ejecuta al dar clic en el boton Mostrar Promedio
    calcularPromedio(miJSON);
}

function notaMayor(){ //Funcion que se ejecuta al dar clic en el boton Mostrar Nota Mayor
    calcularNotaMayor(miJSON);
} 

function notaMenor(){ //Funcion que se ejecuta al dar clic en el boton Mostrar Nota Menor
    calcularNotaMenor(miJSON);
}

/******* Funcion que calcula el promedio de notas *******/
function calcularPromedio(json){
    var suma = 0;
    var promedio = 0;
    var total_alumnos = json.estudiantes.length;

    for(var i=0; i<json.estudiantes.length; i++){
        suma += parseFloat(json.estudiantes[i].nota);
    }
    
    promedio = suma/total_alumnos;
    alert("El promedio de notas de los alumnos registrados es de: "+ promedio);
}

/***** Funcion que calcula la nota mayor de los alumnos ingresados *****/
function calcularNotaMayor(json){
    var nota_mayor = 0;
    
    for(var i=0; i<json.estudiantes.length; i++){
        if(nota_mayor < parseFloat(json.estudiantes[i].nota)){
            nota_mayor = parseFloat(json.estudiantes[i].nota);
        }else{
            console.log("La nota mayor se mantiene en: "+nota_mayor);
        }
    }

    alert("La nota mayor de los alumnos registrados es: "+nota_mayor);
}

/***** Funcion que calcula la nota menos de los alumnos ingresados *****/
function calcularNotaMenor(json){
    var nota_menor = 100000;

    for(var i=0; i<json.estudiantes.length; i++){
        if(nota_menor > parseFloat(json.estudiantes[i].nota)){
            nota_menor = parseFloat(json.estudiantes[i].nota);
        } else {
            console.log("La nota menor se mantiene en: "+nota_menor);
        }
    }

    alert("La nota menor de los alumnos registrados es: "+nota_menor);
}