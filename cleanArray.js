/* 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2] */


function cleanArray(array) {
    let arrayCleaned = [];

    for (let i = 0; i <= array.length; i++) {
        if(array[i] !== false && array[i] !== undefined && array[i] !== " " && array[i] !== 0 && array[i] !== null && array[i] !== ' ') {
            arrayCleaned.push(array[i]);
        }
    }
    return arrayCleaned;
}
console.log(cleanArray([1,2, " ", undefined]))//[1,2]
console.log(cleanArray([1,2, " ", undefined, 0, null, " "]))//[1,2]
console.log(cleanArray([1,2, " ", undefined, 0, 1, 2, null, "Oi", " ", "Hey!", ' ']))//[1,2, 1, 2, 'Oi', 'Hey!]
console.log(cleanArray([undefined, null, 0, ' ', " ", false]))//[]