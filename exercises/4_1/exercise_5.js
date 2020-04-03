/*Faça um programa que defina três variáveis com os valores dos três ângulos
internos de um triângulo. Retorne true se os ângulos representarem os ângulos
de um triângulo e false caso contrário.*/

let anguloA = 60;
let anguloB = 90;
let anguloC = 30;
let triangulo = false;

if (anguloA + anguloB + anguloC === 180) {
    triangulo = true;
    console.log(triangulo);
}
else {
    console.log(triangulo);
}