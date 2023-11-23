const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

const validarNumeroInformado = (numero)=> {
    try 
    {
        return Number.parseFloat(numero);
    } catch(e){
        console.log('O numero informado não é válido.');    
    }    

}

readLine.question('Favor informar um número: ', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);
    
    if (numeroValidado1 ){
        readLine.question('Favor informar outro número: ',  (numero2) => {
        const numeroValidado2 = validarNumeroInformado(numero2);


        if (numeroValidado2)
        {
            readLine.question('Favor informar o operador: ', (operador) => {
                switch (operador){
                    case "+":
                    case "-":
                    case "*":
                    case "/":
                        break;

                    default:
                        "Operador inválido.";
                        break;
                }

            });

        }
        });
    }

});
