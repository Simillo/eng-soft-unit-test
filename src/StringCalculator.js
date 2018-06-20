class StringCalculator {
  contructor() {
    
  }

  add (str) {
    if (str.match(/(\,\n|\n\,)/gi)) throw new TypeError('Não pode.');
    const arr = str.replace(/\n/gi,',').split(',').map(Number);
    return arr.reduce((acc, val) => acc + val, 0);
  }

}

module.exports = StringCalculator;
