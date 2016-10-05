angular.module('App', ['serviceApp'])
	.controller('ctrlFiltrosArray', ['$scope', 'filtrosArray',function($scope,filtrosArray){

		$scope.objIteracion = { filtroUnico : null,
								eliminarPosicion : ""
							};
		$scope.arregloFiltrado = [];

		var arrVerduras = [
			  {
			    "nombre": "Zanahoria",
			    "cantidad": "1Kg"
			  },
			  {
			    "nombre": "Espinacas",
			    "cantidad": "2Kg"
			  },
			  {
			    "nombre": "Lechuga",
			    "cantidad": "50gr"
			  },
			  {
			    "nombre": "Cebolla",
			    "cantidad": "1Kg"
			  },
			  {
			    "nombre": "Espinacas",
			    "cantidad": "1.5Kg"
			  },
			  {
			    "nombre": "Cebolla",
			    "cantidad": "126gr"
			  },
			  {
			    "nombre": "Zanahoria",
			    "cantidad": "100gr"
			  },
			  {
			    "nombre": "Espinacas",
			    "cantidad": "900gr"
			  },
			  {
			    "nombre": "Lechuga",
			    "cantidad": "126gr"
			  },
			  {
			    "nombre": "Cebolla",
				"cantidad": "100gr"
			  }
			];

		$scope.arregloVerduras = angular.toJson(arrVerduras, true);

		$scope.EliminarPosicion = function(){

			var posicion = $scope.objIteracion.eliminarPosicion
			if( posicion!== "" && posicion <= arrVerduras.length){
				$scope.arregloFiltrado = angular.toJson(filtrosArray.eliminarPosicion(arrVerduras, posicion), true);
			}else{
				console.log("No existe esa Posicion");
			}
		};

		$scope.$watch('objIteracion.filtroUnico', function(filtro) {
        	//$scope.modelAsJson = angular.toJson(model, true);
        	if(filtro !== null){
        		console.log(filtro);
        		$scope.arregloFiltrado = angular.toJson(filtrosArray.unicos(arrVerduras, filtro), true);
        	}
    	}, true);
	}])
