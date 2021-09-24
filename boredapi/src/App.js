
import React from "react";
import "./styles.css";
import Axios from "axios";
import axios from "axios";

export default class App extends React.Component {

  state = {
    activity: {}
  }

  getActivity = () => {
    axios.get('https://www.boredapi.com/api/activity/')
    .then((res) => {
      console.log(res.data)
      this.setState({activity: res.data})
    })
    
    .catch((err) => {
console.log(err)
    })
  }

render() {
  const {activity, type, participants, price} = this.state.activity

    return (
 <div className="App">

   <h1>bom dia, Está entendiado?</h1>
      <button onClick={this.getActivity}>Clique Aqui</button>
      <hr />
      <h3>Atividade</h3>
      <p>Nome: {activity} </p>
      <p>Tipo: {type} </p>
      <p>Participantes:{participants} </p>
      <p>preco: {price} </p>

 </div>
  );
}
}
