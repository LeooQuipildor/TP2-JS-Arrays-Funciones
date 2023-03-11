let ciudades = [];
let agregar = [];
let ultimo = [];

do {
    ciudades = prompt();
    agregar.push(ciudades);
}
while (confirm("Continuar ingresando ciudades?: ")) {
    agregar.push(`Paris`);
    ultimo = agregar[agregar.length - 1];
    document.write(agregar);
    document.write(`<br>`);
    document.write(`La longitud del arrays es de: ${agregar.length}`);
    document.write(`<br>`);
    document.write(`El item en la primera posicion es: ${agregar[0]}`);
    document.write(`<br>`);
    document.write(`El item en la tercera posicion es: ${agregar[2]}`);
    document.write(`<br>`);
    document.write(`El item en la ultima posicion es: ${ultimo}`);
    document.write(`<br>`);
    document.write(`El item que ocupa la segunda posicion es: ${agregar[1]}`);
    document.write(`<br>`);
    agregar[1] = `Barcelona`;
    document.write(`El array modificado para que barcelona ocupe la segunda posicion es: ${agregar}`);
}

