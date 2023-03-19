/* 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de 
entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]
 */

function cleanArray(array, parametro1, parametro2) {
    let cleanedArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== parametro1 && array[i] !== parametro2) {
            cleanedArray.push(array[i]);
        }
    }
    return cleanedArray;
}
console.log(cleanArray([5,4,3,2,5], 5,3))//[4,2]
console.log(cleanArray([5,4,3,2,5,5,8], 5,2))//[4,3,8]
console.log(cleanArray([5,"Caleb",3,2,"Kelly",5,8], "Caleb",2))//[5,3,'Kelly', 5,8]
console.log(cleanArray([22," ", 7, "Hey", " ", 72], " ",22))//[7, 'Hey', 72]