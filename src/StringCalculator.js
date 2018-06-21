class StringCalculator {
  static add (str) {
    let demilitador = ',';
    if (/^\/\/.*/gi.test(str)) {
      demilitador = str.match(/^\/\/(.)/)[1];
      str = str.replace(/^\/\/./, '');
    }

    const numNegativos = str.match(/\-\d{1,}/g);
    if (numNegativos) throw Error(`Negativos não permitidos: ${numNegativos.join(', ')}.`);

    const rgxNewLine = new RegExp(`(\\${demilitador}\\n|\\n\\${demilitador})`, 'gi');
    if (str.match(rgxNewLine)) throw new Error('Formato inválido para string.');

    const arr = str
      .replace(/\n/gi, demilitador)
      .split(demilitador)
      .map(Number);
      
    return arr.reduce((acc, val) => acc + val, 0);
  }
}

module.exports = StringCalculator;
