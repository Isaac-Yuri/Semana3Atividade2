const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

const resutadoFinal =
  a.reduce((item, acumulador) => acumulador + item, 0) +
  b.reduce((item, acumulador) => acumulador + item, 0);

console.log(resutadoFinal);
