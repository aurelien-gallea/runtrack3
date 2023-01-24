const burger = document.querySelector('#burger');
const ul = document.querySelector('ul');
const a = document.querySelectorAll('a');

burger.addEventListener('click', ()=> {
    burger.style.display = "none";
    ul.style.display ="block";
});

ul.addEventListener('click', () => {
    ul.style.display = "none";
});