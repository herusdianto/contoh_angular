var app = angular.module('app', []);

app.controller('PesanController', ['$scope', '$log', function($scope, $log)
{
    $scope.pesan = 'Buka console browser, kemudian klik tombol di bawah.';

    $scope.logGeneral = function(pesan)
    {
        $log.log(pesan);
    };

    $scope.logInfo = function(pesan)
    {
        $log.info(pesan);
    };

    $scope.logWarning = function(pesan)
    {
        $log.warn(pesan);
    };

    $scope.logError = function(pesan)
    {
        $log.error(pesan);
    };
}]);