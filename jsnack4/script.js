// Calcola la somma e la media dei primi 10 numeri.

let sum = 0;                        // qua ci finiscono i numeri sommati
let count = parseInt(prompt('Dimmi un numero'));                      // qua si contano quanti numeri ci sono

for (let i = 1; i <= count; i++) {     // ciclo for che conta e somma i numeri da 1 a 10
  sum += i;
}

const average = sum / count;        // calcolo della media


// sparo i risultati
console.log(`Somma: ${sum}`);
console.log(`Media: ${average}`);