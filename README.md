# AluraONE-challenge-amigoSecreto
Minha resolução do challenge "amigo secreto", da formação Iniciante em Programação G8, da Alura ONE

Além das funções `adicionarAmigo()`, `sortearAmigo()` (dos botões no HTML) e da função `atualizarListaAmigos()` (sugerida pelo Trello)
adicionei a função `inserirLiPessoa(indice, lista)`, já que eu a utilizava duas vezes no código, apenas com índice e listas diferentes.
```
// Função para inserir um elemento li com o nome de uma pessoa do array pessoas
function inserirLiPessoa(indice, lista){
    let novoLi = document.createElement('li');                  // Cria um elemento li
    let nomePessoa = document.createTextNode(pessoas[indice]);  // Cria o nó de texto (pessoa do índice)
    novoLi.appendChild(nomePessoa);                             // Insere o nó de texto no li
    lista.insertAdjacentElement('beforeend',novoLi);            // Insere o li antes do final da ul
}
```
Você pode checar o código completo no arquivo `app.js`.
