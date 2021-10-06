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

switch (action) {
  case 'ADD_OS_LIKES_USUARIOS':
    break;

    case 'ADD_OS_DISLIKES_USUARIOS':
    break;

    case 'ADD_OS_SUPERLIKES_USUARIOS':
    break;

    default:
      return people;
}

  return (
    <div className="app">
      <Header />

      {people[1] ? (
        <Person
        key={Person[1].id}
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
} ;

export default App;