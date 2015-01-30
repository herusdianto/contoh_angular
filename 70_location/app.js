var app = angular.module('app', []);

app.controller('LocationController', ['$scope', '$location', function($scope, $location)
{
    $scope.abs      = $location.absUrl();
    $scope.url      = $location.url();
    $scope.protocol = $location.protocol();
    $scope.host     = $location.host();
    $scope.port     = $location.port();
    $scope.path     = $location.path();
    $scope.search   = $location.search();

    $scope.rubahUrl = function()
    {
        $location.url('fungsi_url');

        $scope.url = $location.url();
        $scope.path = $location.path();
    };

    $scope.rubahPath = function()
    {
        $location.path('fungsi_path');

        $scope.url  = $location.url();
        $scope.path = $location.path();
    };

    $scope.rubahSearch = function()
    {
        $location.search('fungsi_search', ['a', 'b', 'c']);

        $scope.url    = $location.url();
        $scope.path   = $location.path();
        $scope.search = $location.search();
    };
}]);