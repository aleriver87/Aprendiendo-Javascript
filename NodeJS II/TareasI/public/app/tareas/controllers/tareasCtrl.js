angular.module('Teamapp').controller('tareasCtrl', function($scope, TareasService){
	var checkeados = [];

	$scope.tareas = [];
	$scope.item_master = {descripcion : "",  fecha : "", finalizada : false};
	$scope.date = new Date();


	$scope.guardar = function(){
		TareasService.guardarTareas({descripcion : $scope.item.descripcion})
		.then(function (response){
			if (response.data.success) {
				$scope.tareas.push(response.data.tarea);
				angular.copy($scope.item_master, $scope.item);
			}
		});
	}

	$scope.enviar_finalizadas = function(){
		//Saco solo los ids
		var ids = _.pluck(checkeados,'_id');
		TareasService.guardarFinalizadas({ids : ids})
		.then(function (response){
			_.each(response.data, function(item){
				var item = item;
					_.remove($scope.tareas, function(tarea){
					return tarea._id === item._id;
				});

			});
			
		});
	}

	

	TareasService.getTareas()
	.then(function (response){
		_.each(response.data, function(item){
			if (item.finalizada.estado == false) {
				$scope.tareas.push(item);
			}
		});
	});


	$scope.$watchCollection("tareas | filter : {finalizada : {estado : true}}", function(newv, old){
		checkeados = newv;
	});
});