const quantidade = 1000;

// const planosST = [
//   'PLATINUM',
//   'GOLD',
//   'SILVER',
//   'BRONZE',
// ];

// const tipoPlanoGenerator = () => {
//   const plano = planosST[Math.floor(Math.random() * planosST.length)];
//   console.log(plano);
// }

// const planosOTT = [
//   'PREMIUM',
//   'STANDARD',
//   'FREE',
// ];

// const tipoPlanoGeneratorOTT = () => {
//   const plano = planosOTT[Math.floor(Math.random() * planosOTT.length)];
//   console.log(plano);
// }

// const valoresIngresso = [
//   15,
//   20,
//   25,
//   50,
//   100,
// ];

// const valorIngressoGenerator = () => {
//   const valor = valoresIngresso[Math.floor(Math.random() * valoresIngresso.length)];
//   console.log(valor);
// }

const tiposIngresso = [
  'VIP',
  'CAMAROTE',
  'ARQUIBANCADA',
  'CADEIRA',
];

const tipoIngressoGenerator = () => {
  const tipo = tiposIngresso[Math.floor(Math.random() * tiposIngresso.length)];
  console.log(tipo);
}

const tipoPagamento = [
  'CREDITO',
  'DEBITO',
  'PIX',
  'DINHEIRO',
];

const tipoPagamentoGenerator = () => {
  const tipo = tipoPagamento[Math.floor(Math.random() * tipoPagamento.length)];
  console.log(tipo);
}

const bandeirasCartao = [
  'VISA',
  'MASTERCARD',
  'ELO',
  'AMEX',
];

const bandeiraCartaoGenerator = () => {
  const bandeira = bandeirasCartao[Math.floor(Math.random() * bandeirasCartao.length)];
  console.log(bandeira);
}

const tipoProduto = [
  'CAMISA OFICIAL',
  'BOLA',
  'BONE',
  'JAQUETA DE TREINO',
]

const tipoProdutoGenerator = () => {
  const tipo = tipoProduto[Math.floor(Math.random() * tipoProduto.length)];
  console.log(tipo);
}

const locaisLoja = [
  'CENTRO',
  'SHOPPING',
  'ESTADIO',
]

const localLojaGenerator = () => {
  const local = locaisLoja[Math.floor(Math.random() * locaisLoja.length)];
  console.log(local);
}

// numero randomico de 1 a 1000
const numeroRandomico = () => {
  const numero = Math.floor(Math.random() * 1000);
  console.log(numero);
}

for (let i = 0; i < quantidade; i++) {
    numeroRandomico();
}