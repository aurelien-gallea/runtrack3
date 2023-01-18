function sommeNombrePremiers(a,b) {
   let resultat = a + b;
   let diviseur=0;
   let nombrePremier=false;
   
    for (let i=resultat; i <=1000; i++) { 
        for (let f=1; f <= i; f++) { 
            
            if(i % f == 0) {
                diviseur++;
            
            }
        }
        if(diviseur == 2) {
            nombrePremier = true;
            
        }
    }
    if (nombrePremier === true) {
        return resultat;
    } else {
        return false;
    }
}

console.log(sommeNombrePremiers(2,5));