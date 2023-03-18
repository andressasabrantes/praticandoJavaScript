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
console.log(inverteArray([1, 2, 3, 4, 5, 6]))//[6,5,4,3,2,1]
console.log(inverteArray(["S", "J", 3, "k", 5]))//[5,'k',3,'J','S']
console.log(inverteArray(["Car", 78, "Fridge", 50, "456", 82]))//[82,'456',50,'Fridge',78,'Car']

