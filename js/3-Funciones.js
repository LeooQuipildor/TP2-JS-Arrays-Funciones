let base = parseFloat(prompt(`Ingresar valor de la base del rectangulo:`));
let altura = parseFloat(prompt(`Ingresar valor de la altura del rectangulo:`));

function perimetro(base, altura) {
    if(!isNaN(base, altura)){
        const valorPerimetro = 2 * (base + altura);
        return valorPerimetro;
    }
    else{
        document.write(`No es un numero`);
    }
    
}
document.write(`El perimetro del rectangulo es: ${perimetro(base,altura)}`)