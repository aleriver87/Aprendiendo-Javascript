'use strict'

var weatherApp = angular.module('weatherAppControllers', []);

weatherApp.controller('forecastController', function($scope){
    $scope.cities = [
        {
            code: '3687238',
            name: 'Cartagena'
        },
        {
            code: '3688689',
            name: 'Bogotá'
        },
        {   
            code: '3674962',
            name: 'Medellín'
        },
        {
            code: '5128581',
            name: 'New York'
        },
        {
            code: '6094817',
            name: 'Ottawa'
        },
        {
            code: '3911925',
            name: 'La Paz'
        },
        {
            code: '2634715',
            name: 'Miami'
        }
    ]
});