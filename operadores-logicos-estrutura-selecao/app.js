const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e tem habilitação para saber se você pode entrar no kart');
console.log('Além das suas verificações, precisamos verificar se você esta na lista de presença do horário');

readLine.question('Qual o ano do seu nascimento?', ano => {
    if (ano > 2004)
        console.log('Você não possui 18 anos, portanto não pode entrar no kart');
    else {
        readLine.question('Você possui habilitação? (Sim/Não)', temHabilidatacao => {
            if ((!temHabilidatacao.toUpperCase) === "SIM")
                console.log('Para participar do kart é necessário possuir habilitação.');
            else {
                readLine.question('Qual o seu nome?', nome => {
                    switch (nome)
                    {
                        case 'MARCOS':
                        case 'ERIC':
                            console.log(`Bem vindo ao kart ${nome}.`);
                            break;
                        default:
                            console.log(`Lamento ${nome}, mas o seu nome não está na lista.`)
                            break;

                    }
                });
            }
        });
    }
});
