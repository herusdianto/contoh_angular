var app = angular.module('app', []);

app.controller('SubmitController', ['$scope', function($scope)
{
    $scope.submitForm = function()
    {
        alert("Nama anda: " + $scope.nama);
    }
}]);