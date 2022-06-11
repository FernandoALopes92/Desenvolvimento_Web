// 1- criar as 4 operações basicas da matematica usando funções que tenha os parametros (n1, n2)
// Adição
// Subtração
// Divisão
// Multiplicação

let num1 = 10
let num2 = 2
let resultado

function adicao(n1, n2){
    return n1 + n2
}

resultado = adicao(num1,num2)
console.log('Adição: ' + resultado)

function subtracao(n1,n2){
    return  n1 -  n2    
}

resultado = subtracao (num1, num2)
console.log('Subtração: ' + resultado)

function divisao(n1, n2){
    return n1 / n2
}

resultado = divisao( num1, num2)
console.log('divisao: ' + resultado)

function multiplicacao(n1, n2){
    return n1 * n2
}

resultado = multiplicacao (num1, num2)
console.log('Multiplicação: ' + resultado)