var app = angular.module('app', ['ngSanitize']);

app.controller('HTMLController', ['$scope', function($scope)
{
    $scope.contHTML = '<p>Ini html dari controller.</p>';
}]);