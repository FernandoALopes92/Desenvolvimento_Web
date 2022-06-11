function somar() {
    // sem paramêtros
    var n1 = 5
    var n2 = 15

    console.log(`A soma entre : ${n1} + ${n2} = ${n1 + n2}`)
}

//somar() // Chamar a funcao

function somaComParametros(num1, num2){
    //com parametros
    console.log(`A soma entre: ${num1} + ${num2} = ${num1 + num2}`)
}

//somaComParametros(5, 10) //

var subtrair = () => {
    //arrow function sem parametros
    console.log('Hello arrow function ')
}

//subtrair() //

var dividir = (n1, n2) => {
    //arrow function sem parametros
    console.log(n1 / n2)
}

//dividir(10, 2)//