import React from "react";
import axios from "axios"

const headers = {
  headers: { 
    Authorization: "mara-souza-maryam"
}
}

export default class App extends React.Component{
  state = {
    playLists: [],
    playListName: ""

  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  handlePlayListName = (event) => {
    this.setState({playListName: event.target.value})
  }

  createPlayLists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.playListName 
  }
  axios.post(url, body, headers)
  .then((response) => {
    console.log("sua musica foi Adicionada")
    this.setState({playListName: ""})
    this.getAllPlaylists()
  })
  .catch((error) => {
  alert(error.response.data.message)
  })
  }

  getAllPlaylists = () => {
const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

axios.get(url, headers)
.then((response) => {
  this.setState({playLists: response.data.result.list})

})
.catch((error) => {
console.log(error.response)
})
  }

  render() {
    const playListComponents = this.state.playLists.map((play) => {
return <li key={play.id}>{play.name}</li>
    })


    return (
      <div>
        <h1>LABEFY</h1>
        <input 
        value ={this.state.playListName}
        onChange ={this.handlePlayListName}
        />
        <button onClick={this.createPlayLists}>Enviar</button>
      {playListComponents}
      </div>
    )
  }
}









































