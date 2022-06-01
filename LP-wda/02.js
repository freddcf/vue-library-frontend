'use strict';

const prompt = require('prompt-sync')({ sigint: true });

const nome = prompt('Digite o nome do vendedor: ');
const salarioFixo = +prompt('Digite o salário fixo do vendedor: ');
const totalDeVendas = +prompt('Digite o total de vendas do funcionário: ');
const percentualSobreTotalDeVendas = +prompt(
  'Digite o percentual que o vendedor ganha sobre o total de vendas: '
);

const bonusVenda =
  salarioFixo * (totalDeVendas * (percentualSobreTotalDeVendas / 100));
const salarioTotal = salarioFixo + bonusVenda;

console.log(`
O vendedor ${nome} possui salário fixo de R$${salarioFixo}, o total de vendas efetuadas por ele é de ${totalDeVendas} vendas, o percentual ganho sobre o total de vendas fixo é de ${percentualSobreTotalDeVendas}%.

O bônus de vendas é de R$${bonusVenda}.
O salário total do vendedor é de R$${salarioTotal}.
`);
