<?php
// connection avec mysqli
try {
    $bdd = new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8', 'root', '');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

// on prépare 
$usersStatement = $bdd->prepare('SELECT * FROM utilisateurs');
$usersStatement->execute();

// on fetch
$utilisateurs = $usersStatement->fetchAll(PDO::FETCH_ASSOC);
    


//sortie en json
print json_encode($utilisateurs);