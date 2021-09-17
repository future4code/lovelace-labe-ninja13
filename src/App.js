import React from 'react'
import  Home  from './components/Home/Home'
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./components/Temas/temas"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TelaDeCadastro from './components/TelaDeCadastro/TelaDeCadastro';
import TelaDeContratar from './components/TelaDeContratar/TelaDeContratar'
import Carrinho from './components/Carrinho/Carrinho'
import Detalhe from './components/Detalhe/Detalhe'




export default class App extends React.Component{

state={
	tela:"home",
	carrinho: [],
	clickedServiceId: ""
}


adicionarAoCarrinho = (item) => {
    const carrinhoAtualizado = [...this.state.carrinho, item];
	alert("produto adicionado")
    this.setState({ carrinho: carrinhoAtualizado })
}

removerDoCarrinho = (id)=>{
	this.state.carrinho.filter(item=>{
		return item.id !== id
	})
}

limparCarrinho = ()=>{
	const decide = window.confirm('Tem certeza que deseja deletar todos os itens?')
	if(decide){
		this.setState({carrinho: []})
	}
}
    
irParaDetalhe = (id)=>{
	this.setState({tela: "detalhe", clickedServiceId: id})
}


renderizatela=()=>{
	switch(this.state.tela){
		case "home":
			return<Home trocarTela={this.trocarTela}/>
		case "cadastrar":
			return <TelaDeCadastro trocarTela={this.trocarTela}/>
		case "contratar":
		    return <TelaDeContratar carrinho={this.state.carrinho}
            adicionarAoCarrinho={this.adicionarAoCarrinho}
			trocarTela={this.trocarTela} irParaDetalhe={this.irParaDetalhe}/>
		case "detalhe":
			return <Detalhe trocarTela={this.trocarTela} id={this.state.clickedServiceId}/>
		case "carrinho":
		    return <Carrinho carrinho={this.state.carrinho} trocarTela={this.trocarTela}
		    		remover={this.removerDoCarrinho} limpar={this.limparCarrinho}/>
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



