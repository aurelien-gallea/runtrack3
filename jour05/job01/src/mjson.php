<?php
require_once('loginBDD.php');

// on recupère tous les mails dans un fichier json
$mails = $bdd->prepare('SELECT email FROM utilisateurs');
$mails->execute();
$tabmails= $mails->fetchAll(PDO::FETCH_ASSOC);
    
echo json_encode($tabmails);