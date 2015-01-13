var app = angular.module('app', []);

app.controller('RepeatController', ['$scope', function($scope)
{
    $scope.siswa = [
        { nama: 'Heru', umur: 21 },
        { nama: 'Ibnu', umur: 12 },
        { nama: 'Andien', umur: 16 },
        { nama: 'Maulana', umur: 8 },
        { nama: 'Anika', umur: 18 }
    ];
}]);