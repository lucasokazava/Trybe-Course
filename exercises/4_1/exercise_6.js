/*Escreva um programa que receba o nome de uma peça de xadrez e retorne
os movimentos que ela faz.*/

/*Como desafio, faça o programa funcionar tanto se receber o nome de
uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar
a quantidade de condicionais.*/

/*Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.*/

let peca = "Rei";
let movimento;

if (peca.toLowerCase() === "torre") {
    movimento = "Movimento em cruz.";
}
else if (peca.toLowerCase() === "bispo") {
    movimento = "Movimento em Diagonal.";
}
else if (peca.toLowerCase() === "cavalo") {
    movimento = "Movimento em L.";
}
else if (peca.toLowerCase() === "peão") {
    movimento = "Movimento vertical, apenas para frente, limite de 1 casa (no movimento inicial pode-se andar 2 casas).";
}
else if (peca.toLowerCase() === "rei") {
    movimento = "Movimento em todas as direções, apenas 1 casa.";
}
else if (peca.toLowerCase() === "rainha") {
    movimento = "Movimento em todas as direções.";
}
else {
    movimento = "Isso não é uma peça de Xadrez.";
}

console.log(movimento);

