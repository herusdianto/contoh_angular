var app = angular.module('app', []);

app.controller('FilterController', ['$scope', '$filter', function($scope, $filter)
{
    $scope.asli  = 'HERU RUSDIANTO';
    $scope.lower = $filter('lowercase')($scope.asli);
}]);