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
			},
			eliminarPosicion : function(arreglo, posicion){
				for(var i = posicion; i <= array.length - 1; i++){
					array.splice(i, 1, array[ i * 1 + 1 ]);
				}
				array.pop();
				return array;
			}
		}
	}])