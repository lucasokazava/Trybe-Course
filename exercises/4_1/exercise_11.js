/*Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
Para as faixas de impostos, use as seguintes referências:
INSS

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR

Até R$ 1.903,98: isento de imposto de renda

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.*/

let salarioBruto = 4512.21;
let aliquotaINSS = 0;
let aliquotaIR = 0;
let totalINSS = 0;
let totalIR = 0;

if (salarioBruto <= 1556.94 && salarioBruto > 0) {
    aliquotaINSS = 8;
    totalINSS = (salarioBruto * aliquotaINSS) / 100;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = 9;
    totalINSS = (salarioBruto * aliquotaINSS) / 100;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = 11;
    totalINSS = (salarioBruto * aliquotaINSS) / 100;
}
else if (salarioBruto > 5189.82) {
    totalINSS = 570.88;
}

let salarioBase = salarioBruto - totalINSS;
let parcelaDescontoIR = 0;

if (salarioBase <= 1903.98 && salarioBase > 0) {
    totalIR = 0;
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliquotaIR = 7.5;
    parcelaDescontoIR = 142.80;
    totalIR = ((salarioBase * aliquotaIR) / 100) - parcelaDescontoIR;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquotaIR = 15;
    parcelaDescontoIR = 354,80;
    totalIR = ((salarioBase * aliquotaIR) / 100) - parcelaDescontoIR;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliquotaIR = 22.5;
    parcelaDescontoIR = 636.13;
    totalIR = ((salarioBase * aliquotaIR) / 100) - parcelaDescontoIR;
}
else if (salarioBase > 4664.68) {
    aliquotaIR = 27.5;
    parcelaDescontoIR = 869.36
    totalIR = ((salarioBase * aliquotaIR) / 100) - parcelaDescontoIR;
}

let salarioLiquido = salarioBase - totalIR;

console.log("A pessoa que tem um salário bruto de R$" + salarioBruto.toLocaleString('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}) + ", recebe um salário líquido de R$" + salarioLiquido.toLocaleString('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}));

