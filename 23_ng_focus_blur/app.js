var app = angular.module('app', []);

app.controller('FocusBlurController', ['$scope', function($scope)
{
    $scope.isFocus = false;

    $scope.focusEvent = function()
    {
        $scope.isFocus = true;

        $scope.pesan = 'Focus event fired.';
    }

    $scope.blurEvent = function()
    {
        $scope.isFocus = false;

        $scope.pesan = 'Blur event fired.';
    }
}]);