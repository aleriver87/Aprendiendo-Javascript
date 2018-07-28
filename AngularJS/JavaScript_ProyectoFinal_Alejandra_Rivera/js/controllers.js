'use strict';

/* Controllers */

var motoAppControllers = angular.module('motoAppControllers', []);

motoAppControllers.controller('motoListCtrl', ['$scope', 'Moto',
  function($scope, Moto) {
    $scope.motos = Moto.query();
    $scope.orderProp = 'model';
  }]);

motoAppControllers.controller('motoDetailCtrl', ['$scope', '$routeParams', 'Moto',
  function($scope, $routeParams, Moto) {
    $scope.moto = Moto.get({motorcycleId: $routeParams.motorcycleId}, function(moto) {
      $scope.mainImageUrl = moto.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);