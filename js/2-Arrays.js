let ciudades = [];
let agregar = [];

do {
    ciudades = prompt();
    agregar.push(ciudades);
}
while (confirm("Continuar ingresando ciudades?: ")) {
    document.write(agregar);
    document.write(`<br>`);
    document.write(`La longitud del arrays es de: ${agregar.length}`);
}

