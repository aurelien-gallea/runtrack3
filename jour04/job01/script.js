const btn = document.querySelector("#button");
const paragraphe = document.createElement('p');
const body = document.querySelector('body');


btn.addEventListener('click', () => {
    
    fetch("expression.txt")
        .then((response) => response.text())
        .then(response => {
            paragraphe.textContent = response;
            body.append(paragraphe);
        })
        .catch(error => console.log(error)); 
});

    