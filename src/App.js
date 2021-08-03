import React from 'react'
import  Home  from './components/Home/Home'
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./components/Temas/temas"

function App() {
	return (

	<ThemeProvider theme={theme}>
        <Home/>
		</ThemeProvider>
	)
}

export default App


