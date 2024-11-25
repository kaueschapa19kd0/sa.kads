let arr = [];

function randomArray() {
    const quantidade = document.getElementById('quantidade').value;
    arr = [];
    for (let i = 0; i < quantidade; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    document.getElementById('array-original').innerText = `[ ${arr} ]`;
}

function selectionSort() {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
}

document.getElementById('gerar').addEventListener('click', () => {
    randomArray();
    document.getElementById('array-ordenado').innerText = `[ ]`;
});

document.getElementById('ordenar').addEventListener('click', () => {
    if (arr.length === 0) {
        document.getElementById('array-original').innerText = "Por favor, gere números primeiro.";
        return;
    }
    selectionSort();
    document.getElementById('array-ordenado').innerText = `[ ${arr} ]`;
});
