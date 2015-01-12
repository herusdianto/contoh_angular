var app = angular.module('app', []);

app.controller('IncludeController', ['$scope', function($scope)
{
    $scope.loaded = function()
    {
        alert('lain.html loaded');
    };
}]);