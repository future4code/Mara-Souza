import React from 'react';
import Actions from '../components/Actions'

const Person = ({Person, modifySuperficialChoices}) => (
    const {name, desc, age, image} = Person

return (
    <>
        <div className="Person">
        <div className="Person-Photo">
            <img src={`/image/users/${image}`} alt={name} />
            </div> 

            <div className="Person-Description">
            <p className="Person-name-age">
               {name}, <span>{age}</span> 
            </p>  
            <p className="Person-info">{desc}</p>              
          </div> 
        </div>

        <Actions
        Person={Person}
        modifySuperficialChoices={modifySuperficialChoices}
        />
    </>
)
)


export default Person;