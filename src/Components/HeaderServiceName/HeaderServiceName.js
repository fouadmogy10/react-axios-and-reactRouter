import React from 'react';
import NavOneTwo from '../NavOneTwo/NavOneTwo';
import Logo from '../../images/logo.png';
import '../HeaderAbout/HeaderAbout.css';
const HeaderServiceName = () => {
    return (
        <div className='headerAbout'>
            <NavOneTwo />
            <div className='nav3'>
                <div className="overlay"></div>
                <div className="logo">
                    <img src={Logo} alt="my-logo" className="img-fluid" />
                </div>
                <div className='titleAbout'>
                    <h3>الخدمات / اسم الخدمة</h3>
                </div>
            </div>
        </div>
    )
}
export default HeaderServiceName ;
