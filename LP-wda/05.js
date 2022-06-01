'use strict';

let numerosPerfeitos = [],
  counter = 0;

while (numerosPerfeitos.length < 4) {
  if (isNumeroPerfeito(counter)) numerosPerfeitos.push(counter);
  counter++;
}

console.log(
  `Os quatro primeiros números perfeitos são ${numerosPerfeitos.join(', ')}`
);

// Logical function
function isNumeroPerfeito(num) {
  if (num == 0 || num == 2) return;

  let somatoria = 0;
  for (let i = 0; i < num; i++) {
    if (num % i == 0) somatoria += i;
  }

  if (somatoria == num) return true;
}
