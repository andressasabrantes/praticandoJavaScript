/* 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4} */

function convertArray(arrayDeArrays) {
    let meuObjeto = {};

    for (let i = 0; i < arrayDeArrays.length; i++) {
        let arrayAtual = arrayDeArrays[i];
        meuObjeto[arrayAtual[0]] = arrayAtual[1];
    }
    return meuObjeto
}
console.log(convertArray([["c",2],["d",4]]))//{c:2, d:4}
console.log(convertArray([["Filme:", "Ocean's eight"],["Filme2:", "Just Go With it"],["Filme3:", "Home Alone"]]))//{Filme: 'Ocean's eight', Filme: 'Just Go With it', Filme: 'Home Alone'}
console.log(convertArray([["Nota1:", 9],["Nota2:", 7],["Nota3:", 6], ["Nota4:", 8], ["Nota5:", 10]]))//{'Nota1:': 9, 'Nota2:': 7, 'Nota3:': 6, 'Nota4:': 8, 'Nota5:': 10}