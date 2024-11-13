const cidades = ["Guarabira", "Belém", "Sapé"];

const listaOrdenada = `<ol>${cidades.map(
  (cidade) => `<li>${cidade}</li>`
)}</ol>`;

console.log(listaOrdenada);
