angular.module('serviceApp', [])
	.factory('filtrosArray', [function(){
		return { 
			unicos: function(arreglo,filtro){
			    var arr = {},i=0;len=arreglo.length;

			    for ( i; i < len; i++ )
			    	arr[arreglo[i][filtro]] = arreglo[i];
			    	arreglo = new Array();

			    for ( var key in arr )
			    	arreglo.push(arr[key]);

				return arreglo;
			}
		}
	}])