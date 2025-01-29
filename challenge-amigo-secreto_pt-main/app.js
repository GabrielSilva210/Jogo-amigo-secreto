let friendsList = [];
let contadoresAmigos = {};
let sorteioRealizado = false;

let list = document.getElementById("listaAmigos");
let inputNomeInserido = document.getElementById("amigo");
let result = document.getElementById("resultado");
let resetButton = document.getElementById("reset");
let listAccountants = document.getElementById("contadores");
let adicionarButton = document.getElementById('adicionar');
let sortearButton = document.getElementById('sortear');

inputNomeInserido.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addFriend();
  }
});

adicionarButton.addEventListener("click", addFriend);

function toggleButton(button, enable) {
    if (enable) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', 'true');
    }
  }

function addFriend() {
  let nameFriend = inputNomeInserido.value.trim();
  if (nameFriend === "") {
    alert("Informe o nome do amigo.");
    return;
  }

  let nameLower = nameFriend.toLowerCase();

  if ( friendsList.some((amigo) => amigo.toLowerCase() === nameLower)) {
    alert("Amigo já adicionado.");
    return;
  }

   friendsList.push(nameFriend);
  atualizarLista();
  inputNomeInserido.value = "";

  toggleButton(resetButton, true);;
}

function atualizarLista() {
  list.innerHTML = "";

   friendsList.forEach((amigo) => {
    let item = document.createElement("li");
    item.textContent = amigo;
    list.appendChild(item);
  });

  atualizarContadores();
}

function atualizarContadores() {
  listAccountants.innerHTML = "";

  for (const amigo in contadoresAmigos) {
    let contadorItem = document.createElement("li");
    contadorItem.textContent = `${amigo}: ${contadoresAmigos[amigo]} sorteio(s)`;
    listAccountants.appendChild(contadorItem);
  }
}

function sortearAmigo() {
    if (sorteioRealizado) {
        alert("O sorteio já foi realizado. Clique em 'Novo Jogo' para começar novamente.");
        return;
      }

  if ( friendsList.length === 0) {
    alert("Adicione pelo menos um amigo para sortear.");
    return;
  }
  let amigoSorteado =
     friendsList[Math.floor(Math.random() *  friendsList.length)];

  result.innerHTML = `<li> O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;

  if (contadoresAmigos[amigoSorteado]) {
    contadoresAmigos[amigoSorteado]++;
  } else {
    contadoresAmigos[amigoSorteado] = 1;
  }

  atualizarContadores();

  sorteioRealizado = true;
  toggleButton(adicionarButton, false);
  toggleButton(sortearButton, false);
  
}

function limparLista() {
  friendsList.length = 0;
  atualizarLista();
  result.innerHTML = "";

  toggleButton(resetButton, false);
  sorteioRealizado = false;
}

function resetGame() {
  friendsList.length = 0;
  atualizarLista();
  result.innerHTML = "";
  inputNomeInserido.value = "";
  contadoresAmigos = {};
  atualizarContadores();

  toggleButton(adicionarButton, true);
  toggleButton(sortearButton, true);
  toggleButton(resetButton, false);

  sorteioRealizado = false;
}
