var app = angular.module('app', []);

app.controller('ServiceController', ['$scope', 'UserService', function($scope, UserService)
{
    $scope.nama = UserService.getNama();
    $scope.umur = UserService.getUmur();
}]);

app.service('UserService', function()
{
    var nama = 'Heru Rusdianto';
    var umur = 21;

    this.getNama = function()
    {
        return nama;
    };

    this.getUmur = function()
    {
        return umur;
    };
});