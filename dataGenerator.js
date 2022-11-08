const { faker } = require('@faker-js/faker/locale/pt_BR');

const dates = [];

const idadeInicial = 18;
const idadeFinal = 65;



const birthDateGenerator = () => {
  
  // POR IDADE
  // let data = faker.date.birthdate({ min: idadeInicial, max: idadeFinal, mode: 'age' })

  // POR ANO
  let data = faker.date.birthdate({ min: 2010, max: 2022, mode: 'year' })

  // converter para o formato dd/mm/yyyy
  data = data.toLocaleDateString('pt-BR');
  console.log(data);
  dates.push(data);
}

for (let i = 0; i < 1000; i++) {
  birthDateGenerator();
}