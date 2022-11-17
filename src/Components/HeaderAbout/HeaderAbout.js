import React from 'react';
import './HeaderAbout.css';
import NavOneTwo from '../NavOneTwo/NavOneTwo';
import Logo from '../../images/logo.png';
import { Zoom } from 'react-reveal';

export const HeaderAbout = () => {
    return (
        <div className='headerAbout'>
            <NavOneTwo />
            <div className='nav3'>
                <div className="overlay"></div>
                <Zoom>
                <div className="logo">
                    <img src={Logo} alt="my-logo" className="img-fluid" />
                </div></Zoom>
                <Zoom>
                <div className='titleAbout'>
                    <h3>من نحن</h3>
                </div></Zoom>
            </div>
        </div>
    )
}
