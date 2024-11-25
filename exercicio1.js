let array = [1, 2, 3, 4, 5, 6, 7];
let contador = 7;

function media() {
    let soma = 0;
    let media = 0;

    do {
        soma += array[contador - 1];
        console.log(`soma = ${soma}`);
        contador--;
        console.log(`Contador = ${contador}`);
    } while (contador > 0);

    media = soma / array.length;
    console.log("Média = " + media);
}

function showCode() {
    const codeContainer = document.getElementById('codeContainer');
    if (codeContainer.style.display === 'none') {
        codeContainer.style.display = 'block';
    } else {
        codeContainer.style.display = 'none';
    }
}