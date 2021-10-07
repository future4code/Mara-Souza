import React from 'react'
import LikedPerson from './LikePerson'

const Lonely = ({activeUserImage, likedUsers, superLikedUsers}) => (
    <div className="Lonely">
        <p>Não há nada de Novo</p>
    <span className="pulse">
        <img src={`/image/users/${activeUserImage}`} alt="You..." />
    </span>

    <div id="liked-people">
        <p>{likedUsers.length > 0 &&  "A pessoas que vc gostou... Espero que gostem de vc tmbm"}</p>
         
            {likedUsers.map(item => (
                <LikedPerson key={item.id} person={item} />
            ))}

            <p>{superLikedUsers.length && "Pessoas que vc gostou Muito"}</p>
    
            {superLikedUsers.map(item => (
                <LikedPerson key={item.id} person={item} />
            ))}
    
    </div>
    </div>
)



export default Lonely;