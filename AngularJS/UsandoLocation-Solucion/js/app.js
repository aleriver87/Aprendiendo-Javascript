var miApp = angular.module('miApp', ['ngRoute']);
 

miApp.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl : "vistas/inicio.html",
        controller : "controllerInicio"
    })
      .when("/listaEmpleados", {
        templateUrl : "vistas/listaEmpleados.html",
        controller : "controllerListaEmpleados"
    })
    .when("/registroEmpleado", {
        templateUrl : "vistas/registroEmpleado.html",
        controller : "controllerRegistroEmpleado"
    })


    .otherwise({ reditrectTo : "/" });
})