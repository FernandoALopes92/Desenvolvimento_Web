import React from "react"
// import './navbar.css'


function Navbar(){
    return(
        


        <div className="menu">

         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                {/* <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/> */}
                API Produtos
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/novo-produto" className="nav-link active">Produtos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
         </nav>

        </div>
    )    
}

export default Navbar