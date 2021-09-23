import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsuario = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
display: flex;
justify-content: space-between;
`


export default class TelaListaUsuario extends React.Component{

    state= {
        usuarios: []
    }

    componentDidMount() {
        this.PegarUsuarios()
    }

    PegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "mara-souza-maryam"
            }
        })
        .then((res) => {
             this.setState({usuarios: res.data})
        })
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente")
        })
    }

        deletarUsuario = (id) => {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
            axios.delete(url, {
                headers: {
                Authorization: "mara-souza-maryam"
                }
            })
            .then((res) => {
                alert("usuario deletado com sucesso")
                this.PegarUsuarios()
            })
            .catch((err) => {
                alert("ocorreu um erro, tente novamente")
            })

        }


    render() {
        // console.log(this.state.usuarios)

        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
             <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
                </CardUsuario>
        )
        })
return (
    <div>
        <button onClick={this.props.IrParaCadastro}>Ir para Cadastro</button>
        <h2>Lista de Usuario</h2>
        {listaUsuarios}
    </div>
    
)
    }
         

}