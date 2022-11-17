import React from 'react';
import '../HeaderAbout/HeaderAbout.css';
import NavOneTwo from '../NavOneTwo/NavOneTwo';
import Logo from '../../images/logo.png';
import { Fade, Zoom } from 'react-reveal';

const HeaderContactUs = () => {
    return (
        <div className='headerAbout'>
            <NavOneTwo />
            <div className='nav3'>
                <div className="overlay"></div>
                <Zoom>
                <div className="logo">
                    <img src={Logo} alt="my-logo" className="img-fluid" />
                </div></Zoom>
                <Fade>
                <div className='titleAbout'>
                    <h3>تواصل معنا</h3>
                </div></Fade>
            </div>
        </div>
    )
}
export default HeaderContactUs;
