import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import './home.css'
import BuscarTodosProdutos from "../../services/listProductService";

function Home(){

    const [data, setData] = useState([])

   

    useEffect(() => {
        BuscarTodosProdutos(setData)
    },[data])

    return(
        <>
        <Navbar />
        
        {
            data.map((produto) => (
                <div className="container">
                    <div className="containerDados"  key={produto.id}>
                        <p>{produto.id}</p>
                        <p>{produto.nome}</p>
                        <p>{produto.descricao}</p>
                        <p>{produto.valor}</p>
                    </div>
                </div>
            ))
        }
        
        </>
    )
}

export default Home