var app = angular.module('app', []);

app.controller('ForeachController', ['$scope', function($scope)
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

    $scope.namaSiswa = [];

    $scope.getNama = function()
    {
        angular.forEach($scope.siswa, function(value, key)
        {
            $scope.namaSiswa.push(value.nama);
        });
    };
}]);