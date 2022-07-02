import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import axios from 'axios'

function Home(){

    const [data, setData] = useState([])

    function BuscarTodosProdutos(){
        axios.get('http://localhost:8000/produtos')
        .then((response) => {
            setData(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        BuscarTodosProdutos()
    },[])

    return(
        <>
        <Navbar />
        {
            data.map((produto) => (
                <div key={produto.id}>
                    <p>{produto.nome}</p>
                    <p>{produto.preco}</p>
                </div>
            ))
        }
        </>
    )
}

export default Home