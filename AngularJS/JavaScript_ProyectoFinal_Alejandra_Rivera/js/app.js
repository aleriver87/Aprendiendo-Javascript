'use strict';

var motoApp = angular.module('motoApp', [
	'ngRoute',
  'motoAppAnimations',
  'motoAppControllers',
  'motoAppServices'
]);


motoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/motorcycle', {
        templateUrl: 'partials/motorcycle-list.html',
        controller: 'motoListCtrl'
      }).
      when('/motorcycle/:motorcycleId', {
        templateUrl: 'partials/motorcycle-detail.html',
        controller: 'motoDetailCtrl'
      }).
      otherwise({
        redirectTo: '/motorcycle'
      });
  }]);