import React from 'react'
import Header from '../Header/Header'

export default class Carrinho extends React.Component{
    render(){
        return(
            <>
            <Header trocarTela={this.props.trocarTela}/>
            <h3>Aqui e o carrinho</h3>     
            
            </>
        )
    }
}
