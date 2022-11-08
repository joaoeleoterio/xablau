const { faker } = require('@faker-js/faker/locale/pt_BR');

const quantidade = 1000;

const telefoneGenerator = () => {
  const telefone = faker.phone.number('## #####-####');
  console.log(telefone);
}

for (let i = 0; i < quantidade; i++) {
    telefoneGenerator();
}