//receber uma quantidade de valores para avaliar
//função exibe se vada valor é par ou impar

function parImpar(entrada) {
    if (entrada % 2 == 0) {
        return "É par!"
    } else {
        return "É impar!"
    }
}
console.log(parImpar(5))//É ímpar
console.log(parImpar(2))//É par
console.log(parImpar(20))//É par
console.log(parImpar(30))//É par
console.log(parImpar(55))//É ímpar
console.log(parImpar(12546))//É par