var app = angular.module('app', []);

app.controller('anchorScrollController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll)
{
    $scope.scrollUmur = function()
    {
        $location.hash('umur');

        $anchorScroll();
    };
}]);