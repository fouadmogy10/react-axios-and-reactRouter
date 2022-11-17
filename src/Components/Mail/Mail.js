import React from 'react';
import './Mail.css';
import { Container , Row , Col } from 'react-bootstrap';
import { Fade, Zoom } from 'react-reveal';
const Mail = ()=> {
    return (
        <div className='my-mail'>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <Zoom top>
                        <div className="title mt-5">
                            <h2>النشرة البريدية</h2>
                        </div></Zoom>
                        <Fade right>
                        <div className='my-input mb-5'>
                            <input type='email' className='form-control' placeholder='اكتب بريدك الالكترونى ليصلك كل جديد' />
                            <button className='btn btn-success'>ارسال</button>
                            
                        </div></Fade>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}
export default Mail;