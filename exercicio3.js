// Função para gerar a matriz 7x7 com números aleatórios
function gerarMatrizAleatoria() {
    let matriz = [];
    for (let i = 0; i < 7; i++) {
        matriz[i] = [];
        for (let j = 0; j < 7; j++) {
            matriz[i][j] = Math.floor(Math.random() * 20) + 1; // Números aleatórios de 1 a 20
        }
    }
    return matriz;
}

// Função para calcular a soma dos elementos da matriz
function somaMatriz(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

// Função para executar o código e exibir o resultado
function executarExercicio() {
    let matriz = gerarMatrizAleatoria();
    console.table(matriz);  // Exibe a matriz gerada no console
    console.log("Soma dos elementos da matriz:", somaMatriz(matriz));  // Exibe a soma dos elementos
}

// Evento para o botão "Executar"
document.getElementById('runBtn').addEventListener('click', executarExercicio);

// Função para exibir ou ocultar o código
function showCode() {
    const codeContainer = document.getElementById('codeContainer');
    if (codeContainer.style.display === 'none') {
        codeContainer.style.display = 'block';
    } else {
        codeContainer.style.display = 'none';
    }
}