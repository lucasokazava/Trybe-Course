/*Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.*/

let custo = 54.33;
let valorDeVenda = 84.81;
let impostoCustoEmPorcentagem = 20;
let lucroPorVenda = valorDeVenda - (custo + ((custo * impostoCustoEmPorcentagem) / 100));
let quantidadeVendas = 1000;

if (custo < 0 || valorDeVenda < 0 || impostoCustoEmPorcentagem < 0 || quantidadeVendas < 0) {
    console.log("O programa não aceita valores menores que 0.");
}
else {
    let lucroTotal = quantidadeVendas * lucroPorVenda;
    console.log("A empresa vendeu " + quantidadeVendas + " produtos e teve um lucro de R$" + lucroTotal.toLocaleString('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}) + ".");
}

