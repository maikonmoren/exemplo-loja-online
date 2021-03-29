import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Produto.css'
import api from '../../services/api'
import Alert from '../../components/misc/AlertErro'
import CardProduto from '../../components/produto/CardProduto'

class Camisetas extends Component{
    constructor(props){
        super(props);
        this.state ={
            error:null,
            carregando:false,
            busca:"",
            camisetas:[],
       }
       this.buscaProduto = this.buscaProduto.bind(this);
    }
    
    componentDidMount() {
        const {categoria} = this.props
        this.setState({carregando:true})
        const request = api.get(`/roupa?categoria=${categoria}`)
        request.then((response) => {
        this.setState({camisetas:response.data, carregando:false})
        console.log(response.data)
        })
        .catch((error) => {
        this.setState({carregando:false , error:"Falha ao carregar dados"})
         });
    }
    buscaProduto(e){
        const {categoria} = this.props
        e.preventDefault();
        this.setState({carregando:true})
        const request = api.get(`/roupa?categoria=${categoria}&q=${this.state.busca}`)
        request.then((response)=>{
            if(response.data == null){
                this.setState({carregando:false , error:"Produto não encontrado"}) 
               }else{
                   this.setState({camisetas:response.data,carregando:false})
               }
        })
        .catch((error)=>{
        this.setState({carregando:false , error:"Falha ao procurar Camisetas"}) 
        })
    }
        render(){
            const {error,carregando,camisetas} = this.state
            if(error) {
                return( <>
                <Alert erro={error}/>
                </>
                )
            }
            if(carregando){
                return(
                    <><center><div className="spinner is-animating"></div></center></>
                )
            }
            
            return (
                <div className="produto">
                       <div>
<div className="form-busca">
               <form onSubmit={this.buscaProduto}>
                   <input className="busca-produto" placeholder="Procurar por" onChange={e => this.setState({busca:e.target.value})}/>
                   <button type="submit">Buscar</button>
               </form>
           </div>
<div class="l-cards">

{ camisetas && camisetas.map(item =>(
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
                </div>
            )
        }

} 

Camisetas.propTypes = {
    categoria:PropTypes.string.isRequired,
}

export default Camisetas;