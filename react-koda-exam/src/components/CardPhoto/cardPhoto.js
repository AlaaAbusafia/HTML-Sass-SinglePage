import React from 'react';
import personPhoto from '../../_assets/team1.jpg';


const cardPhoto = (props) => (
    <div className="personPhoto">
        <img src={personPhoto} className="card__img" alt="Mike Smith" />
    </div>
);

export default cardPhoto;