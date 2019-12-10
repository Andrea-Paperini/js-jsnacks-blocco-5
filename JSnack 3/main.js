// Creare 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Eseguire un log del peso dei due gruppi

// creo due array vuote per le zucchine inferiori e superiori ai 15 cm
var zucchineLunghe = [];
var zucchineCorte = [];

// faccio un icclo for fino a 10 perchè devo aggungere 10 elemente
for (var i = 0; i < 10; i++) {
    // genero la lunghezza dela zucchina casualmente
    var lunghezzaRandom = generaNumeroRandom(1, 30);
    // creo una variabile oggetto e metto dentro il nome e la lunghezza
    var zucchina = {
        'nome': 'zucchina',
        'lunghezza': lunghezzaRandom
    };
    // se la lunghezza è maggiore di 15
    if (zucchina.lunghezza > 15) {
        // inserisco la zucchina nell'array delle zucchine lunghe
        zucchineLunghe.push(zucchina);
        // in caso contrario
    } else {
        // inserisco la zucchina nell'array delle zucchine corte
        zucchineCorte.push(zucchina);
    }
}

console.log('Lista zucchine corte: ', zucchineCorte);
console.log('Lista zucchine lunghe: ', zucchineLunghe);

// funzione per generare numeri random
function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
