import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddFeedPage from '../pages/AddFeedPage/AddFeedPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import LoginPages from '../pages/LoginPages/LoginPages'
import RecipeDetailPage from '../pages/RecipeDetailPage/RecipeDetailPage'
import RecipeListPage from '../pages/RecipeListPage/RecipeListPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
 

const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
                   
        <Route exact path="/login">
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

            <Route exact path="/">
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