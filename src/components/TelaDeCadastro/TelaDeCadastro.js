import React from 'react'
import axios from "axios"
import styled from 'styled-components'


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
        paymentMethods: [],
        dueDate: ""
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
            paymentMethods:e.target.value
        })
    }
    mudaDueDate = (e) => {
        this.setState({
            dueDate:e.target.value
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
            paymentMethods: [this.state.paymentMethods],
            dueDate: this.state.dueDate

        }
        axios.post(url, body, headers)
            .then((res) => { console.log(res.data.message) 
                this.setState({ inputTitulo: "", inputDescricao: "", inputPreco: 0, inputFormaPagamento: [], inputPrazo: ""})         
            })
            .catch((err) => { console.log(err.response.data) })
    }


    render() {
        

        return (
            <>
                <div>

                    <h1>Cadastre o seu serviço</h1>

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

<select 
                         value={this.state.paymentMethods}
                         onChange={this.mudaPaymentMethods}
                         >
                            <option selected>Forma de Pagamento:</option>
                            <option>Cartão de Crédito</option>
                            <option>Cartão de Débito</option>
                            <option>Pix</option>
                            <option>PayPal</option>
                            <option>Boleto</option>
                         </select>

                    <input type="date" name="prazo" value={this.state.dueDate} onChange={this.mudaDueDate} />
        
                    <button
                        onClick={this.cadastraNinja}


                    >Cadastrar serviço</button>
                    </Texto>

                </div>
                
            </>
        )


    }
}