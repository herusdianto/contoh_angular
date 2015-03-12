var app = angular.module('app', []);

app.controller('FromJsonController', ['$scope', function($scope)
{
    var json = '{ "nama": "Heru", "umur": "21" }';

    console.log('JSON String:', json);

    var fromJSON = angular.fromJson(json);

    console.log('fromJson():', fromJSON);
}]);