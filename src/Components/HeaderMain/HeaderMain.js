import React from 'react';
import './style.css';
import Logo from '../../images/logo.png';
import WhoareLogo from '../../images/who-are-logo.png';
import NavOneTwo from '../NavOneTwo/NavOneTwo';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
function HeaderMain() {
    return (
        <div className="HeaderMain">
            <div className="main-comp1">
                <NavOneTwo />
                
                <div className="nav3">
                    <div className="overlay"></div>
                    <Fade top>
                    <div className="logo">
                        <img src={Logo} alt="my-logo" className="img-fluid" />
                    </div></Fade>
                    <Fade right>
                    <div className="ngran">
                        <h2>جمعية المتقاعدين بمنطقة نجران</h2>
                        <h4>كتابة نص هنا</h4>
                    </div>
                    </Fade>
                    <div className="dots">
                        <span className="span1"></span>
                        <span className="span2"></span>
                    </div>
                </div>
                
                <footer>
                    <Fade right>
                    <p>
                        اخر الاخبار / هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً</p>
                </Fade>
                </footer>
            </div>
            <div className="main-comp2">
                <div className="container">
                <Fade top>
                    <div className="title">
                        <h2>من نحن</h2>
                    </div>
                    </Fade>

                    <div className="about">
                        <div className="row">
                        <Fade left>
                            <div className="col-md-6 col-sm-12 mb-4">
                                <img src={WhoareLogo} className="img-fluid" alt="who-are-logo" />
                            </div></Fade>
                                <Fade right>
                            <div className="col-md-6 col-sm-12 text-end">
                                <div className="title2">
                                    <h6> بجمعية المتقاعدين</h6>
                                    <p className="h6">بمنطقة نجران</p>
                                </div>
                                    
                                <p>
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                                النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق .
                                </p>
                                <button className="btn">
                                    <Link to='/about'>اقرء المزيد</Link>
                                </button>
                            </div></Fade>
                        </div>
                    </div>
                </div>
            </div>

            
           
        </div>
    )
}

export default HeaderMain
