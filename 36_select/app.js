var app = angular.module('app', []);

app.controller('SelectController', ['$scope', function($scope)
{
    $scope.pilihan = [
        { warna: 'red', border: 'black' },
        { warna: 'blue', border: 'black' },
        { warna: 'yellow', border: 'blue' },
        { warna: 'green', border: 'blue' },
        { warna: 'magenta', border: 'green' },
        { warna: 'maroon', border: 'green' },
    ];

    $scope.dipilih = $scope.pilihan[0];
}]);