const id = document.querySelector("#id");
const nom = document.querySelector("#nom");
const select = document.querySelector("select");
const btn = document.querySelector("#filtrer");
const p = document.createElement('p');
const body = document.querySelector('body');

function jsonValueKey(url,id,nom,select) {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {

        // filtrer par nom et par type
        
        for (const key in response) {
            if(response[key].id == id) { // par id
                p.innerHTML += `ID : ${response[key].id} | Nom : ${response[key].name.french} | type : ${response[key].type} | stats: ${JSON.stringify(response[key].base)}<br>`;
                body.append(p);
            }

            if(response[key].name.french == nom) { // par nom
                p.innerHTML += `ID : ${response[key].id} | Nom : ${response[key].name.french} | type : ${response[key].type} | stats: ${JSON.stringify(response[key].base)}<br>`;
                body.append(p);
            }

            if(response[key].type.includes(select)) { // par type
                p.innerHTML += `ID : ${response[key].id} | Nom : ${response[key].name.french} | type : ${response[key].type} | stats: ${JSON.stringify(response[key].base)}<br>`;
                body.append(p);
            }
        }
    })
    .catch((error) => console.log(error));
}

btn.addEventListener("click", () => {
    
  jsonValueKey("pokemon.json",id.value,nom.value,select.value);
});
