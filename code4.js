//loop for

for (let i = 1; i <= 100; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}


------------------------------------------------------------

//loop while

i = 0
while(i <= 100) {
    if(i % 2 == 0){
        console.log(i)
    }
    i++
}


------------------------------------------------------------

//loop Do..While

i = 0
do {
    if (i % 2 == 0)
    console.log(i)
    i++
} while (i <= 100);


------------------------------------------------------------

//For - in

const pessoa = {
    nome: 'Jhonatan',
    idade: 25
};

for (let dados in pessoa) {
    console.log(dados, pessoa[dados])
}



const cores = ['Vermelho', 'Azul', 'Amarelo']

for (let indice in cores) {
    console.log(indice, cores[indice])
}
