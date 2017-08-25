app.controller('meniuController', function($scope) {
    console.log('Meniu kontroleris veikia');
    $scope.meniu = [
        {'pavadinimas' :'Evaldas','adresas':'/Evaldas'},
        {'pavadinimas' :'Tautvydas','adresas':'/Tautvydas'},
        {'pavadinimas' :'Paulius','adresas':'/Paulius'},
        {'pavadinimas' :'Gytis','adresas':'/Gytis'},
        {'pavadinimas' :'Vytenis','adresas':'/Vytenis'},
        {'pavadinimas' :'Mantas','adresas':'/Mantas'},
        {'pavadinimas' :'Rytis','adresas':'/Rytis'},
        {'pavadinimas' :'Andrius','adresas':'/Andrius'}
    ];
});