var app = angular.module('app', []);

app.controller('IsElementController', ['$scope', '$document', function($scope, $document)
{
    var element = angular.element($document.find('p'));

    console.log('element:', element);

    var isElement = angular.isElement(element);

    console.log('is element?', isElement);
}]);