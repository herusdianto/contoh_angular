var app = angular.module('app', []);

app.controller('CustomDirectiveController', ['$scope', function($scope)
{
    $scope.profil = {
        nama: 'Heru Rusdianto',
        umur: 21
    };

    $scope.siswa = [
        {
            nama: 'Andien',
            umur: 35
        },
        {
            nama: 'Heru',
            umur: 21
        },
        {
            nama: 'Ibnu',
            umur: 12
        },
        {
            nama: 'Raisa',
            umur: 27
        }
    ];
}]);

app.directive('heruProfil', function()
{
    return {
        restrict: 'A',
        template: '<p>Nama saya: {{ profil.nama }}. Umur saya: {{ profil.umur }}</p>'
    };
});

app.directive('heruSiswa', function()
{
    return {
        restrict: 'E',
        templateUrl: 'data-siswa.html'
    };
});

app.directive('heruClass', function()
{
    return {
        restrict: 'C',
        template: '<p>Ini merupakan custom directive menggunakan class.</p>'
    };
});

app.directive('heruComment', function()
{
    return {
        restrict: 'M',
        template: '<p>Ini merupakan custom directive menggunakan komentar.</p>',
        replace: true,
    };
});