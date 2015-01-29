var app = angular.module('app', []);

app.controller('ProviderController', ['$scope', 'Teks', function($scope, Teks)
{
    $scope.teks = Teks.getTeks();
}]);

app.provider('Teks', function()
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

app.config(['TeksProvider', function(TeksProvider)
{
    TeksProvider.setTeks('Ini teks dari config.');
}]);