angular.module('Teamapp').controller('loginCtrl', function($scope, $http, $state, toastF, Session){
	$scope.master = {};

	$scope.signin = function(){
		var usuario = {username : $scope.usuario.username, password : $scope.usuario.password};
		Session.logIn(usuario)
		.then(function (response){
			console.log("entre al logIn del loginCTRL");
			if (response.data.success) {
				toastF.success('Iniciaste sesión correctamente!');
				$state.transitionTo('app.dashboard');
			}else{
				toastF.error('Error de autenticación, verifica tus datos!');
				$scope.usuario = angular.copy($scope.master);
				$scope.form.$setPristine();
			}
		});
	}


	Session.isLogged()
	.then(function(response){
		console.log("entre al isLogged del loginCTRL");
		var isLogged = response.data.isLogged;
		if (isLogged) {
			$state.go('app.dashboard');
		}
	});

});