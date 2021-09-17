import React from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import styled from 'styled-components'


const Item = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    background-color: lightgray;
    padding: 15px;
    margin: 25px;
`
const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;
`

export default class Carrinho extends React.Component{
    state={
        job: this.props.carrinho
    }

    total = ()=>{
        let soma = 0
        for(let item in this.state.job){
            soma += this.state.job[item].price        
        }
        return soma
    }

    render(){

    const mostrar = this.state.job.map(item=>{
        return<Item>{item.title} R$ {item.price}<button onClick={()=> this.props.remover(item.id)}>
                    Remover</button></Item>
    }) 

       return(
            <>
            <Header trocarTela={this.props.trocarTela}/>
                {mostrar}<Footer>Total: R$ {this.total()}
                            <button onClick={this.props.limpar}>Limpar carrinho</button>
                         </Footer>                               
            </>
        )
    }
}
