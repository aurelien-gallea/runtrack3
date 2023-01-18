function addOne() {

    const btn = document.querySelector('#button');
    const p   = document.querySelector('#compteur');
    let count= 1;
    btn.addEventListener('click', () => {
        p.innerHTML = count++ ;
    });
}
addOne();