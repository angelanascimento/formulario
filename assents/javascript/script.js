var nome = document.querySelector('#nome');
var txtNome = document.querySelector('#txt-nome');
var mensagem = document.querySelector('#mensagem');
var txtMensagem = document.querySelector('#txt-mensagem');
var email = document.querySelector('#email');
var nomeValido = false;
var mensagemValida = false;

function validarNome() {
    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido!';
        txtNome.style.color = 'rgb(255, 150, 4)';
        txtNome.style.margin = '0.5rem 9rem'
    }
    else {
        txtNome.innerHTML = 'Nome Válido!';
        txtNome.style.color = 'rgb(103, 158, 40)';
        txtNome.style.margin = '0.5rem 9rem';
        nomeValido = true;
    }
}

function validarMensagem() {
    if(mensagem.value.length > 500) {
        txtMensagem.innerHTML = 'Quantidade de caracteres excedida';
        txtMensagem.style.color = 'rgb(255, 150, 4)';
        txtMensagem.style.margin = '0.5rem 9rem';
    }
    else {
        txtMensagem.innerHTML = 'No máximo 500 caracteres';
        txtMensagem.style.color = 'rgb(103, 158, 40)';
        txtMensagem.style.margin = '0.5rem 9rem';
        mensagemValida = true;
    }
}
    
function validarEnvio() {
    if(nomeValido != false && mensagemValida != false && email.value.length > 0) {
        alert('Formulário enviado com sucesso!')
    }
    else {
        alert('Preencha o formulário corretamente antes de enviar')
    }
}