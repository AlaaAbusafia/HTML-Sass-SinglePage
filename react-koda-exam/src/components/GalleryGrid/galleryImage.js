import React from 'react'

const galleryImage =(props) => {
    return (
       <figure className="gallery__item overlay-effect">
            <img src={props.src} alt="Gallery image" className="gallery__img" />
            <div className="mask"> 
                <p className="mask__details">
                    <span className="mask__date">{props.date}</span>
                    {props.caption} </p>
        
            </div>
        </figure>
    )
}

export default galleryImage;
