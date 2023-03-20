/* 6) Implemente um método que retorne um array, sem valores duplicados.
Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7] */

function contains(elemento, array) {
    for (let i = 0; i < array.length; i++) {
        if (elemento === array[i]) {
            return true
        }
    }
    return false
}

function removeDuplicate(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (!contains(array[i], result)) {
            result.push(array[i])
        }
    }
    return result
}
console.log(removeDuplicate([1,2,3,3,2,4,5,4,7,3]))//[1,2,3,4,5,7]
console.log(removeDuplicate([1,1,1,1,1,2,3,3,2,4,5,4,7,7,3,8,9,10,10,11,6,6,11]))//[1,2,3,4,5,7,,9,10,11,6]
console.log(removeDuplicate([true, false, true, " ", " ", 0, 0]))//[true, false, " ", 0]
console.log(removeDuplicate(["4", false, 80, false, 4, "4", 76, 4]))//['4', false, 80, 4, 76]









