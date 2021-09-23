import React from "react"
import TelaCadastro from "./components/TelaCadastro"
import TelaListaUsuario from "./components/TelaListaUsuario"



export default class App extends React.Component {
state = {
  telaAtual: "Cadastro"
}

EscolheTela = () => {
  switch(this.state.telaAtual) {
    case "Cadastro":
      return <TelaCadastro IrParaLista={this.IrParaLista} />
      case "Lista":
      return <TelaListaUsuario IrParaCadastro={this.IrParaCadastro} />
      default:
        return <div>Erro! pagina nao encontrada</div>
}
}

IrParaCadastro = () => {
this.setState({telaAtual: "Cadastro"})
}

IrParaLista = () => {
  this.setState({telaAtual: "Lista"})
}

  render() {
    return (
      <div>
      {this.EscolheTela()}
      </div>
    )
  }
}

 
