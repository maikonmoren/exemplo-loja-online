import React from 'react'
import './routes.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LOGO from '../components/image/Logo.png'
import { BsHouseDoor ,BsTag} from "react-icons/bs";



export default function Routes(){
 return(
    <div>
    <Router>
        <div class="navbar">
            <img src={LOGO} alt="Mk Store Logo"></img>
            <div class="dropdown">
                <button class="dropbtn">Categoria <BsTag /> </button>
                <div class="dropdown-content">
                    <Link to="/camiseta">Camisetas</Link>
                    <Link to="/blusa">Blusas</Link>
                    <Link to="/acessorios">Acessorios</Link>
                </div>
            </div>
            <Link to="/">início  <BsHouseDoor /></Link>

        </div>
        <Switch>
            <Route path="/camiseta">
                Camisetas
</Route>
            <Route path="/blusa">
                Blusa
</Route>
            <Route path="/acessorios">
                Acessorios
</Route>
            <Route path="/">
                Home
</Route>
        </Switch>

    </Router>
</div>
)
 
} 
  