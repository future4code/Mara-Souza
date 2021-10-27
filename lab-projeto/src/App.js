import React from 'react'
import AddFeedPage from './pages/AddFeedPage/AddFeedPage'
import LoginPages from './pages/LoginPages/LoginPages'
import RecipeDetailPage from './pages/RecipeDetailPage/RecipeDetailPage'
import RecipeListPage from './pages/RecipeListPage/RecipeListPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Router from './routes/Router'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
