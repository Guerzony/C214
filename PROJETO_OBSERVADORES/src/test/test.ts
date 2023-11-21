var expect = require('chai').expect;
var Observavel = require('../contadores/Observavel.js').default;
var Observador = require('../contadores/Observador.js').default;

describe('Teste do projeto: ', () => {
  const frase = "Frase usada para teste.";
  let observavel: typeof Observavel;
  let observador: typeof Observador;

  beforeEach(() => {
    observavel = new Observavel();
    observador = new Observador(1);
    observavel.setFrase(frase); // Set the frase property before each test
  });

  it('Teste contagem de palavras', () => {
    expect(observavel.obterNumeroDePalavras()).to.eql(4);
  });

  it('Teste contagem com numero de caracteres pares', () => {
    expect(observavel.obterNumeroPares()).to.eql(2);
  });

  it('Teste contagem com numero de palavras que começam com maiscula', () => {
    expect(observavel.obterNumeroPalavrasMaiusculas( frase )).to.eql(1);
});
  

  it('Teste de adicionar observador', () => {
    expect(() => observavel.adicionarObservador(observador)).to.not.throw();
  });

  it('Teste de remover observador', () => {
    expect(() => observavel.removerObservador(observador)).to.not.throw();
  });

  it('Teste de notificar observador', () => {
    expect(observavel.notificarObservadores()).to.eql(undefined);

});
  
});
