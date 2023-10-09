// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let km = prompt("Inserisci i km");
console.log(km)
let età = prompt("Inserisci la tua età");
console.log(età)
const price = 0.21;
const twentyDiscount = 20/100;
const fortyDiscount = 40/100;
let travelCost = ( km * price);
let fullPrice

if (età < 18) {
    fullPrice = travelcost - (travelCost * twentyDiscount); 
} else if (età >= 65){
    fullPrice = travelCost - (travelCost * fortyDiscount);
} else {
    fullPrice = travelCost;
}

console.log(fullPrice.toFixed(2));
