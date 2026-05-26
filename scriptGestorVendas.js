// Variáveis globais para acumular os valores entre os cliques
let contador = 0;
let somaCusto = 0;
let somaVenda = 0;
let lucroTotal = 0;

function rodar() {
    // 1. Captura os elementos de input do HTML
    const inputCusto = document.getElementById('custoProduto');
    const inputValor = document.getElementById('valorProduto');

    // 2. Converte os valores para (float)
    let custo = parseFloat(inputCusto.value);
    let valor = parseFloat(inputValor.value);

    // 3. Validação: verifica se os campos estão vazios ou não são números
    if (isNaN(custo) || isNaN(valor)) {
        alert("Por favor, preencha todos os campos com valores válidos!");
        return; // Para a execução da função aqui
    }

    // 4. Somatórias e Cálculos (Equivalente ao seu loop no VisualG)
    somaCusto += custo;
    somaVenda += valor;

    let lucro = valor - custo;
    lucroTotal += lucro;

    // Incrementa o contador de produtos adicionados
    contador++;

    // 5. Limpa os campos para o usuário digitar o próximo produto
    inputCusto.value = "";
    inputValor.value = "";
    inputCusto.focus(); // Coloca o cursor de digitação de volta no primeiro campo

    alert("Produto adicionado com sucesso!");
}

function calcular() {
    // Validação caso o usuário clique em calcular sem adicionar nenhum produto
    if (contador === 0) {
        alert("Adicione pelo menos um produto antes de calcular!");
        return;
    }

    // Cálculos das médias finais
    let mediaCusto = somaCusto / contador;
    let mediaVenda = somaVenda / contador;

    // Captura as divs onde o resultado será exibido
    const divMediaC = document.getElementById('mediaC');
    const divMediaV = document.getElementById('mediaV');
    const divLucro = document.getElementById('lucro');

    // Injeta o resultado formatado dentro das divs do HTML
    divMediaC.innerHTML = `<p>A média de custo é:<br><strong>R$ ${mediaCusto.toFixed(2)}</strong></p>`;
    divMediaV.innerHTML = `<p>A média de venda é:<br><strong>R$ ${mediaVenda.toFixed(2)}</strong></p>`;
    divLucro.innerHTML = `<p>O lucro total é:<br><strong>R$ ${lucroTotal.toFixed(2)}</strong></p>`;
}

function novo() {
    document.getElementById('mediaC').innerHTML = "";
    document.getElementById('mediaV').innerHTML = "";
    document.getElementById('lucro').innerHTML = "";
}