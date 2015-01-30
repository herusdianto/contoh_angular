var app = angular.module('app', []);

app.controller('IntervalController', ['$scope', '$interval', function($scope, $interval)
{
    $scope.angka = 0;

    $interval(function()
    {
        $scope.angka++;
    }, 1000, 10);
}]);