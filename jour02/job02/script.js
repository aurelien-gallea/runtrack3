function showHide() {

    const btn = document.querySelector("#button");
    const article = document.createElement('article');
    article.textContent = "L'important n'est pas la chute, mais l'atterrissage";
    document.body.prepend(article);
    let e= true;
    btn.addEventListener('click', () => {
        
        if (e == true) {
            article.style.display = "none";
            return e = false;
        } else {
            article.style.display = "block";
            return e = true;
        }
    });
}
showHide();
