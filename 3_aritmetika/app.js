var app = angular.module('app', []);

app.controller('AritmetikaController', ['$scope', function($scope)
{
	$scope.pengurangan = function(angka_1, angka_2)
	{
		return angka_1 - angka_2;
	}

	$scope.perkalian = function(angka_1, angka_2)
	{
		return angka_1 * angka_2;
	}
}]);