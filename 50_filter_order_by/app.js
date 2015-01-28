var app = angular.module('app', []);

app.controller('OrderController', ['$scope', function($scope)
{
    $scope.siswa = [
        {
            nama: 'Andien',
            umur: 35
        },
        {
            nama: 'Heru',
            umur: 21
        },
        {
            nama: 'Ibnu',
            umur: 12
        },
        {
            nama: 'Raisa',
            umur: 27
        }
    ];
    $scope.order   = 'nama';
    $scope.reverse = false;
}]);