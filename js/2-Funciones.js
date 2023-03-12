const cadena = prompt(`Ingresar texto`);

function infoCadena (cadena){
    if (cadena === cadena.toUpperCase()){
        document.write(`La cadena esta formada solo por MAYUSCULAS.`);
    }
    if (cadena === cadena.toLowerCase()){
        document.write(`La cadena esta formada solo por MINUSCULAS.`);
    }
    if (cadena !== cadena.toUpperCase() && cadena !== cadena.toLowerCase()){
        document.write(`La cadena es una mezcla de MAYUSCULAS y MINUSCULAS`);
    }
}

infoCadena(cadena);