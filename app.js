const friendsList = [];
const availableFriends = [];

const list = document.getElementById("listaAmigos");
const inputDrawnName = document.getElementById("amigo");
const result = document.getElementById("resultado");
const resetButton = document.getElementById("reset");
const drawnButton = document.getElementById("drawnButton");

inputDrawnName.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addFriend();
  }
});

function toggleButton(button, enable) {
  if (!button) {
    return;
  }

  if (enable) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', 'true');
  }
}

function addFriend() {
  let nameFriend = inputDrawnName.value.trim();
  if (nameFriend === "") {
    alert("Informe o nome do amigo.");
    return;
  }

  let nameLower = nameFriend.toLowerCase();

  if (friendsList.some((amigo) => amigo.toLowerCase() === nameLower)) {
    alert("Amigo já adicionado.");
    return;
  }

  friendsList.push(nameFriend);
  availableFriends.push(nameFriend);
  updateList();
  inputDrawnName.value = "";
  inputDrawnName.focus();

  toggleButton(resetButton, true);
}

function updateList() {
  list.innerHTML = "";

  friendsList.forEach((amigo) => {
    let item = document.createElement("li");
    item.textContent = amigo;
    list.appendChild(item);
  });
}

function drawnFriend() {
  if (friendsList.length === 0) {
    alert("Adicione pelo menos um amigo à lista antes de sortear.");
    return; 
  }

  if (availableFriends.length === 0) {
    alert("Todos os amigos já foram sorteados. Clique em 'Novo Jogo' para recomeçar.");
    return;
  }

  let randomIndex = Math.floor(Math.random() * availableFriends.length);
  let raffleFriend = availableFriends.splice(randomIndex, 1)[0];

  result.innerHTML = `<li> Seu amigo secreto é: <strong>${raffleFriend}</strong></li>`;

  if (availableFriends.length === 0) {
    toggleButton(drawnButton, false);
  }
}

function resetGame() {
  friendsList.length = 0;
  availableFriends.length = 0;
  
  updateList();
  result.innerHTML = "";
  inputDrawnName.value = "";

  toggleButton(drawnButton, true);
  toggleButton(resetButton, false);
}

updateList();