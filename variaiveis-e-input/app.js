const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstanteString = 'TESTE CONSTANTE';

console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;

readLine.question('Por favor digite alguma coisa: ', input => {
    leituraDeCampo = input
    console.log(`O usuário digitou o seguinte valor: ${leituraDeCampo}`);
});