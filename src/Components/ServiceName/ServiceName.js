import React from 'react';
import './ServiceName.css';
import serviceNameData from '../../Data/ServiceNameData';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

const ServiceName = () => {
    const fetchData = serviceNameData.map(item => {
        return (
            <Fade right>
            <div className='col-md-3 col-sm-6 col-12 mt-4 mb-4' key={item.id}>
                <div className='oneServ' >
                    <div className='logo-service'>
                        <img src={item.img} alt={item.id} className='img-fluid' />
                    </div> 
                    <h4> {item.title} </h4>
                    <p> {item.text} </p>
                    <button className='btn'>
                        <Link to='/serviceName'>اقرء المزيد</Link>
                    </button>
                </div>
            </div></Fade>
            
        )
    })
    return (
        <div className='service-name'>
            
            <div className='container'>
                <div className='row mt-5 mb-5'>

                    {fetchData}

                </div>
            </div>
        </div>
    )
}
export default ServiceName;
