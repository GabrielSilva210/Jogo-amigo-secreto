🎲 Projeto: Amigo Secreto

Este projeto é um sistema simples para adicionar amigos a uma lista e sortear aleatoriamente um nome. Ele inclui validações para evitar entradas vazias e duplicadas.

📌 Funcionalidades

Adicionar amigos à lista
Garantir que o mesmo nome não seja adicionado mais de uma vez
Sortear um amigo aleatoriamente
Exibir o amigo sorteado
Contabilizar quantas vezes cada amigo foi sorteado
Limpar a lista e começar um novo jogo
Sortear até que todos os amigos da lista tenham sido sorteados: Agora, a função sorteia até que todos os nomes da lista sejam escolhidos, e o nome sorteado será retirado da lista para evitar repetições. Se a lista tiver 10 amigos, todos os 10 podem ser sorteados, mas cada nome será sorteado apenas uma vez.

🚀 Tecnologias Utilizadas

HTML para estruturação da página
CSS para estilização
JavaScript para interatividade e manipulação do DOM

🛠️ Como Executar o Projeto

Clone o repositório:

bash
Copy
Edit
git clone https://github.com/GabrielSilva210/Jogo-amigo-secreto.git
Acesse a pasta do projeto:

bash
Copy
Edit
cd sorteio-amigos
Abra o arquivo index.html em seu navegador.

📜 Como Usar

Digite o nome do amigo no campo de entrada.
Pressione Enter ou clique no botão "Adicionar".
Para sortear um nome, clique em Sortear.
Caso deseje recomeçar, clique no botão Novo Jogo.
⚠️ Possíveis Problemas e Soluções

Nome já adicionado
Problema: Se tentar adicionar um nome já presente na lista, um alerta será exibido.
Solução: Adicione apenas nomes que ainda não foram incluídos.

Todos os amigos já foram sorteados
Problema: Se não houver mais nomes disponíveis para sorteio, um alerta será exibido.
Solução: Clique em "Novo Jogo" para resetar a lista.

⚙️ Durante o desenvolvimento do projeto, alguns desafios foram enfrentados e superados:

Garantir que os nomes não sejam sorteados mais de uma vez:
A principal dificuldade foi implementar a lógica de sorteio de maneira que cada nome fosse sorteado apenas uma vez. Para isso, foi necessário criar uma função que removesse o nome sorteado da lista, garantindo que não houvesse repetições.

Validações de entrada de dados:
Implementar validações para impedir que nomes vazios ou duplicados fossem adicionados à lista. Esse processo exigiu atenção extra à manipulação do DOM e à exibição de alertas, a fim de garantir uma experiência de usuário sem erros.

Gerenciamento do estado da lista:
A funcionalidade de Novo Jogo, que reseta a lista e permite um novo sorteio, também trouxe desafios relacionados ao controle de estado. Foi importante garantir que a interface fosse limpa e a lista fosse reiniciada corretamente sem deixar dados indesejados.

Esses desafios contribuíram para o aprendizado e o aprimoramento das habilidades em manipulação de arrays, validação de entrada e interatividade no JavaScript.

Nota adicional: Coloquei os nomes em inglês para praticar e me acostumar com a forma de codar em inglês para o mercado de trabalho.
