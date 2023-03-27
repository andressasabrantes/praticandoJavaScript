/* 10) Implemente um método que encontre os valores comuns entre dois arrays.
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8] */

function includes(array, elemento) {    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return true
        }
    }    
    return false
}


function isCommon(array1, array2) {

    let commonValues = []
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                if (!(includes(commonValues, array1[i]))) {
                    commonValues.push(array1[i])
                }           
            }
        }
    }
    
    return commonValues
}
console.log(isCommon([6, 8], [8, 9]))//[8]
console.log(isCommon(['6', 8, 9], [6, 9]))//[9]
console.log(isCommon([6, 6, 6, 8, 4], [6]))//[6]
console.log(isCommon(['6', 8, 48, 'Hey!', 75, 10, 11, '25'], [25, '6', 6, 48, 75, 'Hello', 'Olá', 'Hey!']))//['6', 48, 'Hey!', 75]
console.log(isCommon([0, 100, 96, true, 'verdadeiro', false, '90'], [0, '0', '100', true, 79, 'verdadeiro', 'false', 90, 100]))//[0, 100, true, verdadeiro]