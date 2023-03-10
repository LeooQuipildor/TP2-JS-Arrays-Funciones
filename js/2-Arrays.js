let ciudades = [];
let agregar = [];

do {
    ciudades = prompt();
    agregar.push(ciudades);
}
while (confirm("Continuar ingresando ciudades?: ")) {
    document.write(agregar);
}

