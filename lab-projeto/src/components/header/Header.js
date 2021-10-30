import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolBar } from './styled';
import Button from '@material-ui/core/Button';
import { goToRecipeList, goToLogin} from '../../routes/coordinator'
import {useHistory} from 'react-router-dom'
import { LocalDiningOutlined } from '@material-ui/icons';
// import { makeStyles } from '@material-ui/core/styles';
// import Toolbar from '@material-ui/core/Toolbar';

const Header = () => {
    const history = useHistory()
    const token = localStorage.getItem("token")
    const [rigthButtonText, setRigthButtonText] = useState(token ? 'Logout' : 'Login')

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rigthButtonAction = () => {
        if(token) {
            logout()
            setRigthButtonText("Login")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }
    return (
        
            <AppBar position="static">
                <StyledToolBar>
                    <Button onClick={() => goToRecipeList(history)} color="inherit">Bubble Gum - sua nova rede social</Button>
                    <Button onClick={rigthButtonAction} color="inherit">{rigthButtonText}</Button>
                    
                </StyledToolBar>
            </AppBar>
        
    )
}

export default Header;