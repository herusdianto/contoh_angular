var app = angular.module('app', []);

app.controller('ChangeController', ['$scope', function($scope)
{
	$scope.changed = function()
	{
		alert('ng-change event fired!');
	}
}]);