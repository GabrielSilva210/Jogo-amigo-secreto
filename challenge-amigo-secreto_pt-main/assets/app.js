let listaDeAmigos = [];
let lista = document.getElementById('listaAmigos');
let inputNomeInserido = document.getElementById('amigo');
let resultado = document.getElementById('resultado');
let resetButton = document.getElementById('reset');

// Detecta o Enter no campo de texto
inputNomeInserido.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        adicionarAmigo(); // Chama a função adicionarAmigo
    }
});

function adicionarAmigo() {
    let nameFriend = inputNomeInserido.value.trim();
    if (nameFriend === '') {
        alert('Informe o nome do amigo.');
        return;
    }

    if (listaDeAmigos.includes(nameFriend)) {
        alert('Amigo já adicionado.');
        return;
    }

    listaDeAmigos.push(nameFriend);
    atualizarLista();
    inputNomeInserido.value = '';
    
    // Ativa o botão de "Novo Jogo" após adicionar o primeiro amigo
    resetButton.removeAttribute('disabled');
}

function atualizarLista() {
    lista.innerHTML = '';

    listaDeAmigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }
    let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

    resultado.innerHTML = `<li> O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

function limparLista() {
    listaDeAmigos = [];
    atualizarLista();
    resultado.innerHTML = '';
}

// Função para reiniciar o jogo
function resetGame() {
    // Limpa todos os dados
    listaDeAmigos = [];
    atualizarLista();
    resultado.innerHTML = '';
    inputNomeInserido.value = '';
    
    // Desabilita o botão de "Novo Jogo" após reiniciar
    resetButton.setAttribute('disabled', 'true');
}
