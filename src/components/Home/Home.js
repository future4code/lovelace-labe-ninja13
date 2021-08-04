import React, { Component } from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'
import TelaDeCadastro from '../TelaDeCadastro/TelaDeCadastro'


const Texto = styled.div`
display:flex;

justify-content: center;
align-items: center;
flex-direction: column;
font-size: 1.8rem;
margin-top: 15%;
p{
  padding: 15px;
}
`
const Button = styled.button``
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header trocarTela={this.props.trocarTela}/>
       <Texto>
        <p>LabeNinjas</p>
        <p>O talento certo no momento certo</p>
        </Texto>
          <div class="btn">
        <Button onClick={() => this.props.trocarTela("cadastrar")}>
            Quero ser um ninja
          </Button>

        <button class="btnCont" onClick={()=> this.props.trocarTela("contratar")} >Contratar um Ninja</button>
        </div>
      </div>
    )
  }
}
