import React, {useState, useEffect} from 'react'; 
import './App.css';
import Header from '../src/components/Header'; 
import Person from '../src/components/Person'; 
import Lonely from '../src/components/Lonely'; 
import data from '../src/data.json'; 

const App = () => {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  const removedPersonFromDataSrc = (peopleSource, userId) => 
  peopleSource.filter(user => user.id !== userId)

  

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people]
    const newLikedUsers = [...likedUsers]
    const newSuperLikedUsers = [...superLikedUsers]
    const newDislikedUsers = [...dislikedUsers]
  

    switch (action) {
      case 'ADD_OS_LIKES_USUARIOS':
        if(!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId)

          setLikedUsers(newLikedUsers)
          setPeople(removedPersonFromDataSrc(people, userId))
          
        }
        break;
 
        case 'ADD_OS_DISLIKES_USUARIOS':
          if(!people[activeUser].dislikedUsers.includes(userId)) {
            newPeople[activeUser].dislikedUsers.push(userId)
            newDislikedUsers.push(data[userId])

            setDislikedUsers(newLikedUsers)
            setPeople(removedPersonFromDataSrc(people, userId))
            
          }
        break;

        case 'ADD_OS_SUPERLIKES_USUARIOS':
          if(!people[activeUser].superLikedUsers.includes(userId)) {
            newPeople[activeUser].superLikedUsers.push(userId)
            newSuperLikedUsers.push(data[userId])
  
            superLikedUsers(newLikedUsers)
            setPeople(removedPersonFromDataSrc(people, userId))
            
          }
          break;
          default:
          return people;
    }
    }

  return (
    <div className="app">
      <Header />

      {people[1] ? (
        <Person
        key={people[1].id}
        Person={people[1]}
        modifySuperficialChoices={modifySuperficialChoices}
        likedUsers={likedUsers}
        />
      ): (
        <Lonely
        activeUserImage={people[activeUser].image}
        likedUsers={likedUsers}
        superLikedUsers={superLikedUsers}
        />
      )}
    </div>
  )
      }

  export default App;