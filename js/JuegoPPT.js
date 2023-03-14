do {
    let elegir = parseInt(prompt(`Elegir 1,2 o 3:    1:Tijera, 2:Papel, 3:Piedra`));
    if (!isNaN(elegir) && elegir == 1 || elegir == 2 || elegir == 3) {
        let maquina = Math.floor(Math.random() * 3) + 1;

        if (elegir == maquina) {
            alert(`EMPATE! la maquina eligio ${maquina}`);
        }
        else if (elegir == 3 && maquina == 1 || elegir == 2 && maquina == 3 || elegir == 1 && maquina == 2) {
            alert(`GANASTE!!!`);
        }
        else {
            alert(`PERDISTE! :( `);
        }
    }
    else {
        alert(`Ingresar un numero valido!`);
    }
}
while (confirm(`Jugar de nuevo?`));

