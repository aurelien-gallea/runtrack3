const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    const tbody = document.querySelector('tbody');
    tbody.innerHTML="";
    fetch('users.php')
    .then(response => response.json())
    .then( response => {
        for (key in response) {        
            const tr = document.createElement('tr');
            tr.innerHTML = `<td> ${response[key].id} </td><td>${response[key].nom}</td><td>${response[key].prenom}</td><td>${response[key].email}</td>`;
            tbody.appendChild(tr);
    }
})
.catch(error => console.log(error)); 
    
});