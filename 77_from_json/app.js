var app = angular.module('app', []);

app.controller('FromJsonController', ['$scope', function($scope)
{
    $scope.json = '{ "nama": "Heru", "umur": "21" }';

    console.log('JSON String:', $scope.json);

    $scope.fromJSON = angular.fromJson($scope.json);

    console.log('fromJson():', $scope.fromJSON);
}]);