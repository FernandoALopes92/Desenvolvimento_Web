    
    function Subtracao() {

        var inputN1 = document.getElementById("input1")
        var inputN2 = document.getElementById("input2")
        var resultado = document.getElementById("resultado")

        var n1 = Number(inputN1.value)
        var n2 = Number(inputN2.value)

        var resultadoSubtracao = n1 - n2

        resultado.innerHTML = resultadoSubtracao
    
    }