/* 1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a'] */

function newArray(multiplicador, multiplicado) {

    let result = []

    for (let i = 0; i < multiplicador; i++) {
        result.push(multiplicado)
    }
    return result
}
console.log(newArray(3, 'a'))//['a', 'a', 'a']
console.log(newArray(5, 'b'))//['b', 'b', 'b', 'b', 'b']
console.log(newArray(3, 'Js'))//['Js', 'Js', 'Js']
console.log(newArray(3, ' '))//[' ', ' ', ' ']
console.log(newArray(3, 52))//[52, 52, 52]