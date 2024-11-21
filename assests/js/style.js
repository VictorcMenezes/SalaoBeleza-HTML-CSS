/*------------ SHOW MENU-------------*/
const showMneu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    /*valida se se existe as variaveis*/
    if (toggle && nav) {
        /*aqui adiciono a class show-menu na div com a class nav__menu*/
        toggle.addEventListener('click', () => {
            /*adicina a class show-menu na div que tem o id nav-menu */
            nav.classList.toggle('show-menu')
        })
    }
}
showMneu('nav-toggle', 'nav')

/*------------ REMOVER MENU MOBILE -------------*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav')
    /*Quando um link ou o botão close for clicado a class show-menu será removido*/
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== DEIXA O LINK CLICADO COM A CLASS ACTIVE-LINK ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))
/*==================== MUDAR A COR DO HEADER ====================*/
function scrollHeader(){
    const scrollHeader = document.getElementById('header')
    if(this.scrollY >= 100) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)

document.addEventListener("DOMContentLoaded", function () {
    // Função para exibir uma mensagem de alerta
    function showAlert(message) {
        alert(message);
    }

    // Função para lidar com o envio do formulário de login
    function handleLoginFormSubmit(event) {
        event.preventDefault(); // Evitar que o formulário seja enviado

        // Aqui você pode adicionar a lógica de validação dos campos de entrada, verificar credenciais, etc.

        // Exemplo: validar se os campos de usuário e senha estão preenchidos
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username === "" || password === "") {
            showAlert("Por favor, preencha todos os campos.");
            return;
        }

        // Se a validação passar, você pode enviar os dados para o servidor ou realizar outras ações
        // Exemplo: enviar os dados para o servidor usando AJAX

        // Aqui você pode adicionar código para enviar os dados do formulário para o servidor
        // Por exemplo, usando XMLHttpRequest, Fetch API ou uma biblioteca como Axios

        // Exemplo de envio usando Fetch API
        fetch("url_do_seu_servidor/login", {
            method: "POST",
            body: JSON.stringify({ username: username, password: password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Erro ao fazer login.");
                }
            })
            .then(function (data) {
                // Aqui você pode lidar com a resposta do servidor após o login bem-sucedido
                console.log("Login bem-sucedido:", data);
            })
            .catch(function (error) {
                console.error("Erro ao fazer login:", error.message);
                showAlert("Erro ao fazer login. Por favor, tente novamente mais tarde.");
            });
    }

    // Adicionando evento de envio ao formulário de login
    var loginForm = document.querySelector(".login-form");
    loginForm.addEventListener("submit", handleLoginFormSubmit);

    // Adicionando eventos de clique aos links "Esqueci a senha" e "Cadastrar"
    var forgotPasswordLink = document.querySelector("#forgotPasswordLink");
    var registerLink = document.querySelector("#registerLink");

    forgotPasswordLink.addEventListener("click", function (event) {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para lidar com o link "Esqueci a senha"
        showAlert("Funcionalidade de recuperação de senha em desenvolvimento.");
    });

    registerLink.addEventListener("click", function (event) {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para lidar com o link "Cadastrar"
        showAlert("Funcionalidade de criação de conta em desenvolvimento.");
    });
});