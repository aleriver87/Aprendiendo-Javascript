'use strict';

var realTemApp = angular.module('realTemAppControllers', []);

//inyectar la dependencia Temp que contienen nuestro convertidor de temperatura que creamos en el services.js
realTemApp.controller('TempController', function($scope, Temp){ 
    $scope.tempInCelcius = 0.0;
    $scope.resultInFahrenheit = 0.0;
    $scope.resultInKelvins = 0.0;

    $scope.convertTemperatures = function(){
        $scope.resultInFahrenheit = Temp.celciusToFahrenheit($scope.tempInCelcius);
        $scope.resultInKelvins = Temp.celciusToKelvin($scope.tempInCelcius);
    }
});