var app = angular.module('app', []);

app.controller('WatchController', ['$scope', function($scope)
{
    $scope.nama           = 'Heru Rusdianto';
    $scope.dirubah        = 0;
    $scope.namaSebelumnya = null;
    $scope.namaSekarang   = null;

    $scope.$watch('nama', function(newValue, oldValue, scope)
    {
        scope.namaSekarang   = newValue;
        scope.namaSebelumnya = oldValue;
        scope.dirubah++;
    }, false);
}]);