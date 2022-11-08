const { faker } = require('@faker-js/faker/locale/pt_BR');

const quantidade = 1000;

const domainFanbase = [
  '@fanbasefc.com.br',
]

//PARECEIDO COM REAL:
// const emailGenerator = () => {
//   const email = faker.internet.email();
//   console.log(email);
// }

// for (let i = 0; i < quantidade; i++) {
//   emailGenerator();
// }

//GENERICOS
  let description = "fulano0"
  let domain = domainFanbase[Math.floor(Math.random() * 1)];

  for (let i = 0; i < quantidade; i++) {
    console.log(description + i + domain);
  }
