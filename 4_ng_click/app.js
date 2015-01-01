var app = angular.module('app', []);

app.controller('ClickController', ['$scope', function($scope)
{
	$scope.angka = 1;

	$scope.tambah = function()
	{
		++$scope.angka;
	}

	$scope.kurang = function()
	{
		--$scope.angka;
	}
}]);