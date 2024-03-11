// Crea un array vuoto.
//   Chiedi per 6 volte all’utente di inserire un numero,
//   se è dispari inseriscilo nell’array.

let numbersOdd = [];                                                // Array vuoto
for (let i = 1; i < 7; i++) {
  let num = parseInt(prompt(`"Inserisci un numero ${i}"`));         // Richiedo i 6 numeri
  if (num % 2 !== 0) {                                              // Se dispari
    numbersOdd.push(num);                                           // Inserisci nell'array
  }
}
console.log(numbersOdd);