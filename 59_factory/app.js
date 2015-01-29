var app = angular.module('app', []);

app.controller('FactoryController', ['$scope', 'UserFactory', function($scope, UserFactory)
{
    $scope.nama = UserFactory.getNama();
    $scope.umur = UserFactory.getUmur();
}]);

app.factory('UserFactory', function()
{
    var nama = 'Heru Rusdianto';
    var umur = 21;

    return {
        getNama: function()
        {
            return nama;
        },
        getUmur: function()
        {
            return umur;
        }
    };
});