const body = document.querySelector('body');
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", 
                    "ArrowDown", "ArrowLeft", "ArrowRight",
                    "ArrowLeft","ArrowRight", "b", "a"];

let checkCode = [];
let count=0;

body.addEventListener('keyup', (e) => {
    
    let code = e.key;
    checkCode.push(code);
    
    for (let i = 0; i < checkCode.length; i++) {
        if (konamiCode[i] === checkCode[i]) {
            count++;
        } else {
            checkCode= [];
            break;
        }   
    }    
    if (checkCode.length == 10) {       
        if(count === checkCode.length) {
            body.style.background = "linear-gradient(0.25turn, #275FA0,#FFCA4B)";
        }    
    }
    count = 0;
});