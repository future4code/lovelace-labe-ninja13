import React from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import TelaDeContratar from '../TelaDeContratar/TelaDeContratar'

export default class Carrinho extends React.Component{

    adicionaNoCarrinho = (produto) => {
        const produtosAtualizados = [...this.state.carrinho,
            produto
        ]
        this.setState({ carrinho: produtosAtualizados })
        alert('Produto adicionado no carrinho.')
    }

    pegarListaCarrinho = () => {
        const url = "https://labeninjas.herokuapp.com/jobs";
        const headers = {
            headers: {
                Authorization: "8a5a528e-1da7-4a55-9e68-2b8b014d576f",
            },
        }

        axios.get(url, headers)
            .then((resp) => {
                const jobsSelecionados = resp.data.jobs.map((job) => {
                    return (
                        this.setState({carrinho: jobsSelecionados})
                    )
                })

               

            })
            .catch((erro) => {
                alert(erro.response.data.error);
            });
    };

    render(){

       const  mostra=this.props.carrinho.map((item) => {
        return(
                <p>{item.title}</p>
            )
        })
        return(
            <>
            <Header trocarTela={this.props.trocarTela}/>
            <h3>Aqui e o carrinho</h3>  
            {mostra}   
            </>
        )
    }
}
