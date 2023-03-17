//Velocidade máxima é de 70km
//a cada 5km acima do limite você ganha 1 ponto
//caso pontos maior que 12 -> "Carteira suspensa"

function radar(velocidadeCapturada) {

    const velocidadeMaxima = 70
    const intervaloKilometragem = 5
    let carteiraPontos = 0
    const pontosMaximo = 12
    let velocidadeAcima= 0
    
    if (velocidadeCapturada <= velocidadeMaxima) {
        return "Ok! Dentro do limite permitido."
    } else if (velocidadeCapturada > velocidadeMaxima) {

        //Calcula intervalo entre a velocidade máxima e a velocidade capturada
        velocidadeAcima = Math.floor((velocidadeCapturada - velocidadeMaxima))
        
        //Calcula quantidade de vezes que o motorista passou 5km a mais do permitido
        carteiraPontos = Math.floor((velocidadeAcima / intervaloKilometragem))
    
        //Mostra ao usuário a velocidade que foi capturada e a situação atual da carteira
        if (carteiraPontos > pontosMaximo) {
            return `Você está ${velocidadeAcima}km acima da velocidade permitida. Pontuação atual da sua carteira: ${carteiraPontos}. Sua carteira está suspensa.`
        } else if (velocidadeCapturada > velocidadeMaxima) {
            return `Você está ${velocidadeAcima}km acima da velocidade permitida. Pontuação atual: ${carteiraPontos}`
        }

    }

}

console.log(radar(70))//Ok! Dentro do limite permitido
console.log(radar(75))//Você está 5km acima da velocidade permitida e levou 1 ponto na carteira!
console.log(radar(85))//Você está 15km acima da velocidade permitida e levou 3 pontos na carteira!
console.log(radar(100))//Você está 30km acima da velocidade permitida e levou 6 pontos na carteira!
console.log(radar(180))//Você está 15km acima da velocidade permitida e levou 3 pontos na carteira!
