'use strict'

var cronoApp = angular.module('cronoApp',['cronoAppControllers'
                             ]).directive('ngClock', function(){
                                 return {
                                     restric: 'A',
                                     scope: {
                                         getTime: "="
                                     },
                                     template: '<div class="sparkline title clock-font">{{getTime}}</div>',
                                     controller: ['$scope','$interval', function($scope, $interval){
                                        $interval(function(){
                                            var time = moment(new Date()).format("hh:mm:ss");
                                            $scope.getTime = time;
                                        }, 1000);
                                     }]
                                 };
                             });