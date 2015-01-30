var app = angular.module('app', []);

app.controller('TimeoutController', ['$scope', '$timeout', function($scope, $timeout)
{
    $scope.angka = 0;

    $timeout(function()
    {
        $scope.angka++;
    }, 1000);
}]);