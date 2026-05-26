// Variáveis Globais 
let listagem = 0;
let contador = 1;
let convidados = []; // Array para salvar os convidados e mostrar no final

// Elementos do HTML para manipular
const divLimite = document.getElementById('passo-limite');
const divCadastro = document.getElementById('passo-cadastro');
const divResultado = document.getElementById('passo-resultado');
const statusContagem = document.getElementById('status-contagem');

// Função para definir o total de convidados
function definirLimite() {
    const inputLimite = document.getElementById('input-limite');
    listagem = parseInt(inputLimite.value);

    if (isNaN(listagem) || listagem <= 0) {
        alert("Por favor, insira um número válido maior que 0.");
        return;
    }

    // Avança para a tela de cadastro
    divLimite.classList.add('oculto');
    divCadastro.classList.remove('oculto');
    atualizarStatus();
}

// Função que substitui o "enquanto" do Portugol
function adicionarConvidado() {
    const inputNome = document.getElementById('input-nome');
    const inputIdade = document.getElementById('input-idade');

    let nome = inputNome.value.trim();
    let idade = parseInt(inputIdade.value);

    if (nome === "" || isNaN(idade)) {
        alert("Preencha todos os campos!");
        return;
    }

    // Salva o convidado atual no array
    convidados.push({ nome: nome, idade: idade });

    // Limpa os campos para o próximo
    inputNome.value = "";
    inputIdade.value = "";

    // Incrementa o contador
    contador++;

    // Verifica se já atingiu o limite (Fimenquanto)
    if (contador > listagem) {
        mostrarListaFinal();
    } else {
        atualizarStatus();
    }
}

function atualizarStatus() {
    statusContagem.innerText = `Cadastrando convidado ${contador} de ${listagem}`;
}

// Função para mostrar o resultado final
function mostrarListaFinal() {
    divCadastro.classList.add('oculto');
    divResultado.classList.remove('oculto');

    const listaUl = document.getElementById('lista-final');
    listaUl.innerHTML = ""; // Limpa a lista anterior

    // Mostra os convidados na tela com for
    for (let i = 0; i < convidados.length; i++) {
        const convidado = convidados[i];

        const li = document.createElement('li');
        li.innerText = `👤 ${convidado.nome} - ${convidado.idade} anos`;
        listaUl.appendChild(li);
    }
}
    /* 
    convidados.forEach(convidado => {
        const li = document.createElement('li');
        li.innerText = `👤 ${convidado.nome} - ${convidado.idade} anos`;
        listaUl.appendChild(li);
    });
} */

// Função para resetar o app
function reiniciar() {
    contador = 1;
    convidados = [];
    document.getElementById('input-limite').value = "";
    divResultado.classList.add('oculto');
    divLimite.classList.remove('oculto');
}