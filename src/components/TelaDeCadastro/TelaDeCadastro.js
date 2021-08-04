import Header from '../Header/Header'
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Texto = styled.div`
display:flex;

justify-content: center;
align-items: center; 
flex-direction: column;
margin-top: 2%;
`


export default class TelaDeCadastro extends React.Component {
    state={
        titulo:"",
        descricao:"",
        preco:""
    }
    
   
cadastraNinja=()=>{

}
   
 
    render() {
        return (
            <>
                <div>
                <Header trocarTela={this.props.trocarTela}/>
                <Texto>
                    <h1>Cadastre o seu serviço</h1>
                

                    <input type="text" placeholder="Titulo" />

                    <input type="text" placeholder="Descição" />

                    <input type="number" min="1" placeholder="Preço" />

                    <select class="sel1" name="info[]">
                        <option value="">Cartão de Débito</option>
                        <option value="">Cartão de Crédito</option>
                        <option value="">PayPal</option>
                        <option value="">Boleto</option>
                        <option value="">Pix</option>
                    </select>

                    <input type="date" />
                    <br /><br />
                    <button>Cadastrar serviço</button>
                    </Texto>
                </div>
            </>
        )


    }
}
