import React, { Component } from 'react'
import api from '../../services/api'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Alert from '../../components/misc/AlertErro'
import './Home.css'
import CardProduto from '../../components/produto/CardProduto'

class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            error:null,
            carregando:false,
            busca:"",
            produtos:[],
       }
    this.buscaProduto = this.buscaProduto.bind(this);
    }

    componentDidMount() {
        this.setState({carregando:true})
        const request = api.get('/roupa')
        request.then((response) => {
        this.setState({produtos:response.data, carregando:false})
        })
        .catch((error) => {
        this.setState({carregando:false , error:"Falha ao carregar dados"})
         });
    }
    buscaProduto(e){
        e.preventDefault();
        this.setState({carregando:true})
        const request = api.get(`/roupa?q=${this.state.busca}`)
        request.then((response)=>{
            this.setState({produtos:response.data,carregando:false})
            console.log(response)
        })
        .catch((error)=>{
        this.setState({carregando:false , error:"Falha ao procurar produtos"}) 
        })
    }

    render(){
       const {error,carregando,produtos} = this.state
       if(error) {
           return( <>
           <div>Lurean input dsakdasjd djakd dasjkdas <br></br></div>
           <Alert erro={error}/>
           </>
           )
       }
       if(carregando){
           return(
               <><center><div className="spinner is-animating"></div></center></>
           )
       }
       return(
        <div>
<div className="form-busca">
               <form onSubmit={this.buscaProduto}>
                   <input className="busca-produto" placeholder="Procurar por" onChange={e => this.setState({busca:e.target.value})}/>
                   <button type="submit">Buscar</button>
               </form>
           </div>
<div class="l-cards">

{ produtos && produtos.map(item =>(
<CardProduto key={item.id}
nome={item.nome}
imagem={item.imagem}
descricao={item.descricacao}
categoria={item.categoria}
id={item.id}
preco={item.preco}
link={item.link}
/>
))

}  </div>
</div> 
         
       )
    }
}

export default Home;