import React from 'react'
import axios from "axios"
import styled from 'styled-components'
import Header from '../Header/Header'

const Texto = styled.div`
display:flex;
justify-content: center;
align-items: center; 
flex-direction: column;
margin-top: 2%;
`


export default class TelaDeCadastro extends React.Component {

    state = {
        title: "",
        description: "",
        price:"",
        paymentMethods: ["cartao"],
        dueDate: "2222-10-10"
    }

    mudaTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    mudaDescription = (e) => {
        this.setState({
            description:e.target.value
        })
    }
    mudaPrice = (e) => {
        this.setState({
            price:e.target.value
        })
    }
    mudaPaymentMethods = (e) => {
        this.setState({
            
        })
    }
    mudaDueDate = () => {
        this.setState({

        })
    }
    cadastraNinja = () => {
        const url = ` https://labeninjas.herokuapp.com/jobs`
        const headers = {
            headers: {
                Authorization: "8f358eda-ff93-4ae6-9905-c06d326e4ad8"
            }
        }
        const body = {
            title: this.state.title,
            description: this.state.description,
            price:Number(this.state.price),
            paymentMethods: this.state.paymentMethods,
            dueDate: this.state.dueDate

        }
        axios.post(url, body, headers)
            .then((res) => {alert('Serviço cirado com sucesso')
            }).catch((err) => { console.log(err.response.data) })
    }


    render() {
        return (
            <>
                <div>
                    <Header trocarTela={this.props.trocarTela}/>
                    <h1 class="titulo">Cadastre o seu serviço</h1>

            <Texto>
                    <input
                        value={this.state.title}
                        onChange={this.mudaTitle}
                        type="text"
                        placeholder="Titulo"
                    />

                    <input
                     value={this.state.description}
                     onChange={this.mudaDescription}
                        type="text"
                        placeholder="Descição"
                    />

                    <input
                    type="number"
                     value={this.state.price}
                     onChange={this.mudaPrice}
                    placeholder="Preço"
                    />

                    <select class="sel1" name="info[]">
                        <option value="">Cartão de Débito</option>
                        <option value="">Cartão de Crédito</option>
                        <option value="">PayPal</option>
                        <option value="">Boleto</option>
                        <option value="">Pix</option>
                    </select>

                    <input type="date" />
                    <br /><br />
                    <button onClick={this.cadastraNinja}>Cadastrar serviço</button>
                    </Texto>

                </div>
                
            </>
        )


    }
}
