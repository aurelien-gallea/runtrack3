const nom= document.querySelector("#nom");
const prenom= document.querySelector("#prenom");
const email= document.querySelector("#email");
const password= document.querySelector("#password");
const password2= document.querySelector("#password-confirm");
const form = document.querySelector('#form-inscription');
const btn = document.querySelector(".btn");
btn.disabled =true;
btn.classList.add('not');
const alertNom = document.querySelector(".nom");
const alertPrenom = document.querySelector(".prenom");
const alertMail = document.querySelector(".mail");
const alertMailExist = document.querySelector(".mail-exist");
const alertPass= document.querySelector(".password");
const alertPass2= document.querySelector(".password-confirm");
const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/;
const regexPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

nom.addEventListener("keyup", () => {
    if(nom.value.length < 2 ) {
        nom.classList.add("red");
        nom.classList.remove("green");
        alertNom.style.visibility = "visible";
    } else {
        nom.classList.add("green");
        nom.classList.remove("red");
        alertNom.style.visibility = "hidden";
    }
});

prenom.addEventListener('keyup', () => {
    if(prenom.value.length < 2 ) {
        prenom.classList.add("red");
        prenom.classList.remove("green");
        alertPrenom.style.visibility = "visible";
    } else {
        prenom.classList.add("green");
        prenom.classList.remove("red");
        alertPrenom.style.visibility = "hidden";
    } 
});

email.addEventListener('keyup', () => {
    if(regexMail.test(email.value)) {
        alertMail.style.visibility = "hidden";
        fetch('./src/mjson.php')
        .then(response => response.json())
        .then( response => {
            for (key in response) { 
                    
            if (response[key].email == email.value) {
                email.classList.add("orange");
                email.classList.remove("green", "red");
                alertMailExist.style.visibility = "visible";
                btn.classList.add('not');
                btn.disabled=true;

                return;
            } else {
                email.classList.add("green");
                email.classList.remove("red", "orange");
                alertMailExist.style.visibility = "hidden";
                btn.classList.remove('not');
                btn.disabled=false;

            }
            
        }
        })
        .catch(error => console.log(error)); 
    } else {
        
        email.classList.remove("green","orange");
        email.classList.add("red");
        alertMail.style.visibility = "visible";
        btn.classList.add('not');
        btn.disabled=true;

    }
});

password.addEventListener('keyup', () => { // 8 caractères - 1MAj - 1chiffre - 1 carac spécial
    

    if (regexPass.test(password.value)) {
        password.classList.add("green");
        password.classList.remove("red");
        alertPass.style.visibility = "hidden";
        btn.classList.remove('not');
        btn.disabled=false;
    } else {
        password.classList.add("red");
        password.classList.remove("green");
        alertPass.style.visibility = "visible";
        btn.classList.add('not');
        btn.disabled=true;
    }
});

password2.addEventListener('keyup', () => {
    if(password.value == password2.value) {
        password2.classList.add("green");
        password2.classList.remove("red");
        alertPass2.style.visibility = "hidden";
        btn.classList.remove('not');
        btn.disabled=false;
    } else {
        password2.classList.add("red");
        password2.classList.remove("green");
        alertPass2.style.visibility = "visible";
        btn.classList.add('not');
        btn.disabled=true;

    } 
});

if(password.value != password2.value) {
    btn.classList.add('not');
    btn.disabled=true;
} else {
    btn.classList.remove('not');
    btn.disabled=false;
}