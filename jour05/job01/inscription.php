<?php
session_start();

require_once('src/loginBDD.php'); // on appel la bdd 


if(!empty($_POST['prenom']) && !empty($_POST['nom']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['password-confirm'])) {
    if($_POST['password'] == $_POST['password-confirm']) {
       
   

        // verification d'un doublon email
        $email = htmlspecialchars($_POST['email']);
		$req = $bdd->prepare('SELECT COUNT(*) AS nombre FROM utilisateurs WHERE email = ?');
		$req->execute([$email]);

       
		while($resultat=$req->fetch()) {

			if($resultat['nombre'] != 0) {
				header('location: ./inscription.php/?error=true&message=Email déjà existant');
			} else {
              // on ajoute l'utilisateur
            $requete = $bdd->prepare('INSERT INTO utilisateurs(nom, prenom, email, password) VALUES (?,?,?,?)');
            $requete->execute([$_POST['nom'], $_POST['prenom'], $_POST['email'], $_POST['password'] ]);
            setcookie('prenom', htmlspecialchars($_POST['prenom']), time()+3600);

            
            header('location: connexion.php');
            exit();  
            }
		}       
    }
}
    
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/style.css">
    <title>Inscription</title>
</head>
<body>
    <h1>Inscription</h1>
    <form id="form-inscription" action="inscription.php" method="post">
        <p>
            <label for="nom">Nom :</label>    
            <input type="text" name="nom" id="nom" >
            <div><span class="alert nom">nom incorrect</span></div>
        </p>
        <p>
            <label for="prenom">Prénom :</label>
            <input type="text" name="prenom" id="prenom" >
            <div><span class="alert prenom">prenom incorrect</span></div>

        </p>
        <p>
            <label for="email">Votre Email :</label>
            <input type="email" name="email" id="email" >
            <div><span class="alert mail">format du mail incorrect</span></div>
            <div><span class="alert mail-exist">mail déjà existant</span></div>

        </p>
        <p>
            <label for="password">Mot de passe :</label>
            <input type="password" name="password" id="password" >
            <div><span class="alert password">Le mot de passe doit contenir: 8 caractères, dont une majuscule, une minuscule, un chiffre et un caractère spécial</span></div>

        </p>
        <p>
            <label for="password-confirm">Confirmer votre Mot de passe :</label>
            <input type="password" name="password-confirm" id="password-confirm">
            <div><span class="alert password-confirm">Les mots de passes doivent-être identique</span></div>

        </p>
        <p>
            <input class="btn" type="submit" value="S'inscrire">
        </p>
    </form>
    <?php if(isset($_GET['error']) && isset($_GET['message'])) { ?>
                    
        <div>
            <div>
                <b><?php echo htmlspecialchars($_GET['message']); ?></b>
            </div>
        </div>

    <?php } ?>
    <script src="inscription.js"></script>
</body>
</html>
<?php

