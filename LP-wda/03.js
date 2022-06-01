'use strict';

const prompt = require('prompt-sync')({ sigint: true });

const opcoesTroco = [50, 20, 10, 5, 2, 1];
const arrayTrocoFinal = [];

const valorCompra = +prompt('Digite o valor da compra: R$');
const valorRecebido = +prompt('Digite o valor recebido do cliente: R$');

let troco = valorRecebido - valorCompra;

gerarTroco(opcoesTroco, troco);
console.log(`\nTroco: R$${troco}\n${getStringTroco()}
`);

function getStringTroco() {
  let outputStr = '';

  arrayTrocoFinal.forEach((formatoTroco) => {
    outputStr += `\nR$${Object.keys(formatoTroco)} x ${Object.values(
      formatoTroco
    )}`;
  });

  return outputStr;
}

function gerarTroco(opcoesTroco, valor) {
  opcoesTroco.forEach((opcao) => {
    if (Number.isInteger(valor % opcao)) {
      let novoTroco = valor - (valor % opcao);
      valor = valor % opcao;

      let qtdMoedas = novoTroco / opcao;

      if (qtdMoedas == 0) return;
      let formatoTroco = {};
      formatoTroco[`${opcao}`] = qtdMoedas;
      arrayTrocoFinal.push(formatoTroco);
    }
  });
}
