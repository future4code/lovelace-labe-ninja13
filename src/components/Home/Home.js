import React, { Component } from 'react'
import Header from '../Header/Header'
import styled from 'styled-components'


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

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
       <Texto>
        <p>LabeNinjas</p>
        <p>O talento certo no momento certo</p>
        </Texto>
      </div>
    )
  }
}
