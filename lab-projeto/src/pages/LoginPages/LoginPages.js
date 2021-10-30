import React from 'react'
import { ScreenContainer, LogoImage, SignUpButtonContainer } from './styled'
import logo from '../../assets/CHICHET.jpg'
import Button from '@material-ui/core/Button'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import {goToSignUp} from "../../routes/coordinator"
import useUnProtectedPage from '../../hooks/useUnprotectedPage'

const LoginPages = () => {
    useUnProtectedPage()
    const history = useHistory()
    
     return (
        <ScreenContainer>
            <LogoImage src={logo}/>
            <LoginForm/>
            <SignUpButtonContainer>
            <Button
                onClick={() => goToSignUp(history)}
                type={"submit"}
                fullWidth
                variant={"text"}
                color={"primary"}
                
                >
                    Não Possui conta? Cadastre-se!
                    </Button>
            </SignUpButtonContainer>
        </ScreenContainer>

        
    )
}

export default LoginPages