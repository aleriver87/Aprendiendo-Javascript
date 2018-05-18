'use strict';
//Variables de controladores de nuestra aplicación: carAppControllers

var carAppControllers = angular.module('carAppControllers', []);

//Generar el contoller equivalente a la funcion
/*carAppControllers.controller('CarListCtrl', ['$scope', function($scope, Car){
    //alert("Welcome to CarApp 1");
    $scope.cars = [{
        "name":"NEW QASHQAI",
        "snippet":"MADE WITH YOU IN MIND TO GIVE YOU THE HIGHEST QUALITY"
    },
    {
        "name":"Veloster",
        "snippet":"SPORTY LIKE A COUPE. ROOMY LIKE A SEDAN."
    },
    {
        "name":"Navarra",
        "snippet":"The Navara is all about freedom including freedom of choice."
    }];
}]);*/
carAppControllers.controller('CarListCtrl', ['$scope', 'Car', 
function($scope, Car){
    $scope.cars = Car.getCars();
}]);