<?php
// connection avec mysqli
try {
    $db = new mysqli(
    'localhost','root','','utilisateurs');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

// on prépare 
$usersStatement = $db->query('SELECT * FROM utilisateurs');

// on fetch
while($utilisateurs = $usersStatement->fetch_assoc()) {
    $data[] = $utilisateurs;
};

//sortie en json
echo json_encode($data);