var app = angular.module('app', []);

app.controller('HaloController', ['$scope', function($scope)
{
	$scope.teks = {
		halo: 'Halo Dunia!'
	}
}]);