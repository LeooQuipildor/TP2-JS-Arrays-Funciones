let ciudades = [];
let agregar = [];
let primera = [];
let tercera = [];
let ultimo = [];

do {
    ciudades = prompt();
    agregar.push(ciudades);
    if(agregar[0]){
        primera = agregar[0];
    }
    if(agregar[2]){
        tercera = agregar[2];
    }
    ultimo= agregar[agregar.length-1];
}
while (confirm("Continuar ingresando ciudades?: ")) {
    document.write(agregar);
    document.write(`<br>`);
    document.write(`La longitud del arrays es de: ${agregar.length}`);
    document.write(`<br>`);
    document.write(`El item en la primera posicion es: ${primera}`);
    document.write(`<br>`);
    document.write(`El item en la tercera posicion es: ${tercera}`);
    document.write(`<br>`);
    document.write(`El item en la ultima posicion es: ${ultimo}`);
    document.write(`<br>`);
}

