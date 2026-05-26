// Variáveis globais para acumular os valores entre os cliques
let totalPessoas = 0;
let pessoasMaisDe50 = 0;

// Variáveis regra de 10 a 20 anos
let somaAlturas10a20 = 0;
let contadorPessoas10a20 = 0;

function rodar() {
    // Captura os elementos de input do HTML
    const inputIdade = document.getElementById('idadePessoa');
    const inputAltura = document.getElementById('alturaPessoa');
    const inputPeso = document.getElementById('pesoPessoa');

    // Converte os valores para números
    let idade = parseInt(inputIdade.value);
    let altura = parseFloat(inputAltura.value);
    let peso = parseFloat(inputPeso.value);

    // Validação
    if (isNaN(idade) || isNaN(altura) || isNaN(peso)) {
        alert("Por favor, preencha todos os campos com valores válidos!");
        return; 
    }

    // Somatórias e Filtros

    // Regra 1: Pessoas com mais de 50 anos
    if (idade >= 50) {
        pessoasMaisDe50 += 1;
    }

    // Regra 2: Média das alturas APENAS para quem tem entre 10 e 20 anos
    // && (E) para garantir que a idade atenda aos dois critérios ao mesmo tempo
    if (idade >= 10 && idade <= 20) {
        somaAlturas10a20 += altura;
        contadorPessoas10a20++;
    }

    // Contador geral de registros
    totalPessoas++;

    // 5. Limpa todos os campos para o próximo produto
    inputIdade.value = "";
    inputAltura.value = "";
    inputPeso.value = "";
    inputIdade.focus(); 

    alert("Pessoa adicionada com sucesso!");
}

function calcular() {
    // Validação caso o usuário clique em calcular sem adicionar ninguém
    if (totalPessoas === 0) {
        alert("Adicione pelo menos uma pessoa!");
        return;
    }

    // Captura as divs do HTML onde o resultado será exibido
    const divMediaV = document.getElementById('mediaV');
    const divLucro = document.getElementById('lucro');

    // Inicializa a variável da média
    let mediaAltura10a20 = 0;

    // Só calcula a média se houver pelo menos 1 pessoa cadastrada na faixa de 10 a 20 anos
    // Isso evita o erro de divisão por zero
    if (contadorPessoas10a20 > 0) {
        mediaAltura10a20 = somaAlturas10a20 / contadorPessoas10a20;
        divMediaV.innerHTML = `<p>Média das alturas (10 a 20 anos):<br><strong>${mediaAltura10a20.toFixed(2)} m</strong></p>`;
    } else {
        divMediaV.innerHTML = `<p>Média das alturas (10 a 20 anos):<br><strong>Nenhuma pessoa inserida nessa faixa</strong></p>`;
    }

    // Injeta o resultado dos maiores de 50 anos
    divLucro.innerHTML = `<p>Pessoas com mais de 50 anos:<br><strong>${pessoasMaisDe50}</strong></p>`;
}

function novo() {
    // Reseta todas as variáveis de contagem
    totalPessoas = 0;
    pessoasMaisDe50 = 0;
    somaAlturas10a20 = 0;
    contadorPessoas10a20 = 0;

    // Limpa os textos da tela
    document.getElementById('mediaV').innerHTML = "";
    document.getElementById('lucro').innerHTML = "";
}