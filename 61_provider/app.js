var app = angular.module('app', []);

app.controller('ProviderController', ['$scope', 'User', function($scope, User)
{
    $scope.teks = User.getTeks();
}]);

app.provider('User', function()
{
    var teks = 'Teks ini akan dirubah pada config.';

    return {
        setTeks: function(teksConfig)
        {
            teks = teksConfig;
        },
        $get: function()
        {
            return {
                getTeks: function()
                {
                    return teks;
                }
            };
        }
    };
});

app.config(['UserProvider', function(UserProvider)
{
    UserProvider.setTeks('Ini teks dari config.');
}]);