miApp.controller("controllerInicio", function controllerInicio($scope, $rootScope, $location) {


    $scope.irRegistroEmpleado = function() {

        $location.url("/registroEmpleado");

    }

    $scope.irListadoEmpleados = function() {

        if (localStorage.getItem("empleados") == null) {

            $rootScope.empleados = [];


        } else {

            $rootScope.empleados = JSON.parse(localStorage.getItem("empleados"));


        }


        $location.url("/listaEmpleados");
    }
})


miApp.controller("controllerRegistroEmpleado", function controllerRegistroEmpleado($scope, $rootScope, $location) {
    $scope.irIncio = function() {
        $location.url("/");
    }

    $scope.guardarEmpleado = function() {

        if (localStorage.getItem("empleados") == null) {

            $rootScope.empleados = [];


        } else {

            $rootScope.empleados = JSON.parse(localStorage.getItem("empleados"));


        }

        $rootScope.empleados.push({
            nombre: $scope.nuevoEmpleado.nombre,
            apellido: $scope.nuevoEmpleado.apellido,
            salario: $scope.nuevoEmpleado.salario,
            telefono: $scope.nuevoEmpleado.telefono,
            email: $scope.nuevoEmpleado.email
        });

        localStorage.setItem("empleados", JSON.stringify($rootScope.empleados));


        $scope.nuevoEmpleado = null;

    }


});

miApp.controller("controllerListaEmpleados", function controllerListaEmpleados($scope, $rootScope, $location) {


    $scope.irIncio = function() {

        $location.url("/");
    }

})
