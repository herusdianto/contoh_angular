var app = angular.module('app', []);

app.controller('IsDefinedController', ['$scope', function($scope)
{
    var string = 'abcdef';

    console.log('string:', string);
    console.log('is defined?', angular.isDefined(string));

    var variabel = undefined;

    console.log('variabel:', variabel);
    console.log('is defined?', angular.isDefined(variabel));
}]);