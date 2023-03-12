const numero = parseInt(prompt(`Ingresar un numero`));

function numParImpar(numero) {
    if (numero % 2 === 0) {
        document.write(`El numero es par`);
    }
    else {
        document.write(`El numero es impar`);
    }
}

if (!isNaN(numero)) {
    numParImpar(numero);
}
else {
    document.write(`ERROR!, Ingresar unicamente numeros!`);
}