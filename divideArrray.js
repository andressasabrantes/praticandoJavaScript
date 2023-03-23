/* 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]] */

function divideArray(array, divisor) {

    let arrayDeArrays = []
    let novoArray = []
    for (let i = 0; i < array.length; i++) {

        //checa se a variável novoArray tem o comprimento do parâmetro passado.Se for menor que o parâmetro, insere esse elemento da iteração no array novoArray
        if (novoArray.length < divisor) {
            novoArray.push(array[i])
        }

        //checa se a variável novoArray tem o tamanho do parâmetro. Se tiver, insere o array inteiro dentro de arraysDeArrays e depois zera o novoArray, para que possa ser populada novamente
        if (novoArray.length === divisor) {
            arrayDeArrays.push(novoArray)
            novoArray = []
        }
    
    //checa se a variável novoArray ainda tem algum elemento sobrando, ou seja menor que o parâmetro passado. E então é inserida dentro do array arrayDeArrays
    }
    if (novoArray.length > 0) {
        arrayDeArrays.push(novoArray)
    }

    return arrayDeArrays

}
console.log(divideArray([1, 2, 3, 4, 5], 2))//[[1, 2], [3, 4], [5]]
console.log(divideArray([1, 2, 3, 4, 5], 1))//[[1], [2], [3], [4], [5]]
console.log(divideArray([1, 2, 3, 3, 4, 8, 5], 4))//[[1, 2, 3, 3], [4, 8, 5]]