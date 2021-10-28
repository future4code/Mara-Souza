import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'


const  AddRecipePage = () => {
    useProtectedPage()

    return (
        <div>
            <h1>AddFeedPage</h1>
        </div>
    )
}

export default AddRecipePage