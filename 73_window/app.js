var app = angular.module('app', []);

app.controller('WindowController', ['$scope', '$window', function($scope, $window)
{
    $scope.nama = 'Heru Rusdianto';

    $scope.alert = function(nama)
    {
        $window.alert(nama);
    };
}]);