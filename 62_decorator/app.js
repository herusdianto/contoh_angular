var app = angular.module('app', []);

app.controller('DecoratorController', ['$scope', 'UserFactory', function($scope, UserFactory)
{
    $scope.nama      = UserFactory.getNama();
    $scope.umur      = UserFactory.getUmur();

    $scope.namaBalik = UserFactory.balikNama();
    $scope.umurBalik = UserFactory.balikUmur();
}]);

app.factory('UserFactory', function()
{
    var nama = 'Heru Rusdianto';
    var umur = 21;

    return {
        setNama: function(namaBaru)
        {
            nama = namaBaru;
        },
        getNama: function()
        {
            return nama;
        },
        setUmur: function(umurBaru)
        {
            umur = umurBaru;
        },
        getUmur: function()
        {
            return umur;
        }
    };
});

app.config(function($provide)
{
    $provide.decorator('UserFactory', ['$delegate', function($delegate)
    {
        $delegate.balikNama = function()
        {
            return $delegate.getNama().split('').reverse().join('');
        };

        $delegate.balikUmur = function()
        {
            return $delegate.getUmur().toString().split('').reverse().join('');
        };

        return $delegate;
    }]);
});