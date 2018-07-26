var miApp = angular.module('miApp', ['ngRoute', 'ngAnimate']);

miApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pagina-inicio.html',
            controller: 'controllerInicio'
        })
        .when('/acercaDe', {
            templateUrl: 'pagina-acercaDe.html',
            controller: 'controllerAcercaDe'
        })
        .when('/contactenos', {
            templateUrl: 'pagina-contactenos.html',
            controller: 'controllerContactenos'
        });

});
