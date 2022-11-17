import React from 'react';
import './GalImages.css';
import MyGallery from '../../Data/Gallery';
import { Fade } from 'react-reveal';


const GalImages = () => {
    const myGalImages = MyGallery.map(item => {
        return (
            <Fade right>
            <div className="img-cont" key={item.id}>
                <img src={item.img} alt={item.id} className="img-thumbnail" />
                <div className="overlay">
                    <p>هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة</p>
                    <i className="fas fa-external-link-alt"></i>
                </div>
            </div></Fade>
        )
    })
    return (
            <div className='container galImages'> 
                <div className="div-img-gal">
                    {myGalImages}
                </div>
                
            </div>
    )
}
export default GalImages;
