const quantidade = 1000;

const status = [
  'ATIVO',
  'INATIVO',
  'CANCELADO',
  'INADIMPLENTE',
];

const statusGenerator = () => {
  let statusAtual = status[Math.floor(Math.random() * status.length)];
  console.log(statusAtual);
}

for (let i = 0; i < quantidade; i++) {
    statusGenerator();
}