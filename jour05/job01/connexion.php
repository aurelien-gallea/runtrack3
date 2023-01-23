<?php
    session_start();
    
    if(!empty($_POST['email']) && !empty($_POST['password'])) {
        require_once('src/loginBDD.php');
        $requete = $bdd->prepare('SELECT * FROM utilisateurs');
        $requete->execute();
        $email = htmlspecialchars($_POST['email']);
        $pass = htmlspecialchars($_POST['password']);
        $count = 0;

        while($resultat = $requete->fetch()) {
            
            if($resultat['email'] == $email && $resultat['password'] == $pass) {
                // connexion ok
                $count++;
                setcookie('prenom', htmlspecialchars($resultat['prenom']),time()+3600 );
                header('location:index.php');
                exit();
            }    
        }
        if($count!=1) {
                echo "mauvais mdp/login";
        }
        
    }
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
</head>
<body>
    <h1>Connexion</h1>
    <form action="connexion.php" method="post">
        <p>
            <label for="email">Email :</label>
            <input type="email" name="email" id="email" required>
        </p>
        <p>
            <label for="password">Mot de passe</label>
            <input type="password" name="password" id="password" required>
        </p>
        <p>
            <input type="submit" value="Se connecter">
        </p>
    </form>
</body>
</html>