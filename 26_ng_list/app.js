var app = angular.module('app', []);

app.controller('ListController', ['$scope', function($scope)
{
    $scope.nama = ['Heru', 'Ibnu'];
    $scope.umur = ['21 | 12'];
}]);