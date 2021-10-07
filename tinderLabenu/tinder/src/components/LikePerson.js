import React from 'react';

const LikedPerson = ({person}) => (
<div className="liked-person">
    <div className="liked-person-image">
    <img 
    src={`/image/users/${person.image}`}
    alt={`Voce Curtiu ${person.name}`}
    />
    </div>
    
</div>
);

export default LikedPerson;
