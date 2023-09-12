const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {

  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });



  it('altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });

//implementação de 2 novos testes

it('IMC abaixo do peso', () => {
  const peso = 50; // 50 kg
  const altura = 160; // 160 cm

  const IMCCalculado = calcularIMC(peso, altura);

  expect(IMCCalculado).to.equal('Voce esta abaixo do peso');
});

it('IMC sobrepeso', () => {
  const peso = 90; // 90 kg
  const altura = 175; // 175 cm

  const IMCCalculado = calcularIMC(peso, altura);

  expect(IMCCalculado).to.equal('Sobrepeso');
});

});