giraparole();

function giraparole() {
    var parola = prompt("Inserisci una parola");
    console.log(parola);
    var parolaInvertita = invertitore(parola);
    console.log(parolaInvertita);
}

function invertitore(parola) {
    return parola.split("").reverse().join("");
}
