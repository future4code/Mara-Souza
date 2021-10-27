
export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToFeedPage = (history) => {
    history.push("/pagina-de-Feed")
}

export const goToRecipeDetail = (history, id) => {
    history.push(`/detalhe/${id}`)
}

export const goToRecipeList = (history) => {
    history.push("/")
}

