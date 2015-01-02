var app = angular.module('app', []);

app.controller('CopyCutPasteController', ['$scope', function($scope)
{
    $scope.copyEvent = function()
    {
        $scope.pesan = 'Copy event fired.';
    }

    $scope.cutEvent = function()
    {
        $scope.pesan = 'Cut event fired.';
    }

    $scope.pasteEvent = function()
    {
        $scope.pesan = 'Paste event fired.';
    }
}]);