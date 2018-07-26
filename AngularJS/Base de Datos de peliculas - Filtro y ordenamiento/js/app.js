'use strict';

/* App Module */
/* se crea el modulo del aplicativo, el cual usaremos para guardar nuestra lista */
var moviesBDapp = angular.module('moviesBDapp', [])
.run(function ($rootScope){  // En lugar de utilizar $scope como se hace en controladores, utilizaremos $rootScope, debido a que estamos en la raiz de nuestro aplicativo
	$rootScope.orderProp = "name";
    $rootScope.reverse = false;
    
    //Nuestra lista de peliculas
    $rootScope.movies = [
        {
            name: 'The Shawshank Redemption',
            director: 'Frank Darabont',
            review: 9.3,
            publishYear: 1994
        },
        {
            name: 'Pulp Fiction',
            director: 'Quentin Tarantino',
            review: 8.9,
            publishYear: 1995
        },
        {
            name: 'Interstellar',
            director: 'Christopher Nolan',
            review: 8.9,
            publishYear: 2014
        },
        {
            name: 'The Matrix',
            director: 'Andy Wachowski',
            review: 8.7,
            publishYear: 1999
        },
        {
            name: 'City of God',
            director: 'Fernando Meirelles',
            review: 9.5,
            publishYear: 2011
        },
        {
            name: 'Forrest Gump',
            director: 'Robert Zemeckis',
            review: 8.8,
            publishYear: 2002
        },
        {
            name: 'Saving Private Ryan',
            director: 'Steven Spielberg',
            review: 8.6,
            publishYear: 1998
        }
    ];
});

