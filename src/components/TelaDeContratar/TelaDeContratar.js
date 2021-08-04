import React from 'react'
import Header from '../Header/Header'
import './TelaDeContratar.css'



export default class TelaDeContratar extends React.Component{

    render(){
         return(
            <div>
            <Header trocarTela={this.props.trocarTela}/>
            
            <div  class="conteudo">
            <input type="text" placeholder="Valor mínimo"/>
            <input type="text" placeholder="Valor máximo"/>
            <input type="text" placeholder="Busca por título ou descrição"/>
            <select class="sel">
                <option value="">Sem ordenação</option>
                <option value="">Menor valor</option>
                <option value="">Maior valor</option>
                <option value="">Título</option>
                <option value="">Prazo</option>
            </select>
            </div>
                
            </div>
        )
    }
   
    
}
