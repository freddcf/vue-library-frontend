'use strict';

const prompt = require('prompt-sync')({ sigint: true });

const qtdLimitePessoas = 3;
let pessoas = [];

while (pessoas.length < qtdLimitePessoas) {
  let pessoaAtual = {
    id: pessoas.length,
    nome: '',
    altura: 0,
    peso: 0,
    sexo: '',

    getInfo: function () {
      console.log('\n----- Inserir dados -----');
      console.log(`Usuário Nº${this.id}`);
      this.nome = prompt('Digite seu nome: ');
      this.altura = +prompt('Digite sua altura: ');
      this.peso = +prompt('Digite seu peso: ');

      // getSexo Function calling
      this.getSexo();
    },

    getSexo: function () {
      let state = false;
      while (!state) {
        this.sexo = prompt('Digite seu sexo: [F] Feminino, [M] Masculino: ');
        if (this.sexo == null) break;
        this.sexo = this.sexo.toLocaleUpperCase();
        if (this.sexo == 'F' || this.sexo == 'M') state = true;
      }
      return this.sexo;
    }
  };

  pessoaAtual.getInfo();
  pessoas.push(pessoaAtual);
}

// Funtions ------------------------

function getMediaDePeso(pessoas) {
  let somatoriaPeso = 0;
  pessoas.forEach((pessoa) => {
    somatoriaPeso += pessoa.peso;
  });
  return (somatoriaPeso / pessoas.length).toFixed(2);
}

function getPorcentagemMesmoSexo(pessoas) {
  let qtdMulheres = 0,
    qtdHomens = 0;

  pessoas.forEach((pessoa) => {
    if (pessoa.sexo == 'F') qtdMulheres++;
    if (pessoa.sexo == 'M') qtdHomens++;
  });

  let porcentMulheres = ((qtdMulheres * 100) / pessoas.length).toFixed(2);
  let porcentHomens = ((qtdHomens * 100) / pessoas.length).toFixed(2);

  return [qtdMulheres, porcentMulheres, qtdHomens, porcentHomens];
}

// Getting processed data ----------

const [
  quantidadeMulheres,
  porcentagemMulheres,
  quantidadeHomens,
  porcentagemHomens
] = getPorcentagemMesmoSexo(pessoas);

const pesoMedio = getMediaDePeso(pessoas);

// PRINT AREA -----------------------

console.log(`
Há ${quantidadeMulheres} mulheres e ${quantidadeHomens} homens, a porcentagem de mulheres é de ${porcentagemMulheres}% e aporcentagem de homens é de ${porcentagemHomens}%, a media geral de peso das pessoas é de ${pesoMedio}	
`);
