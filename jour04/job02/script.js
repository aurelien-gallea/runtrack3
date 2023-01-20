function jsonValueKey(url,key) {

    fetch(url)
        .then((response) => response.json())
        .then(response => {
            if (key == "name") key = response.name; 
            if (key == "address") key = response.address; 
            if (key == "city") key = response.city; 
            if (key == "nb_staff") key = response.nb_staff; 
            if (key == "creation") key = response.creation; 

            console.log(key);
            
        })
        .catch(error => console.log(error));
}
jsonValueKey("adresse.json","address");