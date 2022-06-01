'use strict';

const prompt = require('prompt-sync')({ sigint: true });

const nome = prompt('Digite o nome do funcionário: ');
const horasTrabalhadas = +prompt('Digite a quantidade de horas trabalhadas: ');
const valorRecebidoPorHora = +prompt(
  'Digite o valor que você recebe por hora: '
);
const qtdFilhos = +prompt('Digite a quantidade de filhos que possui: ');

const salarioBruto = horasTrabalhadas * valorRecebidoPorHora;
const salario = salarioBruto + salarioBruto * (0.03 * qtdFilhos);

console.log(`
O funcionário ${nome}, trabalha ${horasTrabalhadas} horas, recebendo R$${valorRecebidoPorHora} por hora. 

O salário bruto do funcionário é de ${salarioBruto} e o salário final é de ${salario}
`);
