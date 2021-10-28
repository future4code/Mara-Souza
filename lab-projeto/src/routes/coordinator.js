

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToRecipePage = (history) => {
    history.push("/")
}

export const goToRecipeDetail = (history, id) => {
    history.push(`/detalhe/${id}`)
}

export const goToRecipeList = (history) => {
    history.push("/feed")
}

export default coordinator

