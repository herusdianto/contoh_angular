var app = angular.module('app', []);

app.controller('KeyEventController', ['$scope', function($scope)
{
    $scope.keyup    = 0;
    $scope.keypress = 0;
    $scope.keydown  = 0;

    $scope.keyupEvent = function()
    {
        ++$scope.keyup;
    }

    $scope.keypressEvent = function()
    {
        ++$scope.keypress;
    }

    $scope.keydownEvent = function()
    {
        ++$scope.keydown;
    }
}]);