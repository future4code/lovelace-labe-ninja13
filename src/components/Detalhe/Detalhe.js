import React from 'react'
import Axios from 'axios'
import Header from '../Header/Header'
import { convertDate } from '../../utils/convertDate'
import styled from 'styled-components'



const Card = styled.div`
	border: 1px solid;
	width: 30vw;
	height: 40vh;
	padding: 10px;
	background-color: lightgray;
	margin: auto;	
`

export default class Detalhe extends React.Component{
	state={
		job: {}
	}

	getJobById =()=>{
		const url =`https://labeninjas.herokuapp.com/jobs/${this.props.id}`
	    const headers = {
	        headers: {
	            Authorization: "8f358eda-ff93-4ae6-9905-c06d326e4ad8"
	        }
	      }

	      Axios.get(url, headers).then(res=>{
	      	this.setState({job: res.data})
	      	console.log(this.state.job)
	      }).catch(err=>{
	      	alert('Algo deu errado!')
	      })
	}

	componentDidMount(){
		this.getJobById()
	}

    render(){
        return <div><Header trocarTela={this.props.trocarTela}/>
        		<h1 style={{textAlign:'center', margin:'20px'}}>Detalhes do serviço</h1>
	        	   <Card>        		
	        		<p><b>Título: </b>{this.state.job.title}</p>
	        		<b>Descrição: </b>{this.state.job.description}
	        		<p><b>Preço: </b>{this.state.job.price}</p>
	        		<b>Pagamento: </b>{this.state.job.paymentMethods}            
	        	   </Card>	        	   
	           </div>
    }
}
