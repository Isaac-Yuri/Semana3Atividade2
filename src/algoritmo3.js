// cria um array de objetos "estudante"
const estudantes = [
  { nome: "Alice", notas: [100, 60, 92] },
  { nome: "João", notas: [75, 30, 85] },
  { nome: "Charles", notas: [90, 95, 85] },
  { nome: "Paulo", notas: [100, 100, 100] },
];

const estudantesMedias = estudantes.map((estudante) => {
  // map ira interar em cada elemento do array estudantes
  // para cada estudante ira calcular a media do mesmo utilizando o reduce
  const total = estudante.notas.reduce((soma, nota) => soma + nota, 0); // reduce ira interar no array de notas e somar todas elas
  let { nome } = estudante; // desestrutura o objeto estudante pegando apenas o campo nome
  return { nome, media: total / estudante.notas.length }; // ao fim devolve um objeto com o nome do estudante e sua media
});

// filter vai interar no array estudantesMedias e retornar apenas os estudantes que tiverem o campo media maior que 90
const melhoresMedias = estudantesMedias.filter((estudante) => estudante.media > 90); // student renomeado para estudante

console.log(estudantesMedias);
console.log(melhoresMedias);
