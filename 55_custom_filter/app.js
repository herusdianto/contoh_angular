var app = angular.module('app', []);

app.controller('CustomFilterController', ['$scope', function($scope)
{
    $scope.siswa = [
        {
            nama: 'Andien',
            umur: 15
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
            umur: 25
        }
    ];
}]);

app.filter('muda', function()
{
    return function(siswa, umur)
    {
        if(umur)
        {
            var muda = [];

            for (var i = 0; i < siswa.length; i++)
            {
                var dataSiswa = siswa[i];

                if (dataSiswa.umur <= umur)
                {
                    muda.push(dataSiswa);
                }
            }

            return muda;
        }

        return siswa;
    };
});