document.getElementById("form-cadastro").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;
    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const confsenha = document.getElementById("confsenha");

    document.querySelectorAll(".error").forEach(error => error.textContent = "");
    if (nome.value.length < 4 || nome.value.length > 15) {
        setError(nome, "O nome deve ter entre 4 e 14 caracteres.");
        isValid = false;
    }

    if (!validateEmail(email.value)) {
        setError(email, "Preencha corretamente o seu e-mail.");
        isValid = false;
    }

    if (senha.value.length < 5) {
        setError(senha, "A senha deve ter no mínimo 5 caracteres.");
        isValid = false;
    }
    if (confsenha.value === "") {
        setError(confsenha, "Por favor, confirme sua senha.");
        isValid = false;
    } else if (senha.value !== confsenha.value) {
        setError(confsenha, "As senhas não coincidem.");
        isValid = false;
    }

    if (isValid) {
        alert("Cadastro realizado com sucesso!");
    }
});

function setError(element, message) {
    const errorElement = element.nextElementSibling;
    errorElement.textContent = message;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

