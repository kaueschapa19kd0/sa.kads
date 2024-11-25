let arr = []

function randomArray() {
    const quantidade = document.getElementById('quantidade').value
    arr = []
    for (let i = 0; i < quantidade; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1)
    }
    document.getElementById('array-original').innerHTML = `[${arr}]`
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1
        let valorAtual = array[i]

        while (j >= 0 && valorAtual < array[j]) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = valorAtual
    }
    return array
}

document.getElementById('gerar').addEventListener('click', () => {
    randomArray()
    document.getElementById('array-ordenado').innerHTML = `[ ]`
})

document.getElementById('ordenar').addEventListener('click', () => {
    if (arr.length === 0) {
        document.getElementById('array-original').innerHTML = "Por favor, gere números primeiro."
        return
    }
    const arrayOrdenado = insertionSort([...arr])
    document.getElementById('array-ordenado').innerHTML = `[${arrayOrdenado}]`
})
