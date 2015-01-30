var app = angular.module('app', []);

app.controller('HttpController', ['$scope', '$http', function($scope, $http)
{
    $scope.url    = 'http://graph.facebook.com/heru.cimay';
    $scope.status = null;
    $scope.data   = {};

    $scope.request = function()
    {
        $http.get($scope.url)
             .error(function(data, status)
             {
                $scope.status = status;
                $scope.data   = data;
             })
             .success(function(data, status)
             {
                $scope.status = status;
                $scope.data   = data;
             });
    };
}]);