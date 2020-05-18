/*Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. Caso contrário, ele retorna false.
Use somente um if.*/

let a = 105;
let b = 9;
let c = 26;
let resultado = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    resultado = true;
}

console.log(resultado);

