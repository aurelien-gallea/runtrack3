
function jourTravaille(jour,mois,annee) {
    let date = new Date(annee, mois-1, jour);
    let dateLocale = date.toLocaleString('fr-FR', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
        
    });
    let jourActuel = date.toLocaleString('fr-FR', { weekday: 'long'} );
  
    const joursFeries = [
        jourDeLan= new Date(2020, 0, 1).toLocaleString('fr-FR', {weekday:'long', year: 'numeric', month:'long', day:'numeric'}),
        paques= new Date(2020, 3, 13).toLocaleString('fr-FR', {weekday:'long', year: 'numeric', month:'long', day:'numeric'}),
        feteDuTravail= new Date(2020, 4, 1).toLocaleString('fr-FR', {weekday:'long', year: 'numeric', month:'long', day:'numeric'}),
        victoireAllies= new Date(2020, 4, 8).toLocaleString('fr-FR', {weekday:'long', year: 'numeric', month:'long', day:'numeric'}),
        ascension= new Date(2020, 4, 21).toLocaleString('fr-FR', {weekday:'long', year: 'numeric', month:'long', day:'numeric'}),
        pentecote= new Date(2020, 5, 1).toLocaleString('fr-FR', {weekday:'long', year: 'numeric', month:'long', day:'numeric'}),
        feteNationale= new Date(2020, 6, 14).toLocaleString('fr-FR', {weekday:'long', year: 'numeric', month:'long', day:'numeric'}),
        assomption= new Date(2020, 7, 15).toLocaleString('fr-FR', {weekday:'long', year: 'numeric', month:'long', day:'numeric'}),
        armisctice= new Date(2020, 10, 11).toLocaleString('fr-FR', {weekday:'long', year: 'numeric', month:'long', day:'numeric'}),
        noel= new Date(2020, 11, 25).toLocaleString('fr-FR', {weekday:'long', year: 'numeric', month:'long', day:'numeric'}),
    ]

    if (jourActuel == "samedi" || jourActuel == "dimanche")
    {
     console.log(`Non, ${dateLocale} est un week-end`);
    }
    else {

        let ferie=false;
        
        for (let i = 0; i < joursFeries.length; i++) {
            const dateCompare = joursFeries[i];
            if (dateCompare == dateLocale) {
                ferie = true;
            }
        }
        if (ferie == true) {
            console.log(`le ${dateLocale} est un jour férié`);
            
        } else {
            console.log(`Oui, ${dateLocale} est un jour travaillé`);

        }
    }    
}

jourTravaille(11,11,2020);
