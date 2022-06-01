'use strict';

const prompt = require('prompt-sync')({ sigint: true });

const arrayNumeros = [];

let num = {};
const I = +prompt('Digite um número inteiro: ');
const a = +prompt('Digite um número: ');
const b = +prompt('Digite um número: ');
const c = +prompt('Digite um número: ');

arrayNumeros.push(a, b, c);

if (Number.isInteger(I) && I !== 0 && I > 0) {
  switch (I) {
    case 1:
      console.log(
        `Números em ordem crescente ${arrayNumeros
          .sort((a, b) => a - b)
          .join(', ')}`
      );
      break;
    case 2:
      console.log(
        `Números em ordem crescente ${arrayNumeros
          .sort((a, b) => b - a)
          .join(', ')}`
      );
      break;
    case 3:
      let arr = arrayNumeros.sort((a, b) => a - b);
      arr.push(arr.splice(1, 1)[0]);
      console.log(`Números em ordem trocada ${arr}`);
      break;
    default:
      console.log('O número é diferente de 1, 2 ou 3');
      break;
  }
} else {
  I = +prompt('Digite um inteiro: ');
}
