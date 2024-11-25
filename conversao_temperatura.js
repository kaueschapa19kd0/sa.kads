function CF(){
    let respostaFar = document.getElementById("respostaFar")

    let celRecebido = document.getElementById("CF").value

    let farResposta = (celRecebido * [9/5]) + 32

    console.log("O resultado da conversão em Fahrenheit é: " + farResposta  + "°F")

    respostaFar.innerHTML = "O resultado da conversão em Fahrenheit é: " + farResposta + "°F"
}

function FC(){
    let respostaCel = document.getElementById("respostaCel")

    let farRecebido = document.getElementById("FC").value

    let celResposta = (farRecebido - 32) * (5/9)

    console.log("O resultado da conversão em Celsius é: " + celResposta + "°C")
    respostaCel.innerHTML = "O resultado da conversão em Celsius é: " + celResposta.toFixed(2) + "°C"
}