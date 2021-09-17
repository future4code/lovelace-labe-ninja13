import React from 'react'

export default class BackToCart extends React.Component{
	
	componentDidMount(){
		this.props.trocarTela('carrinho')
	}

	render(){
		return<></>
	}
}