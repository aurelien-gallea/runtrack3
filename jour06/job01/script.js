
const style =document.querySelector("#style");

window.addEventListener('resize', () => {
    
    if (window.matchMedia('(min-width:1920px)').matches){
        style.href = './style1.css';
    }
    if(window.matchMedia('(min-width: 1680px) and (max-width: 1920px)').matches) {
    style.href = './style2.css';
    }
    if(window.matchMedia('(min-width: 1280px) and (max-width: 1680px)').matches) {
        style.href = './style3.css';
    }
    if(window.matchMedia('(max-width: 1280px)').matches) {
        style.href = './style4.css';
    }
    
});

