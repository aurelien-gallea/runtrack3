const body = document.querySelector('body');
const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", 
                    "ArrowDown", "ArrowLeft", "ArrowRight",
                    "ArrowLeft","ArrowRight", "b", "a"];

let checkCode = [];
let count=0;

body.addEventListener('keyup', (e) => {
    
    let code = e.key;
    checkCode.push(code);
    
    if (checkCode.length == 10) {
        for (let i = 0; i < konamiCode.length; i++) {
            if (konamiCode[i] === checkCode[i]) {
                count++;
            } else {
                break;
            }   
        }
        if(count === checkCode.length) {
            body.style.background = "linear-gradient(0.25turn, #275FA0,#FFCA4B)";
        }
        return checkCode = [];
    } 
    return count = 0;
    
    
    
});