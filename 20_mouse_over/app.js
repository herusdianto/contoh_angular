var app = angular.module('app', []);

app.controller('MouseOverController', ['$scope', function($scope)
{
    $scope.angka_a = 0;
    $scope.angka_b = 0;

    $scope.mouseOverA = function()
    {
        ++$scope.angka_a;
    }

    $scope.mouseOverB = function()
    {
        ++$scope.angka_b;
        console.log('b')
    }
}]);