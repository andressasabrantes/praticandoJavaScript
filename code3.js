//Retorne ao usuário se é bom dia, boa tarde ou boa noite de acordo com o horário que o mesmo inserir.

function greetings(hour) {
    if (hour >= 6 & hour < 12) {
        return "Bom dia! São exatamente " + hour + " horas!"
    } else if (hour >= 12 & hour < 18) {
        return "Boa tarde! São examente " + hour + " horas!"
    } else {
        return "Boa noite! São exatamente " + hour + " horas!"
    }
}
console.log(greetings(6))//Bom dia
console.log(greetings(8))//Bom dia
console.log(greetings(11))//Bom dia
console.log(greetings(12))//Boa tarde
console.log(greetings(17))//Boa tarde
console.log(greetings(20))//Boa noite
console.log(greetings(3))//Boa noite
