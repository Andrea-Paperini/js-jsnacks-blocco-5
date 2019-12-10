// creo due array della stessa lunghezza, ma i primi con delle lettere, i secondi con dei numeri
var lettere = ["a", "b", "c"];
var numeri = [3, 5, 7];
// Creo l'array finale dove ci metto gli elementi alternati lettera/numero
var finale = [];
// Chiamo la funzione per alternarli, e ci inserisco i parametri
fusione(lettere, numeri);

console.log(finale);
// Creo la funzione con lettere e numeri con il ciclo for che ad ogni lunghezza(es."a"), mette l'altro(es.3)
function fusione(lettere, numeri) {
    for (var i = 0; i < lettere.length; i++) {
        finale.push(lettere[i]);
        finale.push(numeri[i]);
    }
}
