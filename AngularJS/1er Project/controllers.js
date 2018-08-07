'use strict';

var carAppControllers = angular.module('carAppControllers',[]);

carAppControllers.controller('CarListCtrl', ['$scope',
function($scope){
    alert("Welcome to CarApp");
}]);