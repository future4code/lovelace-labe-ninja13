import React from 'react'
import  Home  from './components/Home/Home'
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./components/Temas/temas"
import TelaDeCadastro from './components/TelaDeCadastro/TelaDeCadastro';
function App() {
	return (

	<ThemeProvider theme={theme}>
        <Home/>
		</ThemeProvider>

	)
}

export default App


