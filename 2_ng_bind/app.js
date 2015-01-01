var app = angular.module('app', []);

app.controller('BindController', ['$scope', function($scope)
{
	$scope.teks = {
		kalimat : 'Ini kalimat biasa.' 
	}
}]);