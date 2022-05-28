let pessoa = {
nome: "Miguel",
sobrenome:"Ribeiro",
idade:"21",
aprovado: true,
telefone: ['1122223333', '11911112222']
}

console.log(pessoa);

pessoa.telefone.push("1100001111");

pessoa['eMaiorIdade'] = true; // adiconar propriedades ao obj pessoa

console.log(pessoa);