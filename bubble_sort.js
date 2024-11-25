let arr = []
        
function randomArray() {
    const quantidade = document.getElementById('quantidade').value;
    arr = [];
    for (let i = 0; i < quantidade; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1); // Gerar números aleatórios entre 1 e 100
    }
    document.getElementById('array-original').innerText = `[ ${arr.join(', ')} ]`;
}

document.getElementById('gerar').addEventListener('click', randomArray);

document.getElementById('ordenar').addEventListener('click', () => {
    const n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Troca os elementos
            }
        }
    }
    document.getElementById('array-ordenado').innerText = `[ ${arr.join(', ')} ]`
})