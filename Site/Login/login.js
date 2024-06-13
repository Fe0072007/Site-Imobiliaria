function Cliente() {
    document.getElementById('identifierLabel').innerText = 'E-mail';
    document.getElementById('identificador').name = 'email';
    document.getElementById('identificador').type = 'email';
    document.getElementById('identificador').value = '';
    document.getElementById('identifier-error').style.display = 'none';
}

function Vendedor() {
    document.getElementById('identifierLabel').innerText = 'ID do Vendedor';
    document.getElementById('identificador').name = 'vendedorId';
    document.getElementById('identificador').type = 'text';
    document.getElementById('identificador').value = '';
    document.getElementById('identErro').style.display = 'none';
}

function Formulario() {
    let valido = true;

    const identificador = document.getElementById('identificador');
    const senha = document.getElementById('senha');
    const erroIdentificador = document.getElementById('identErro');
    const erroSenha = document.getElementById('senhaErro');

    if (identificador.name === 'email') {
        const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!padraoEmail.test(identificador.value)) {
            erroIdentificador.innerText = 'Preencha corretamente seu e-mail';
            erroIdentificador.style.display = 'block';
            valido = false;
        } else {
            erroIdentificador.style.display = 'none';
        }
    } else if (identificador.name === 'vendedorId') {
        if (identificador.value.length < 7 || identificador.value.length > 9) {
            erroIdentificador.innerText = 'O ID deve ter entre 7 e 9 dígitos';
            erroIdentificador.style.display = 'block';
            valido = false;
        } else {
            erroIdentificador.style.display = 'none';
        }
    }

    if (senha.value.length === 0) {
        erroSenha.innerText = 'Digite sua senha';
        erroSenha.style.display = 'block';
        valido = false;
    } else if (senha.value.length < 5) {
        erroSenha.innerText = 'A senha deve ter pelo menos 5 caracteres';
        erroSenha.style.display = 'block';
        valido = false;
    } else {
        erroSenha.style.display = 'none';
    }

    return valido;
}
