let numero = parseInt(prompt(`Ingresar numero:`))

function tablaMultiplicar(numero) {
    document.write(`<h1>Tabla del ${numero}</h1>`)
    document.write(`<table border="1">`)
    document.write(`<tr>`)
    for (let i = 1; i <= 10; i++) {
        document.write(`<th>`)
        let multiplicacion = numero * i;
        document.write(multiplicacion);
        document.write(`</th>`)
    }
    document.write(`</tr>`)
    document.write(`</table>`)
}

tablaMultiplicar(numero);

