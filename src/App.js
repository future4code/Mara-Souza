import React, {useState, useEffect} from 'react'
import axios from "axios"

const App = () => {
  const [personId, setPersonId] = useState(1)
  const [name, setName] = useState("")
  const [year, setYear] = useState("")


  useEffect (() => {
    axios.get(`https://swapi.dev/api/people/${personId}/`)
    .then((res) => {
      setName(res.data.name)
      setYear(res.data.birth_year)

    })
    .catch((error) => {

    })
  }, [personId])

  const hadlePersonId = (event) => {
    setPersonId(event.target.value)
  } 

  return (
    <div>
      <h1>a muito tempo atras em uma galaxia distante...</h1>
      <strong>Escolha o id do personagem:</strong>
      <select value={personId} onChange={hadlePersonId}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        <p><strong>Nome da pessoa: </strong></p> {name}
        <p><strong>Ano de Nascimento: </strong></p> {year}


      
      </div>
  )
}

export default App;
