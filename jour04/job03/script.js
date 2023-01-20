const id = document.querySelector("#id");
const nom = document.querySelector("#nom");
const select = document.querySelector("select");
const btn = document.querySelector("#filtrer");
const body = document.querySelector('body');
const p = document.createElement('p');

function jsonValueKey(url,id,nom,select) {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {

        // filtrer par numéro de pokedex / par nom / par type
        const infoPkmn = `ID : ${response[key].id} | Nom : ${response[key].name.french} | type : ${response[key].type} | stats: ${JSON.stringify(response[key].base)}<br>`;
        
        for (const key in response) {
            if(response[key].id == id) { // par id
                p.innerHTML += infoPkmn;   
            }
            if(response[key].name.french == nom) { // par nom
                p.innerHTML += infoPkmn;
            }
            if(response[key].type.includes(select)) { // par type
                p.innerHTML += infoPkmn;
            }
        }
    })
    .catch((error) => console.log(error));
}

btn.addEventListener("click", () => {   
  jsonValueKey("pokemon.json",id.value,nom.value,select.value);
});
