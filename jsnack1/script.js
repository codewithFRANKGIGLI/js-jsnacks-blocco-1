// Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).
// Come l'esercizio in classe di stamattina, ma senza pari o dispari

let numbers = [];                                   // Array vuoto
let count = 0;

for (let i = 1; i <= 5; i++) {                      // chiedo all'utente di inserire 5 numeri
  const num = prompt(`Inserisci il numero ${i}`);
  if (!isNaN(num) && !numbers.includes(Number(num))) {  // controlla se il numero è unico
    numbers.push(Number(num));                          // Aggiungo all'array
    count++;                                            // Avanza il conteggio
  } else {
    i--;                                            // decrementa il contatore del ciclo for se il numero non è unico
    alert("Devi inserire un numero unico.");
  }
}

// stampa i risultati
alert(`Hai inserito ${count} numeri unici: ${numbers}.`);