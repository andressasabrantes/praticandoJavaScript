//Crie um programa que recebe um número e imprime seu fatorial.

function fatorial(number) {
    result = 1
    if (number < 0) {
        return "Não é um número positivo!"
    } else if (number >= 1) {
        for (let i = 1; i <= number; i++) {
        result = i * result
    } 
        return result
    } else {
        return 1
    }
}

console.log(fatorial(5))//120
console.log(fatorial(2))//2
console.log(fatorial(3))//6
console.log(fatorial(-1))//Não é um número positivo!
console.log(fatorial(0))//1
console.log(fatorial(-2))//Não é um número positivo!
console.log(fatorial(-15))//Não é um número positivo!
