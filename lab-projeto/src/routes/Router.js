import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddFeedPage from '../pages/AddFeedPage/AddFeedPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import LoginPages from '../pages/LoginPages/LoginPages'
import RecipeDetailPage from '../pages/RecipeDetailPage/RecipeDetailPage'
import RecipeListPage from '../pages/RecipeListPage/RecipeListPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
 import Header from '../components/header/Header'

const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Switch>
                   
        <Route exact path="/">
                <LoginPages/>
            </Route>

            <Route exact path="/cadastro">
                <SignUpPage/>
            </Route>

            <Route exact path="/pagina-de-Feed">
                <AddFeedPage/>
            </Route>

            <Route exact path="/detalhe/:id">
                <RecipeDetailPage/>
            </Route>

            <Route exact path="/Login">
                <RecipeListPage/>
            </Route>          

            <Route>
                <ErrorPage/>
            </Route>

        </Switch>
        </BrowserRouter>
    )
}

export default Router