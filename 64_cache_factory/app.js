var app = angular.module('app', []);

app.controller('CacheFactoryController', ['$scope', '$cacheFactory', function($scope, $cacheFactory)
{
    $scope.cacheKeys = [];

    $scope.cache = $cacheFactory('id_siswa');

    $scope.cachePut = function(key, value)
    {
        if(key && value)
        {
            if($scope.cache.get(key) === undefined)
            {
                $scope.cache.put(key, value);

                if($scope.cacheKeys[key] === undefined)
                {
                    console.log($scope.cacheKeys[key]);
                    $scope.cacheKeys.push(key);
                }
            }
        }
    };

    $scope.cacheGet = function(key)
    {
        if($scope.cache.get(key) !== undefined)
        {
            return $scope.cache.get(key);
        }

        return '-';
    };

    $scope.cacheRemove = function(key)
    {
        if($scope.cache.get(key) !== undefined)
        {
            $scope.cache.remove(key);
        }
    };

    $scope.cacheRemoveAll = function()
    {
        $scope.cacheKeys = [];

        $scope.cache.removeAll();
    };

    $scope.cacheDestroy = function()
    {
        $scope.cacheKeys = [];

        $scope.cache.destroy();
    };
}]);