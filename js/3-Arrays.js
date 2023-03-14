let tiradas = [];
tiradas = Array(11).fill(0);

for (let i = 0; i < 50; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let sumatoria = dado1 + dado2;
    tiradas[sumatoria - 2]++;
}

for (let i = 0; i < tiradas.length; i++) {
    document.write(`El numero ${i + 2} salio: ${tiradas[i]} veces<br>`);
}
