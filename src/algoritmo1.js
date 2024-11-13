// pede pro usuario digitar no prompt um numero que sera o tamanho do array
const tamanho = parseInt(prompt("Digite o tamanho da lista de números"));
// por padrao aquilo que o usuario digitar no prompt é tratado como uma string,
//portanto temos que transforma-lo em inteiro com a funcao parseInt()

// cria uma lista com o tamanho que o usuario digitou e preenche os espacos com null
const lista = new Array(tamanho).fill(null);

const novaLista = lista
  .map((index) => {
    // parametro item era declarado mas nunca era lido entao foi retirado
    return index + 1;
  }) // map intera nos elementos de lista pegando cada um dos valores que é null e soma com 1
  .reduce((acumulador, item) => {
    // ao fim o map devolve outro array que sera o que o reduce sera aplicado,
    // o reduce ira interar em todos os elementos do array e multiplicar cada um dos elementos dele com o acumulador que se inicia com 0
    return acumulador * item;
  }, 0);

// ao que parece o algoritmo visa multiplicar todos os seus elementos e resultar em um unico produto

// o seguinte algoritmo faz exatamente a mesma coisa mas em vez de mutiplicar, ele soma todos os items
// alem disso ele basicamente resume o algoritmo anterior em apenas 4 linhas
const listaResumida = new Array(tamanho) // cria uma lista com o tamanho que o usuario digitou
  .fill(null) // preenche os espacos com null
  .map((item) => item + 1) // pega cada elemento (que é null) e soma com 1, curiosidade: null somado com qualquer numero é o proprio numero
  .reduce((acumulador, item) => acumulador + item, 0); // com a lista que o map retorna o reduce pega cada elemento e soma com o acumulador


console.log(novaLista);
console.log(listaResumida);
