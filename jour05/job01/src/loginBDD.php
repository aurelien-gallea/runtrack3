<?php
try {
        $bdd = new PDO('mysql:localhost=root;dbname=utilisateurs;charset=utf8', 'root','');
    } catch (Exception $e) {
        die( 'erreur : ' . $e->getMessage());
    }




