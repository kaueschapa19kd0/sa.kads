function calcula(){
    let resposta = document.getElementById('resposta')
    let idade = Number(document.getElementById('idade').value)

    if(idade >= 16){
        resposta.innerHTML =  "Você está apto a votar. Aproveite seu direito como cidadão."
    }else{
        resposta.innerHTML = "Você ainda não está apto a votar, mas continue acompanhando o processo eleitoral para quando chegar a sua vez!"
    }
}