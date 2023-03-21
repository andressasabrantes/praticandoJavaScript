/* 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true */

function compareArrays(array1, array2) {

    if (array1.length !== array2.length) {
        return false;
    }

    for (let i = 0, j = 0; i < array1.length, j < array2.length; i++, j++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true
}
    

console.log(compareArrays([1,2,3,4],[1,2,3,4]))//true
console.log(compareArrays([1,2,3,4],[1,2,3,4,5]))//false
console.log(compareArrays([1,2,3,8,4],[1,2,3,4,5]))//false
console.log(compareArrays([1,2,3,4,5],[1,2,3,9,10]))//false
console.log(compareArrays([1,2,3,4,5],[1,2,3,4,10]))//false
console.log(compareArrays([11,22,33,44,55],[11,22,33,44,55]))//true