//Some os valores de uma lista, [15,46,75,34,23]. Imprima o número resultante da soma desses valores.

function arraySum(array) {
    result = 0
    for (let i = 0; i < array.length; i++) {
        result += array[i]
    }
    return result
}
console.log(arraySum([15,46,75,34,23]))//193
console.log(arraySum([10, 15, 30]))//55
console.log(arraySum([2, 2, 2, 2, 2, 2, 2]))//14
console.log(arraySum([12, 15, 152, 1576, 12]))//1767