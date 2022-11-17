import React from 'react';
import './NgranArea.css';
import WhoareLogo from '../../images/who-are-logo.png';
import { Fade, Zoom } from 'react-reveal';


const NgranArea = () => {
    return (
        
            <div className="ngranArea">
                <div className="container">
                    <Zoom top>
                    <div className="title">
                        <h2>من نحن</h2>
                    </div></Zoom>
                    <div className="about">
                        <div className="row">
                            <Fade left>
                            <div className="col-md-6 col-sm-12 mb-4">
                                <img src={WhoareLogo} className="img-fluid" alt="who-are-logo" />
                            </div></Fade>
                            <Fade right>
                            <div className="col-md-6 col-sm-12 text-end">
                                <Fade right>
                                <div className="title2">
                                    <h6> بجمعية المتقاعدين</h6>
                                    <p className="h6">بمنطقة نجران</p>
                                </div></Fade>
                                <p>
                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                    إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع
                                </p>
                                
                            </div></Fade>
                        </div>
                        <Fade left>
                        <div className='row'>
                            <p className='text-end p2'>
                                ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق. <br />
                                هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.

                            </p>
                        </div></Fade>
                    </div>
                </div>
            </div>
        
    )
}
export default NgranArea;
