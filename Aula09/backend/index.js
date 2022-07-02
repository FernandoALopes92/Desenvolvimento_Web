const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())

let listaProdutos = [
{
    id:1, 
    nome:"Pipoca",
    preco: 10.2
},
{
    id:2, 
    nome:"Cesta de frutas",
    preco: 50.5
},
{
    id:3, 
    nome:"Lasanha PRONTA",
    preco: 30.5
}
]

app.get("/produtos",(req,res) => {
    return res.send(listaProdutos)
})


app.listen(8000, () => {
    console.log('SERVIDOR RODANDO')
})