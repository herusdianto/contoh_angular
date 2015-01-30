var app = angular.module('app', []);

app.controller('LowercaseController', ['$scope', function($scope)
{
    $scope.nama = 'HERU RUSDIANTO';

    $scope.lower = angular.lowercase($scope.nama);
}]);