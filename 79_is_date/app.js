var app = angular.module('app', []);

app.controller('IsDateController', ['$scope', function($scope)
{
    var string = '12-03-2015';

    console.log('string:', string);
    console.log('is date?', angular.isDate(string));

    var date = new Date(2015, 03, 12);

    console.log('date:', date);
    console.log('is date?', angular.isDate(date));
}]);