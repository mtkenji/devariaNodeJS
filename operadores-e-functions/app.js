const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

const validarNumeroInformado = (numero)=> {
    
    const resultado = Number.parseFloat(numero);
    console.log('resultado: '+resultado);
    if (resultado == NaN)
        console.log('O numero informado não é válido.');    
    else
        return resultado;
}

const validarOperador = (operador) => {
    switch (operador) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
            return operador;
            break;

        default:
            console.log('Operador inválido.');
            return null;
            break;
    }
}

readLine.question('Favor informar um número: ', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);
    
    if (numeroValidado1){
        readLine.question('Favor informar outro número: ',  (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);

            if (numeroValidado2)
            {
                readLine.question('Favor informar o operador: ', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    
                    if (operadorValidado){
                        switch (operadorValidado){
                            case "+": console.log(`O operador selecionado foi de Adição: ${numeroValidado1} + ${numeroValidado2} =  ${numeroValidado1 + numeroValidado2}.`);
                                break;
                            case "-": console.log(`O operador selecionado foi de Subtração: ${numeroValidado1} - ${numeroValidado2} =  ${numeroValidado1 - numeroValidado2}.`);
                                break;
                            case "*": console.log(`O operador selecionado foi de Multiplicação: ${numeroValidado1} * ${numeroValidado2} =  ${numeroValidado1 * numeroValidado2}.`);
                                break;
                            case "/": console.log(`O operador selecionado foi de Divisão: ${numeroValidado1} / ${numeroValidado2} =  ${numeroValidado1 / numeroValidado2}.`);
                                break;
                            case "%": console.log(`O operador selecionado foi de Módulo: ${numeroValidado1} % ${numeroValidado2} =  ${numeroValidado1 % numeroValidado2}.`);
                                break;
                            default:
                                break;
                        }
                    }
                });
            }
        });
    }
});
