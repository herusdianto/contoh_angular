var app = angular.module('app', []);

app.controller('MouseEnterLeaveController', ['$scope', function($scope)
{
	$scope.mouseenter = {
		fired: false
	}

	$scope.mouseleave = {
		fired: false
	}

	$scope.mouseEnter = function()
	{
		$scope.mouseenter.fired = true;
		$scope.mouseleave.fired = false;
	}

	$scope.mouseLeave = function()
	{
		$scope.mouseleave.fired = true;
		$scope.mouseenter.fired = false;
	}
}]);