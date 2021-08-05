import Axios from 'axios'
import React from 'react'
import Header from '../Header/Header'
import './TelaDeContratar.css'

export default class TelaDeContratar extends React.Component{

state={
   listaDeServicos:[]
}


componentDidMount(){

    this.getAllJobs()
}


getAllJobs=()=>{
    const url =`https://labeninjas.herokuapp.com/jobs`
    const headers = {
        headers: {
            Authorization: "8f358eda-ff93-4ae6-9905-c06d326e4ad8"
        }
    }
    Axios.get(url,headers)
    .then((res)=>{
        this.setState({
            listaDeServicos:res.data.jobs
        })
        console.log(res.data.jobs)
       })
    .catch((err)=>{console.log(err)})
}


    render(){
    
    const mostrar = this.state.listaDeServicos.map((item)=>{
        return <li>
            {item.title}
              {item.dueDate} 
                   </li>
    })
         return(
            <div>
            <Header trocarTela={this.props.trocarTela}/>
            <div  class="conteudo">
            <input type="text" placeholder="Valor mínimo"/>
            <input type="text" placeholder="Valor máximo"/>
            <input type="text" placeholder="Busca por título ou descrição"/>
            <select class="sel">
                <option value="">Sem ordenação</option>
                <option value="">Menor valor</option>
                <option value="">Maior valor</option>
                <option value="">Título</option>
                <option value="">Prazo</option>
            </select>
            {mostrar}
            </div>
                
            </div>
        )
    }
   
    
}
