const keylogger = document.querySelector('#keylogger');
const body      = document.querySelector('body');




keylogger.addEventListener('keydown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    keylogger.innerHTML += e.key + e.key;
    
});
body.addEventListener('keydown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    keylogger.innerHTML += e.key;
});