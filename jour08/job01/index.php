<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>job01</title>
</head>
<body>
    <header>
        <a href="#">Accueil</a>
        <a href="#">Inscription</a>
        <a href="#">Connexion</a>
        <a href="#">Rechercher</a>
        <h1 class="text-5xl font-bold underline" >Hello world!</h1>
    </header>
    <form action="index.php">
        <div>
            <input type="text" name="prenom" id="prenom" placeholder="Prénom">
        </div>
        <div>
            <input type="text" name="nom" id="nom" placeholder="Nom">
        </div>
        <div>
            <input type="text" name="adresse" id="adresse" placeholder="adresse">
        </div>
        <div>
            <input type="email" name="email" id="email" placeholder="email">
        </div>
        <h3>civilité:</h3>
        <div>
            <input type="radio" name="sexe" id="homme" value="homme">
            <label for="homme">Homme</label>
        </div>
        <div>
            <input type="radio" name="sexe" id="femme" value="femme">
            <label for="femme">Femme</label>
        </div>
        <div>
            <input type="password" name="password" id="password" placeholder="Mot de passe">
            <input type="password" name="password2" id="password2" placeholder="Confirmer votre Mot de passe ">
        </div>
        <div>
            <button type="submit">Valider</button>
        </div>
    </form>
    <footer>
        <a href="#">Accueil</a>
        <a href="#">Inscription</a>
        <a href="#">Connexion</a>
        <a href="#">Rechercher</a>
    </footer>
</body>
</html>