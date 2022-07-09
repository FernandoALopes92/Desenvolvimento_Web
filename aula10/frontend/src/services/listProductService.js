import axios from 'axios';


async function BuscarTodosProdutos(setData){
    await axios.get('http://localhost:8000/')
    .then((response) => {
        setData(response.data)
    }).catch((err) => {
        console.log(err)
    })
}

export default BuscarTodosProdutos