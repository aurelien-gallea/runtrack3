function citation() {
    
    const citation= document.querySelector('#citation');
    const btn = document.querySelector('#button');
    btn.addEventListener('click', () => {
        console.log(citation.textContent);
    });
}

citation();