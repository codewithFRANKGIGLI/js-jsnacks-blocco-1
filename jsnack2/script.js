// Il software deve chiedere per 5 volte all’utente di inserire un numero.
//   Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;
let count = 0;
for (let i = 1; i <= 5; i++) {
  const num = prompt(`Inserisci il numero ${i}`);   // chiedo i numeri con un ciclo nel prompt
  if (isNaN(num)) {                                 // verifico che siano immessi numeri
    alert("Devi inserire un numero valido");
    i--;                                            // scalo il conteggio se non è un numero
    continue;
  }
  sum += Number(num);
  count++;
}

// sparo i risultati
if (count < 5) {
  alert("Non hai inserito tutti i numeri richiesti");
} else if (sum !== 0) {
        alert(`Hai inserito ${count} numeri per un totale di ${sum}.`);
}