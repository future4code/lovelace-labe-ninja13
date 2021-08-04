import React from 'react'


export default class TelaDeCadastro extends React.Component {



    state={
        titulo:"",
        descricao:"",
        preco:""
    }
cadastraNinja=()=>{

}
   
 
    render() {
        return (
            <>
                <div>

                    <h1>Cadastre o seu serviço</h1>


                    <input type="text" placeholder="Titulo" />

                    <input type="text" placeholder="Descição" />

                    <input type="text" placeholder="Preço" />

                    <select name="info[]">
                        <option value="">Cartão de Débito</option>
                        <option value="">Cartão de Crédito</option>
                        <option value="">PayPal</option>
                        <option value="">Boleto</option>
                        <option value="">Pix</option>
                    </select>

                    <input type="date" />
                    <br /><br />
                    <button>Cadastrar serviço</button>

                </div>
            </>
        )


    }
}