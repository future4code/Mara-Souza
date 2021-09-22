import axios from "axios"
// import styled from 'styled-components'

// axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
//     headers: {
//         "Authorization": 'mara-souza-maryam'
//     }
// }).then((response) => {
//     console.log(response.data)

// }).catch((error) => {
//     console.log(error.response.data)
// })

const headers = {
    headers: {
        Authorization: "mara-souza-maryam"
    }
}

const getAllPlayList = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    // const headers = {
    //     headers: {
    //         Authorization: "mara-souza-maryam"
    //     }
    // }
    axios.get(url, headers)
    .then((response) => {
        console.log(response.data.result.list)
    })
    .catch((error) => {
console.log(error.response)
    if (error.response.status === 401) {
        console.log("Sem autorizacao")
    }
    })
      
    }

    const createPlaylist = (playListName) => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: "Gospel" 
        }
        axios.post(url, body, headers)
        .then((response) => {
console.log(response)
        }) 
        .catch((error) => {
        alert(error.response.data.message)
        })

    }

// getAllPlayList()
createPlaylist("Pop")


