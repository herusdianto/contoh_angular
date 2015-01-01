var app = angular.module('app', []);

app.controller('MouseMoveController', ['$scope', function($scope)
{
	$scope.angka = 1;

	$scope.mouseMove = function()
	{
		++$scope.angka;
	}
}]);