import React from "react";
import Home from "./Views/home";
import NovoProduto from "./Views/novoProduto";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

return(
    <Router>
      <Routes>
        <Route exact path="/" element ={<Home />} />
        <Route exact path="/novo-produto" element ={<NovoProduto />} />
      </Routes>
    </Router>
  );
}

export default App;
