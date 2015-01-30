var app = angular.module('app', []);

app.controller('UppercaseController', ['$scope', function($scope)
{
    $scope.nama = 'heru rusdianto';

    $scope.upper = angular.uppercase($scope.nama);
}]);