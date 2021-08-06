import React from 'react'
import  Home  from './components/Home/Home'
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./components/Temas/temas"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TelaDeCadastro from './components/TelaDeCadastro/TelaDeCadastro';
import TelaDeContratar from './components/TelaDeContratar/TelaDeContratar'
import Carrinho from './components/Carrinho/Carrinho'




export default class App extends React.Component{

state={
	tela:"home",
	carrinho: []
}



adicionarAoCarrinho = (item) => {
    const carrinhoAtualizado = [...this.state.carrinho, item];
	alert("produto adicionado")
    this.setState({ carrinho: carrinhoAtualizado });};


renderizatela=()=>{
	switch(this.state.tela){
		case "home":
			return<Home trocarTela={this.trocarTela}/>
		case "cadastrar":
			return <TelaDeCadastro trocarTela={this.trocarTela}/>
		case "contratar":
		    return <TelaDeContratar 
			carrinho={this.state.carrinho}
            adicionarAoCarrinho={this.adicionarAoCarrinho}
			trocarTela={this.trocarTela}/>
		case "carrinho":
		    return <Carrinho 
			carrinho={this.state.carrinho}
			trocarTela={this.trocarTela}/>
	}
}

trocarTela=(tela)=>{
	this.setState({
		tela: tela
	})
}

	render(){

		return (

			<ThemeProvider theme={theme}>
			
				{this.renderizatela()}
		
				</ThemeProvider>
		
		
			)
	}
}



