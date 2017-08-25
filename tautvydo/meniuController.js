app.controller('meniuController', function($scope) {
    console.log('Meniu kontroleris veikia');
    $scope.meniu = [
        {'pavadinimas' :'Evaldas','adresas':'Evaldas.html'},
        {'pavadinimas' :'Tautvydas','adresas':'tautvydas.html'},
        {'pavadinimas' :'Paulius','adresas':'paulius.html'},
        {'pavadinimas' :'Gytis','adresas':'Gytis.html'},
        {'pavadinimas' :'Vytenis','adresas':'vytenis.html'},
        {'pavadinimas' :'Mantas','adresas':'mantas.html'},
        {'pavadinimas' :'Rytis','adresas':'Rytis.html'},
        {'pavadinimas' :'Andrius','adresas':'andrius.html'}
    ];
    $scope.matomumas=false;

});