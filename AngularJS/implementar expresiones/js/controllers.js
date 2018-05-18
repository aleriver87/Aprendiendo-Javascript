'use strict';

var smartExpressionApp = angular.module('oneTimeAppController',[]);

smartExpressionApp.controller('SingleBindController', function($scope){
    var counter = 0;

    $scope.names = [
        {
            name:'Diana'
        },
        {
            name:'Alejandra'
        },
        {
            name:'Ivonne'
        },
        {
            name:'Sofia'
        },
        {
            name:'Helmer'
        },
        {
            name:'José'
        }
    ];

    $scope.nextName = function(clickEvent){ //Función para ver las expresiones - cuenta la longitud
        $scope.name = $scope.names[counter % $scope.names.length].name;
        counter++;
    }
})