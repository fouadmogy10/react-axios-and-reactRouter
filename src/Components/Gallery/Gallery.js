import React from 'react';
import { Tab , Tabs} from 'react-bootstrap';
import MyGallery from '../../Data/Gallery';
import VideoLogo from '../../images/video-play.png';
import './Gallery.css';
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';
const Gallerys = ()=> {
    const myGallery = MyGallery.map(item => {
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
    const myVideo = MyGallery.map(item => {
        return (
            <Fade right>
            <div className="img-cont2" key={item.id}>
                <div className="overLayVide"></div>
                <img src={item.img} alt={item.id} className="img-thumbnail" />
                <div className="vidLogo">
                    <img src={VideoLogo} alt="video-logo" className="img-fluid" />
                </div>
            </div></Fade>
        )
    })
    return (
        <div className="my-gallery">
            <div className="container">
                <Zoom top>
                <div className="title">
                    <h2>الجاليرى</h2>
                </div></Zoom>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-5">
                    <Tab eventKey="home" title="معرض الصور">
                        
                        <div className="div-img">
                            {myGallery}
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="معرض الفيديوهات">
                    <div className="div-img2">
                        {myVideo}
                    </div>
                    </Tab>
                </Tabs>

                

            </div>
            
        </div>
    )
} 
export default Gallerys;