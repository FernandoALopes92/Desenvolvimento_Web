    
    function Divisao() {

        var inputN1 = Number(document.getElementById("input1").value);
        var inputN2 = Number(document.getElementById("input2").value);
        var resultado = document.getElementById("resultado")
     
        var resultadoDivisao =inputN1 / inputN2

        resultado.innerHTML = resultadoDivisao
    
    }
