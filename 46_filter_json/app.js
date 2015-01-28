var app = angular.module('app', []);

app.controller('JsonController', ['$scope', function($scope)
{
    $scope.siswa = [
        {
            nama: 'Heru',
            umur: 21
        },
        {
            nama: 'Ibnu',
            umur: 12
        }
    ];
}]);