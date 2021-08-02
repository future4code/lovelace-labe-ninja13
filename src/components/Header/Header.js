import React from "react"
import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle `
* { 
padding: 0;
margin: 0;
box-sizing: border-box;
}
` 
const Container =styled.div`
display:flex;
border:1px solid black;
background-color:lightgray;
padding:10px;
justify-content:space-between;
`
const Botoes =styled.div`
margin-right:7%;

button{
    margin-right:15px;
    padding:5px;
}
`

export default function Header (){
    return(
        <Container>
            <GlobalStyle/>
       <h1>LabeNinjas</h1>

        <Botoes>
       <button>Home</button>

       <button>Carrinho</button>
       </Botoes>
        </Container>
    )
}