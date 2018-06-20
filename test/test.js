const expect = require('chai').expect;
const StringCalculator = require('../src/StringCalculator');

const sc = new StringCalculator();

describe('add()', () => {

  it('deve adicionar dois números de uma string', () => {
    const str = '1,2';
    expect(sc.add(str)).to.be.equal(3);
  });

  it('deve adicionar mais de dois númereos de uma string', () => {
    const str = '1,1,1,1,1,195';
    expect(sc.add(str)).to.be.equal(200);
  });

  it('deve adicionar os números com quebras de linhas', () => {
    const str = '1\n2,3';
    expect(sc.add(str)).to.be.equal(6);
  });
})
