app.controller('ContadorController', function ($scope) {

    $scope.total = 0;

    $scope.incrementar = function () {
        $scope.total++;
    }

    
});