import React from 'react';
import './ConditionsPage.css';
import myConditions from '../../Data/Conditions';
import { Fade, Zoom } from 'react-reveal';

const ConditionsPage = () => {
    const myConditionsData = myConditions.map(item => {
        return (
            <Fade right>
            <div className='row' key={item.id}>
                <div className='col-md-2 numbers'><span>{item.id}</span></div>
                <div className='col-md-10 prag2'>
                    <p>
                        {item.text1}
                        {item.text2}
                    </p>
                </div>
            </div></Fade>
        )
    })
    return (
        <div className='conditions-page' dir='rtl'>
            <div className='container'>
                <Zoom>
                <h4>الشروط والاحكام</h4></Zoom>
                <div className='prag'>
                    <Fade right>
                    <p> هذا الموقع ملك جمعية المتقاعدين بنجران وهي التي تقوم بإدارته .</p>
                    <p> يرجى قراءة هذه البنود والشروط جيداً حيث أنها شروط استخدام هذا الموقع التي قامت جمعية المتقاعدين بنجران بوضعها . </p>
                </Fade>
                </div>

                {myConditionsData}

            </div>
        </div>
    )
}
export default ConditionsPage;
