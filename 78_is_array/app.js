var app = angular.module('app', []);

app.controller('IsArrayController', ['$scope', function($scope)
{
    var object = { nama: "Heru", umur: "21" };

    console.log('Variable object:', object);
    console.log('Is Array?', angular.isArray(object));

    var array = ['Heru', 'Ibnu'];

    console.log('Variable array:', array);
    console.log('Is Array?', angular.isArray(array));
}]);