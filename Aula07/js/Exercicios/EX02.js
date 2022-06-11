// 2-criar as 4 operações basicas da matematica usando arrow function

let num1 = 10;
let num2 = 2;
let resultado;

let somar = (n1, n2) =>  {
    return n1 + n2
}

resultado = somar(num1, num2)
console.log ('Adição: ' + resultado)

let subtrair = (n1, n2) => {
    return n1 - n2
}

resultado = subtrair(num1, num2)
console.log('Subtração: '+ resultado)

let dividir = (n1, n2) => {
    return n1 / n2
}

resultado = dividir(num1, num2)
console.log('Divisão: ' + resultado)

let multiplicar = (n1, n2) => {
    return n1 * n2
}

resultado = multiplicar(num1, num2)
console.log('Multiplicação: ' + resultado)