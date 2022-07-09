import React, { useState } from "react";
import axios from "axios";
import "../../components/navbar"
import Navbar from "../../components/navbar";

export default function NovoProduto(){

    const[nome,setNome] = useState("")
    const[descricao,setDescricao] = useState("")
    const[valor,setValor] = useState("")

    let produto = {
        id: Number.parseInt(Math.random()* 10),
        nome: nome,
        descricao: descricao,
        valor: valor
    }

    function AdicionarProduto(){
        axios.post("http://localhost:8000/adicionar-produto", produto)
        .then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <>
            <Navbar/>
            <input onChange={((e) => setNome(e.target.value))} placeholder="Nome do produto" />
            <input onChange={((e) => setDescricao(e.target.value))} placeholder="Descrição do produto" />
            <input onChange={((e) => setValor(e.target.value))} placeholder="Valor do produto" />

            <button  onClick={() => AdicionarProduto()} className="btn btn-primary"> Adicionar Produto</button>
        </>
    )
}