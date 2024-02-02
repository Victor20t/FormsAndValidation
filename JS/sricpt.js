const form = document.querySelector("#form");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome está vazio
    if(inputName.value === ""){
        alert("Please, preencha your name");
        return;
    }

    if(inputEmail.value === "" || !isEmailValid(inputEmail.value)){
        alert('preencha o email');
        return;
    }

    if(!validatePassword(inputPassword.value, 8)){
        alert("A senha precisa ter no min 8 digitos");
        return;
    }

    if(jobSelect.value === ""){
        alert('escolha uma opção');
        return;
    }
form.submit();
});

// Função que valida e-mail

function isEmailValid(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}

function validatePassword(password, minDigits){
    if(password.length >= minDigits) {
        return true
    }
        return false
}