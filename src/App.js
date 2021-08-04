import React from 'react'
import  Home  from './components/Home/Home'
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./components/Temas/temas"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import TelaDeCadastro from './components/TelaDeCadastro/TelaDeCadastro';




function App() {
	return (

	<ThemeProvider theme={theme}>
        <Home/>

		
		


		</ThemeProvider>


	)
}

export default App


