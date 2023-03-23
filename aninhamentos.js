/* 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5] */

function removeNestedArray(nestedArray) {

    let notNested = []
    for (let i = 0; i < nestedArray.length; i++) {

        //checa se o elemento da iteração é um array. Se sim, chama a função removeAninhamentos de forma recursiva
        if (nestedArray[i] instanceof Array) {    
            notNested = notNested.concat(removeNestedArray(nestedArray[i]))
        } else {
            notNested.push(nestedArray[i])//Se não estiver dentro de um novo array, insere o elemento da iteração no array inicializado inicialmente
        }
    }
    return notNested
}
console.log(removeNestedArray([1, 2, [3], [4, 5]]))//[1, 2, 3, 4, 5]
console.log(removeNestedArray([1, [[[2]]], [3], [[[[[[4]]]]], [[5]]]]))//[1, 2, 3, 4, 5]