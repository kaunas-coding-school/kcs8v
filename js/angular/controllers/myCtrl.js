app.controller('myCtrl', function($scope) {
    console.log('myCtrl kontroleris veikia');
    $scope.matomumas=true;

    $scope.keistiMatomuma = function() {
        $scope.matomumas=!$scope.matomumas;
        console.log("Veikiam...");
    }

});