//Divisível por 3 -> Fizz
//Divisível por 5 -> Buzz
//Divisível por 3 e 5 -> FizzBuzz
//Não divisível por 3 ou 5 -> entrada
//Não é um número -> 'Não é um número'

function fizzBuzz(entrada) {
    
    if (typeof entrada !== "number") {
        return "Não é um número!"
    } else if ((entrada % 3 === 0) && (entrada % 5 === 0)) {
        return "FizzBuzz"
    } else if (entrada % 3 === 0) {
        return "Fizz"
    } else if (entrada % 5 === 0) {
        return "Buzz"
    } 
    return entrada
}

console.log(fizzBuzz(3))//Fizz
console.log(fizzBuzz(5))//Buzz
console.log(fizzBuzz(15))//FizzBuzz
console.log(fizzBuzz(22))//22
console.log(fizzBuzz("n"))//Não é um número!
console.log(fizzBuzz(41))//41

