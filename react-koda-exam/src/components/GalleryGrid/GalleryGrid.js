import React from 'react';
import Images from './Images';
import GalleryImage from './galleryImage';

import './gallery.css';


const GalleryGrid = () =>(

    //<Gallery images={IMAGES}/>

<section class="gallery">
    <GalleryImage
        key="1" 
        src={Images[0]}
        date= "9 May 2013"
        caption = "Nice Image"
     />

     <GalleryImage 
        key="2" 
        src={Images[1]}
        date= "9 May 2013"
        caption = "Nice Image"
     />
     <GalleryImage 
        key="3" 
        src={Images[2]}
        date= "9 May 2013"
        caption = "Nice Image"
     />
     <GalleryImage 
        src={Images[3]}
        date= "9 May 2013"
        caption = "Nice Image"
     />
     <GalleryImage 
        src={Images[4]}
        date= "9 May 2013"
        caption = "Nice Image"
     />
     <GalleryImage 
        src={Images[5]}
        date= "9 May 2013"
        caption = "Nice Image"
     />
</section>
);

export default GalleryGrid;

