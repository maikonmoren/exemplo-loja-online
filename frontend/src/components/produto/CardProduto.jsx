import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cardimg from './Cardimg'
import './CardProduto.css'
import { BsTagFill} from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";



class CardProduto extends Component {
    render() {
        const { nome, imagem, descricao, categoria, id, preco, link } = this.props
        const tag = `<a href="${link}" target="_blank"><button>Produto Original</button></a>`;
        const moeda = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return (
            <div key={id} tabIndex='0' className="card-produto ">
                <div className="cardanimado is-animating"></div>
                <h3>{nome}</h3>
                <Cardimg image={imagem} />
                <strong> <BsTagFill className="icon" />{categoria}</strong>
                <p className="descricao">Descrição : <br/>{descricao}</p>
                <p hidden>id: {id}</p>
                <div className="preco is-animating">Preço: {moeda}</div>
                <div className="botao" dangerouslySetInnerHTML={{__html:tag}}></div>
            </div>
        )
    }

};

CardProduto.propTypes = {
    nome:PropTypes.string.isRequired,
    imagem:PropTypes.string.isRequired,
    descricao:PropTypes.string.isRequired,
    categoria:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    preco:PropTypes.number.isRequired,
    link:PropTypes.string.isRequired,
}

export default CardProduto;
