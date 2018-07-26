'use strict';

var cronoApp = angular.module('cronoAppControllers',[]);

cronoApp.controller('clockController', function($scope){
    $scope.time = moment(new Date()).format("hh:mm:ss");

    $scope.getTimeEnlapse = function(){
        $scope.frozenTime = $scope.time;
    }
});