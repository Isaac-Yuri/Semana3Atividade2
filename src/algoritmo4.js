// declara um array de objetos funcionario
const funcionarios = [
  { nome: "João", salario: 30000, departamento: "TI" },
  { nome: "Janete", salario: 70000, departamento: "RH" },
  { nome: "Sofia", salario: 100000, departamento: "RH" },
];

const funcionariosPorDepartamento = funcionarios.reduce(
  // reduce vai interar no array funcionarios e retornar um objeto
  // mostrando quantos funcionarios há em cada departamento
  (acumulador, funcionario) => {
    const departamento = funcionario.departamento; // pega o departamento no funcionario da vez
    if (!acumulador[departamento]) { // se a chave do departamento nao existir cria no objeto acumulador e atribui a ele
                                    // um array vazio
      acumulador[departamento] = [];
    }
    acumulador[departamento].push(funcionario); // adiciona o funcionario ao array do departamento em questao
    return acumulador; // retorna o acumulador
  },
  {}
);

console.log(funcionariosPorDepartamento);

const mediasSalarioPorDepartamento = Object.keys(
  funcionariosPorDepartamento
).map((departamento) => {
  const total = funcionariosPorDepartamento[departamento].reduce(
    (acumulador, funcionario) => acumulador + funcionario.salario,
    0
  );
  return {
    departamento: departamento,
    media: total / funcionariosPorDepartamento[departamento].length,
  };
});

const maioresPagamentos = mediasSalarioPorDepartamento.filter(
  (departamento) => departamento.media > 65000
);
