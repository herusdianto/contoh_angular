var app = angular.module('app', []);

app.controller('WatchCollectionController', ['$scope', function($scope)
{
    $scope.siswa =
    {
        nama: 'Heru',
        umur: 21
    };

    $scope.siswaSebelumnya = null;
    $scope.siswaSekarang   = null;

    $scope.$watchCollection('siswa', function(newValue, oldValue, scope)
    {
        scope.siswaSebelumnya = oldValue;
        scope.siswaSekarang   = newValue;
    }, true);
}]);