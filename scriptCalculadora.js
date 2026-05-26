const tela = document.getElementById('tela');

function appendValue(value) {
    tela.value += value;
}

function limpar() {
    tela.value = '';
}

function calculate() {
    try {
        // A função eval() lê a string e resolve a matemática automaticamente
        if (tela.value !== '') {
            tela.value = eval(tela.value);
        }
    } catch (error) {
        // Se houver algum erro de digitação (ex: 5++5), ele avisa
        tela.value = 'Erro';
        setTimeout(() => {
            limpar();
        }, 1500); // Limpa a tela de erro após 1.5 segundos
    }
}
