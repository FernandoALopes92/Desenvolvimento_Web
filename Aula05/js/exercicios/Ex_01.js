// 1 - Criar 3 objetos representando 3 membros da familia
// contendo (nome da pessoa, sobrenome da pessoa, idade/
// telefone, se a pessoa é maior de idade)


let familiaFernando1 ={
    nome: "Isabela" ,
    sobrenome: "Ferreira",
    idade: 26,
    parentesco: "Esposa"
}


let familiaFernando2 ={
    nome: "Marlene",
    sobrenome: "Lopes",
    idade: 54,
    parentesco: "Mãe"
}

let familiaFernando3 ={
    nome: "Edivaldo",
    sobrenome: "Lopes",
    idade: 64,
    parentesco:"Pai"
}



console.log(familiaFernando1);


if(familiaFernando1.idade >= 18){
    familiaFernando1 ['maiorIdade'] =true;
}else{
    familiaFernando1['maiorIdade']= false;
}

console.log(familiaFernando1);


console.log(familiaFernando2);

if(familiaFernando2.idade >= 18){
    familiaFernando2 ['maiorIdade'] =true;
}else{
    familiaFernando2['maiorIdade']= false;
}

console.log(familiaFernando2);


console.log(familiaFernando3);

if(familiaFernando1.idade >= 18){
    familiaFernando3 ['maiorIdade'] =true;
}else{
    familiaFernando3['maiorIdade']= false;
}

    console.log(familiaFernando3);