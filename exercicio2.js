// Função para gerar um valor aleatório entre min e max
function setValueRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função que executa o exercício (gera matriz e soma os números pares e ímpares)
function ex2() {
    let matriz = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ];

    let somaPar = 0, somaImpar = 0;

    // Preencher a matriz com valores aleatórios
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = setValueRandom(20, 1);
        }
    }

    // Calcular as somas de números pares e ímpares
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] % 2 === 0) {
                somaPar += matriz[i][j];
            } else {
                somaImpar += matriz[i][j];
            }
        }
    }

    console.table(matriz);
    console.log("Soma dos números pares:", somaPar);
    console.log("Soma dos números ímpares:", somaImpar);
}

// Função para exibir o código quando o botão "Ver Código" for clicado
function showCode() {
    const codeContainer = document.getElementById('codeContainer');
    if (codeContainer.style.display === 'none') {
        codeContainer.style.display = 'block';
    } else {
        codeContainer.style.display = 'none';
    }
}