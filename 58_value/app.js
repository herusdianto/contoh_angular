var app = angular.module('app', []);

app.controller('ValueController', ['$scope', 'versi', function($scope, versi)
{
    $scope.versi = versi;
}]);

app.value('versi', 'v1.0');