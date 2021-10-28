import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import { goToRecipeList } from '../routes/coordinator'


  export const login =(body, clear, history) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res)=> {
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipeList(history)
    }) 
    .catch((err)=> alert(err.response.data.message))
}

export const signUp = (body, clear, history) => {
  axios.post(`${BASE_URL}/users/signup`, body)
  .then((res)=> {
      localStorage.setItem("token", res.data.token)
      clear()
      goToRecipeList(history)
  }) 
  .catch((err)=> alert("Erro no Cadastro"))
}





