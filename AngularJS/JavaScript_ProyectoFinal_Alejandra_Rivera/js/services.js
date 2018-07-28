'use strict';

var motoAppServices = angular.module('motoAppServices', ['ngResource']);

motoAppServices.factory('Moto', ['$resource',
  function($resource){
    return $resource('motorcycle/:motorcycleId.json', {}, {
      query: {method:'GET', params:{motorcycleId:'motorcycles'}, isArray:true}
    });
  }]);
