/* 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1] */

function inverteArray(entrada) {
    
    let arrayInvertido = [];

    for (let i = entrada.length - 1; i >= 0; i--) {
        arrayInvertido.push(entrada[i]);
    }
    return arrayInvertido;
}
console.log(inverteArray([1, 2, 3, 4]))//[4,3,2,1]

