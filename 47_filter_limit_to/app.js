var app = angular.module('app', []);

app.controller('LimitController', ['$scope', function($scope)
{
    $scope.arrayAngka = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    $scope.arrayHuruf = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ];
    $scope.angka      = 0123456789;
    $scope.huruf      = 'abcdefghij';

    $scope.batasArrayAngka = 5;
    $scope.batasArrayHuruf = 7;
    $scope.batasAngka      = 6;
    $scope.batasHuruf      = 3;
}]);