// cria um array com mais 3 arrays dentro, cada array possui 3 strings que sao letras
const letras = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

const resultado = letras
  .flat() // o flat cria um novo array com todos os elementos dos sub-arrays dentro do array original
         // nesse caso vai pegar todas as letras de cada um dos 3 arrays e colocar todas em um array so
         // com o array que o flat retornar o reduce vai entrar em ação
  .reduce((objeto, letra) => { // parametro numero mudado para letra
    if (objeto[letra]) { // se a chave da letra da vez existir no objeto some +1 no valor dessa chave
      objeto[letra] += 1;
    } else { // caso nao existir crie uma nova chave que sera a letra da vez e deixe o seu valor como 1
      objeto[letra] = 1;
    }
    return objeto; // ao fim retorna o objeto com a quantidade de ocorrencias de cada letra dentro do array
  }, {});

// o algoritmo visa criar um objeto onde as letras sao as chaves e seus valores é a quantidade de vezes que aquela letra apareceu no array
console.log(resultado);
  