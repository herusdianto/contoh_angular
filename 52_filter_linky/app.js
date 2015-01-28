var app = angular.module('app', ['ngSanitize']);

app.controller('LinkyController', ['$scope', function($scope)
{
    $scope.teks = "Hai, ini teks yang panjangggggggggggggggggggg sekali. Jika memiliki pertanyaan silahkan hubungi saya di https://facebook.com/heru.cimay atau di twitter (jarang aktif) https://twitter.com/HeruBrondong. Terimakasih.";
}]);