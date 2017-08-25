app.controller('tabaiController', function($scope) {
    console.log('tabaiController veikia');
    $scope.activeTab = 3;

    $scope.tabai = [
        {
            'id': 1,
            'title':'Tab1',
            'content':'Turinys...'
        },
        {
            'id': 2,
            'title':'Tab2',
            'content':'Turinys...'
        },
        {
            'id': 3,
            'title':'Tab3',
            'content':'Turinys...'
        },
        {
            'id': 4,
            'title':'Tab4',
            'content':'Turinys...'
        },
        {
            'id': 5,
            'title':'Tab5',
            'content':'Turinys...'
        }
    ];

    $scope.changeTab = function(tab){
        $scope.activeTab = tab;
        console.log(tab);
    };

});