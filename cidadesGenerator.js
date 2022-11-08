
const quantidade = 1000;

const cidadesGenerator = () => {
  const cidades = [
    'São Paulo',
    'Rio de Janeiro',
    'Belo Horizonte',
    'Salvador',
    'Fortaleza',
    'Manaus',
    'Brasília',
    'Curitiba',
    'Recife',
    'Porto Alegre',
    'Goiânia',
    'Campinas',
  ]
  const cidade = cidades[Math.floor(Math.random() * cidades.length)];
  console.log(cidade);
}

for (let i = 0; i < quantidade; i++) {
    cidadesGenerator();
}