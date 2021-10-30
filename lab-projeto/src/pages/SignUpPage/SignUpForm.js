import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {signUp} from '../../service/user'

const SignUpForm = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: '', email: '', password: '' })

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history)

    }
     return (
             <form onSubmit={onSubmitForm}>
                 <SignUpFormContainer>
                 <InputsContainer>
                <TextField
            value={form.name}   
            name={"name"}
            onChange={onChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'dense'}
            />                     
                <TextField
                    value={form.email}
                    name={"email"}
                    onChange={onChange}
                    label={'E-mail'}
                    variant={'outlined'}
                    type={"email"}
                    fullWidth
                    required
                    margin={'dense'}

                />

                <TextField
                    value={form.password}
                    name={"password"}
                    onChange={onChange}
                    label={'Senha'}
                    variant={'outlined'}
                    type={"password"}
                    fullWidth
                    required
                    margin={'dense'}

                />
                </InputsContainer>
                
                <Button
                color={"primary"}
                variant={"contained"}
                type={"submit"}
                fullWidth
                >
                    Fazer Cadastro
                    </Button>
                    </SignUpFormContainer>
            </form>
           
        
    )
}

export default SignUpForm;