const expect = require('chai').expect;
const assert = require('chai').assert; 
const StringCalculator = require('../src/StringCalculator');


describe('add()', () => {

  it('deve adicionar dois números de uma string', () => {
    const str = '1,2';
    expect(StringCalculator.add(str)).to.be.equal(3);
  });

  it('deve adicionar mais de dois númereos de uma string', () => {
    const str = '1,1,1,1,1,195';
    expect(StringCalculator.add(str)).to.be.equal(200);
  });

  it('deve adicionar os números com quebras de linhas', () => {
    const str = '1\n2,3';
    expect(StringCalculator.add(str)).to.be.equal(6);
  });

  it('não deve aceitar quebra de linha seguido de virgula', ( ) => {
    const str = '1,\n2';
    assert.throws(
      () => StringCalculator.add(str),
      Error,
      'Formato inválido para string.'
    );
  });

  it('deve aceitar o separador de digitos definido pelo usuário', () => {
    const str = '//;\n1;2;3';
    expect(StringCalculator.add(str)).to.be.equal(6);
  });
})
