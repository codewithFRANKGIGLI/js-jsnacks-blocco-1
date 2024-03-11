// Dato un array contenente 10 numeri, stampare in console il numero più grande.

const numbers = [];                                                     // Array vuoto

for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;             // Genero i numeri casualmente
  numbers.push(randomNumber);                                           // Li push nell'array
}

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {                                               // Confronto ogni elemento stabilento il maggiore
    max = numbers[i];
  }
}

// sparo i risultati
console.log(numbers);
console.log(`Il numero più grande è: ${max}`);