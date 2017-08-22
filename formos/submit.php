<?php
/**
 * Created by LenovoUser.
 * Crated at: 11/3/2016 8:34 PM
 */
$vardas = $_POST['vardas'];
$pastas = $_POST['pastas'];
$zinute = $_POST['zinute'];

$masyvas = ['vardas' => $vardas, 'pastas' => $pastas, 'zinute' => $zinute];

var_dump($masyvas);