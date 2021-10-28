import React from 'react'
import { InputsContainer, LoginFormContainer } from './styled'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm'
import {login} from '../../service/user'
import { useHistory } from 'react-router-dom'
import { ErrorSharp } from '@material-ui/icons'

const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: '', password: '' })
    const history = useHistory()

    const onSubmitForm = (event) => {
           event.preventDefault()
        login(form, clear, history)
    }
 
       return (
             <LoginFormContainer> 
                 <form onSubmit={onSubmitForm}>

            <InputsContainer>
                 <TextField
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={'E-mail'}
                    variant={'outlined'}
                    fullWidth
                    margin={'dense'}
                    required
                    type={"email"}
                />

                <TextField
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={'Senha'}
                    variant={'outlined'}
                    fullWidth
                    margin={'dense'}
                    required
                    type={"password"}

                />
            </InputsContainer>
                <Button
            color={"primary"}
            variant={"contained"}
                type={"submit"}
                fullWidth
             >
                    Entrar
                    </Button>
            </form>
                    </LoginFormContainer>
   

        
    )
}

export default LoginForm