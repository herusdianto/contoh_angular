var app = angular.module('app', []);

app.controller('DateController', ['$scope', function($scope)
{
    $scope.tanggal = new Date;
}]);