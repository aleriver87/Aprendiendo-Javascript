'use strict';

var carListApp = angular.module('carListAppController', []);
carListApp.controller('ListController', function($scope){
    $scope.appTitle = "CarListApp 2014";
    $scope.formHeader = "Agregar un carro a tu increíble lista.";
    $scope.deleteText = "Eliminar";
    $scope.addText = "Agregar";
    $scope.formTextBrand = "Marca";
    $scope.formTextYear = "Año";

    $scope.brand;
    $scope.year;

    $scope.cars = [{
        brand:"BMW M4 Coupe",
        year: '2014'
    },
    {
        brand:"Chevrolet Convert Stingray",
        year: '2013'
    },
    {
        brand:"Toyota Yaris Hatchback",
        year: '2016'
    },
    {
        brand:"McLaren F1",
        year: '2010'
    }];

    $scope.addCar = function(){
        var car = {
            brand: $scope.brand,
            year: $scope.year
        };

        $scope.cars.push(car);
    };

    $scope.deleteCar = function(idx){
        $scope.cars.splice(idx, 1);
    }
})