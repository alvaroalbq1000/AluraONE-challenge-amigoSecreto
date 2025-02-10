/* Definição de Variáveis
// pessoas: array com as pessoas adicionadas
// inputAmigo: elemento input com id 'amigo' no HTML
// ulListaAmigos: elemento ul com id 'listaAmigos' no HTML
// ulResultado: elemento ul com id 'resultado' no HTML
*/
let pessoas = [];
let inputAmigo = document.getElementById('amigo');
let ulListaAmigos = document.getElementById('listaAmigos');
let ulResultado = document.getElementById('resultado');

// Função para inserir um elemento li com o nome de uma pessoa do array pessoas
function inserirLiPessoa(indice, lista){
    let novoLi = document.createElement('li');                  // Cria um elemento li
    let nomePessoa = document.createTextNode(pessoas[indice]);  // Cria o nó de texto (pessoa do índice)
    novoLi.appendChild(nomePessoa);                             // Insere o nó de texto no li
    lista.insertAdjacentElement('beforeend',novoLi);            // Insere o li antes do final da ul
}

// Função para atualizar a lista ul 'listaAmigos' no HTML com os li de cada amigo
function atualizarListaAmigos(){
    ulListaAmigos.innerHTML = '';   // Limpa todos os elementos da lista ul (reseta)
    for (i = 0; i < pessoas.length; i++){   // Percorre o array pessoas
        inserirLiPessoa(i, ulListaAmigos);  // Chama a função para inserir o li com a pessoa do índice
    }
}

// Função para adicionar amigo ao clicar no botão correspondente
function adicionarAmigo(){
    if (inputAmigo.value != ''){        // Verificação se não há nada no input 'amigo'
        pessoas.push(inputAmigo.value); // Coloca na array pessoas o valor no input 'amigo'
        atualizarListaAmigos();         // Chama a função para atualizar a lista no HTML
        inputAmigo.value = '';          // Limpa o valor no input 'amigo'
    }else{
        alert('Por favor, insira um nome.'); // Se o input 'amigo' estiver vazio ele alerta
    }
}

// Função para sortear amigo ao clicar no botão correspondente
function sortearAmigo(){
    ulResultado.innerHTML = ''; // Limpa todos os elementos da lista ul (reseta)
    if (pessoas.length != 0){   // Verificação se não há nada no array pessoas
        let indiceAmigo = Math.floor(Math.random() * pessoas.length);   // Gera o índice aleatório do amigo
        inserirLiPessoa(indiceAmigo, ulResultado);  // Chama a função para inserir o li com a pessoa do índice
    }else{
        alert('Por favor, insira amigos');  // Se o array pessoas estiver vazio ele alerta
    }
}

