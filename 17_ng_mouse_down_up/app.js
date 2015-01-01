var app = angular.module('app', []);

app.controller('MouseDownUpController', ['$scope', function($scope)
{
	$scope.mousedown = {
		fired: false
	}

	$scope.mouseup = {
		fired: false
	}

	$scope.mouseDown = function()
	{
		$scope.mousedown.fired = true;
		$scope.mouseup.fired = false;
	}

	$scope.mouseUp = function()
	{
		$scope.mouseup.fired = true;
		$scope.mousedown.fired = false;
	}
}]);