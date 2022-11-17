import React from 'react';
import './Footer.css';
import FooterLogo from '../../images/footer-logo.png';
import { Link } from 'react-router-dom';
import { Fade, Zoom } from 'react-reveal';
// import BackToTop from 'react-back-to-top-button';
const Footer = () => {
    let myScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div className='all-footer'>
            <div className='my-footer'>
                <div className='overlay'></div>
                    <div className='btn-top' onClick={myScrollTop} >
                        <i className="fas fa-chevron-circle-up"></i>
                    </div>
                <div className='my-content'>
                    <div className='container'>
                        <div className='my-nav'>
                            <ul className='list-inline' dir='rtl'>
                                <Fade right>
                                <li className='list-inline-item'>
                                    <Link to='/' >الرئيسية</Link>
                                </li></Fade>
                                <Fade right>
                                <li className='list-inline-item'>
                                    <Link to='/about'> من نحن</Link>
                                </li></Fade>
                                <li className="list-inline-item">
                                    <Link to='/services'>الخدمات</Link>
                                </li>
                                <Fade right>
                                <li className='list-inline-item'>
                                    <Link to='/images'>المعرض</Link>
                                </li></Fade>
                                <Fade right>
                                <li className="list-inline-item">
                                    <Link to='/conditionsQuestions'>الأسئلة الشائعة</Link>
                                </li></Fade>
                                <Fade right>
                                <li className="list-inline-item">
                                    <Link to='/conditions'>الشروط والاحكام</Link>
                                </li></Fade>
                                <Fade right>
                                <li className="list-inline-item">
                                    <Link to='/contactUs'>تواصل معنا</Link>
                                </li></Fade>
                            </ul>
                        </div>
                        <Zoom top>
                        <div className='my-logo'>
                            <img src={FooterLogo} className='img-fluid' alt='my-footer-logo' />
                        </div></Zoom> 
                        <div className='my-contact'>
                            <div className='row text-center'>
                                <Fade right>
                                <div className='col-md-4'>
                                    <div>
                                        <i className="fas fa-phone-alt"></i>
                                        <span className='ms-3'>+966 12-345-67-89</span>
                                    </div>
                                    
                                </div></Fade>
                                <Fade right>
                                <div className='col-md-4'>
                                    <div>
                                        <i className="fas fa-inbox"></i>
                                        <span className='ms-3'>+966 12-345-67-89</span>
                                    </div>
                                </div></Fade>
                                <Fade right>
                                <div className='col-md-4'>
                                    <div>
                                        <i className="fas fa-envelope"></i>
                                        <span className='ms-3'>info@mail.com </span>
                                    </div>
                                </div></Fade>
                            </div>
                        </div>
                        <div className='my-social mt-5 mb-2'>
                            <ul className='list-inline'>
                                <Fade right>
                                <li className='list-inline-item'>
                                    <i className="fab fa-twitter"></i>
                                </li></Fade>
                                <Fade right>
                                <li className='list-inline-item'>
                                    <i className="fab fa-linkedin"></i>
                                </li></Fade>
                                <Fade right>
                                <li className='list-inline-item'>
                                    <i className="fab fa-instagram"></i>
                                </li></Fade>
                                <Fade right>
                                <li className='list-inline-item'>
                                    <i className="fab fa-google-plus-g"></i>
                                </li></Fade>
                                <Fade right>
                                <li className='list-inline-item'>
                                    <i className="fab fa-facebook-square"></i>
                                </li></Fade>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='footer'>
                <div className='container'>
                    <div className='row'>
                       <Fade left>
                        <div className='col-md-6'>
                            <p>تصميم وتطوير سمارت فيجن</p>
                        </div></Fade>
                       <Fade right>
                        <div className='col-md-6'>
                            <p>جميع الحقوق محفوظة لموقع جمعية المتقاعدين بمنطقة نجران</p>
                        </div></Fade>
                    </div>
                </div>
            </footer>
        </div>
        
    )
}
export default Footer;