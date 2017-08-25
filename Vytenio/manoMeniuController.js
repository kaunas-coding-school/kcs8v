app.controller('manoMeniuController', function ($scope) {
    console.log('Meniu veikia')
    $scope.meniu = [
        {'pavadinimas' : 'Evaldas','adresas': 'Evaldas.html'},
        {'pavadinimas' : 'Tautvydas','adresas': 'tautvydas.html'},
        {'pavadinimas' : 'Paulius','adresas': 'paulius.html'},
        {'pavadinimas' : 'Gytis','adresas': 'Gytis.html'},
        {'pavadinimas' : 'Vytenis','adresas': 'vytenis.html'},
        {'pavadinimas' : 'Mantas','adresas': 'mantas.html'},
        {'pavadinimas' : 'Rytis','adresas': 'Rytis.html'},
        {'pavadinimas' : 'Andrius','adresas': 'andrius.html'}
    ];
});