const faturamento = require('./faturamento.json'); // Importando o arquivo JSON com o faturamento

const valoresValidos = faturamento.filter(valor => valor > 0);
const menorFaturamento = Math.min(...valoresValidos);
const maiorFaturamento = Math.max(...valoresValidos);
const mediaMensal = valoresValidos.reduce((a, b) => a + b, 0) / valoresValidos.length;

const diasAcimaDaMedia = valoresValidos.filter(valor => valor > mediaMensal).length;

console.log("Menor faturamento diário:", menorFaturamento);
console.log("Maior faturamento diário:", maiorFaturamento);
console.log("Dias com faturamento acima da média:", diasAcimaDaMedia);
