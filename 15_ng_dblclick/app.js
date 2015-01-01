var app = angular.module('app', []);

app.controller('DblClickController', ['$scope', function($scope)
{
	$scope.angka = 1;

	$scope.kali = function()
	{
		$scope.angka *= 2;
	}
}]);