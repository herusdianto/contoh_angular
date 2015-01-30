var app = angular.module('app', []);

app.run(function($templateCache)
{
    $templateCache.put('cache-template.html', 'Ini merupakan cache template.');
});