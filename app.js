//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista que vai armazenar os nomes
let amigos = [];

// Função para adicionar um novo amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    // Adiciona o nome na lista
    amigos.push(nome);

    // Atualiza a lista visual
    atualizarLista();

    // Limpa o campo de texto
    input.value = "";
    input.focus();
}

// Função para atualizar a lista de amigos exibida
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botão para remover alguém da lista
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.style.marginLeft = "10px";
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

// Função para remover amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    // Sorteia um índice aleatório
    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];

    const li = document.createElement("li");
    li.textContent = `🎉 O amigo secreto é: ${sorteado}`;
    resultado.appendChild(li);
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let contador = 0;
    let intervalo = setInterval(() => {
        // Mostra um nome aleatório a cada 200ms
        const indiceTemp = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `<li>⏳ Sorteando... ${amigos[indiceTemp]}</li>`;
        contador++;

        // Depois de 10 iterações (~2 segundos), mostra o sorteado final
        if (contador > 10) {
            clearInterval(intervalo);
            const indiceFinal = Math.floor(Math.random() * amigos.length);
            resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${amigos[indiceFinal]}</strong></li>`;
        }
    }, 200);
}

// Permitir adicionar com Enter
document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // evita recarregar a página
        adicionarAmigo();
    }
});
