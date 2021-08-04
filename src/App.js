import React from 'react'
import  Home  from './components/Home/Home'
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./components/Temas/temas"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TelaDeCadastro from './components/TelaDeCadastro/TelaDeCadastro';




export default class App extends React.Component{

state={
	tela:"cadastrar"
}

renderizatela=()=>{
	switch(this.state.tela){
		case "home":
			return<Home trocarTela={this.trocarTela}/>
			case "cadastrar":
				return <TelaDeCadastro/>
	}
}

trocarTela=(tela)=>{
	this.setState({
		tela:tela
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



