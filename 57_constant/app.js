var app = angular.module('app', []);

app.controller('ConstantController', ['$scope', 'baseUrl', function($scope, baseUrl)
{
    $scope.baseUrl = baseUrl;
}]);

app.constant('baseUrl', 'http://site.dev');