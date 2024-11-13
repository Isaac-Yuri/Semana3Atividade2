const cidades = ["Guarabira", "Belém", "Sapé"];

const itemCidades = cidades.map(cidade => `<li>${cidade}</li>`)

let listaOrdenada = "<ol>"

itemCidades.forEach(cidade => {
    listaOrdenada += cidade;
})

listaOrdenada += "</ol>"

console.log(listaOrdenada);
