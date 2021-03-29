import React from 'react'
import './routes.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LOGO from '../components/image/Logo.png'
import { BsHouseDoor ,BsTag} from "react-icons/bs";
import Home from '../pages/home/Home'
import Camisetas from './produto/Camisetas'
import Blusa from './produto/Blusa'
import Acessorios from './produto/Acessorios'



export default function Routes(){
 return(
    <div>
    <Router>
        <div className="navbar">
            <img src={LOGO} alt="Mk Store Logo"></img>
            <div className="dropdown">
                <button className="dropbtn">Categoria <BsTag /> </button>
                <div className="dropdown-content">
                    <Link to="/camiseta">Camisetas</Link>
                    <Link to="/blusa">Blusas</Link>
                    <Link to="/acessorios">Acessorios</Link>
                </div>
            </div>
            <Link to="/"><span className="ini">início </span> <BsHouseDoor /></Link>
            </div>
        <Switch>
            <Route path="/camiseta">
            <Camisetas categoria = "camisetas"/>
        </Route>
            <Route path="/blusa">
            <Blusa categoria="blusa" />
            
        </Route>
            <Route path="/acessorios">
            <Acessorios categoria="acessorios"/>
        </Route>
            <Route path="/">
                <Home />
</Route>
        </Switch>

    </Router>
</div>
)
 
} 
  