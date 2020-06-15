/* il prezzo del biglietto è definito in base ai km (0.21 € al km)
   va applicato uno sconto del 20% per i minorenni
   va applicato uno sconto del 40% per gli over 65.*/

// numero di km da percorrere
var km = prompt("Ciao! Quanti km vuoi percorrere?");
// età passeggero
var eta = prompt("Quanti anni hai?");
//calcolo prezzo
var prezzo1 = km * 0.21;
//calcolo sconto
if (eta <= 18){
  prezzo1 = prezzo1 - ((prezzo1 * 20) / 100);
}
if (eta >= 65){
  prezzo1 = prezzo1 - ((prezzo1 * 40) / 100);
}
//riduzione a due decimali
var prezzo = prezzo1.toFixed(2);
//messaggio all'utente
document.getElementById("biglietto").innerHTML = "Ok, il prezzo del tuo biglietto è di: " + prezzo + "€";
//console
console.log ("km: " + km);
console.log ("età: " + eta);
console.log ("costo: " + prezzo);
