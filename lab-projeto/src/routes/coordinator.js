

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToRecipePage = (history) => {
    history.push("/Feed")
}

export const goToRecipeDetail = (history, id) => {
    history.push(`/detalhe/${id}`)
}

export const goToRecipeList = (history) => {
    history.push("/")
}



