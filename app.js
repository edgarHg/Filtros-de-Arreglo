angular.module('App', ['serviceApp'])
	.controller('ctrlFiltrosArray', ['$scope', 'filtrosArray',function($scope,filtrosArray){
		var arrVerduras = [
			{
				nombre: 'Zanahoria',
				cantidad: "1Kg"
			}, {
				nombre: 'Espinacas',
				cantidad: "2Kg"
			}, {
				nombre: 'Lechuga',
				cantidad: "50gr"
			}, {   
				nombre: 'Cebolla',
				cantidad: "700gr"
			}, {
				nombre: 'Espinacas',
				cantidad: "1.5Kg"
			}, {
				nombre: 'Cebolla',
				cantidad: "120gr"
			}];

		$scope.arregloVerduras = angular.toJson(arrVerduras, true);
		$scope.arregloFiltrado = angular.toJson(filtrosArray.unicos(arrVerduras, 'nombre'), true);
	}])
