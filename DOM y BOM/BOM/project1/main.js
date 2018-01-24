function convertir(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var resultado;
    var opcion = parseInt(document.getElementById("opciones").value);

    if(validar(numero1)){
        switch(opcion){
            case 0:
                alert("Por favor elija una opci&oacute;n");
            break;

            case 1:
                resultado = numero1+273.15;
            break;

            case 2:
                resultado = numero1*(1.8)+32;
            break;

            case 3:
                resultado = ((numero1-32)*5)/9;
            break;

            case 4:
                resultado = ((((numero1-32)*5))/9)+273.15;
            break;

            case 5:
                resultado = numero1-273.15;
            break;

            case 6:
                resultado = ((((numero1-273.15)*9))/5)+32;
            break;

            default:
                alert("Opcion indicada es invalida");
            break;
        }
        document.getElementById('resultado').value = resultado;
    } else {
        alert("Formato incorrecto de grados");
        document.getElementById("opcion").selectedIndex="0";
    }
    
}

//funcion para validar datos ingresados
function validar(num1){
    if(isNaN(num1)){
        return false;
    } else {
        return true;
    }
}