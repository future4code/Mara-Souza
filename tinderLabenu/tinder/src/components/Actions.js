import React from 'react';
import Rewind from '../components/action/Rewind';
import Dislike from '../components/action/Dislike';
import Like from '../components/action/Like';
import SuperLike from '../components/action/SuperLike';

const Actions = ({person, modifySuperficialChoices}) => (
    <div id="Actions">
        <Rewind userId={person.id} />

        <Dislike
        userId={person.id}
        modifySuperficialChoices={modifySuperficialChoices}
        />

        <Like
        userId={person.id}
        modifySuperficialChoices={modifySuperficialChoices}
        />

        <SuperLike
        userId={person.id}
        modifySuperficialChoices={modifySuperficialChoices}
        />
    </div>
);

export default Actions;
