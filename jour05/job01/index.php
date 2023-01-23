<?php
    session_start();
    if(isset($_POST['deco'])) {
        setcookie('prenom', '', time()-1);
        unset($_COOKIE['prenom']);
    }
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
</head>
<body>
     <?php
    if(!empty($_COOKIE['prenom'])) { 
     echo "<p>Bonjour ". htmlspecialchars($_COOKIE['prenom']) . "</p>";?>
     <form action="index.php" method="post">
        <input type="submit" value="Deconnexion" name="deco">
     </form>
    <?php } else { ?>
     <a href="connexion.php">Se connecter</a>
     <a href="inscription.php">S'inscrire</a>
     <?php } ?> 
</body>
</html>