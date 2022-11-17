import React from 'react'
import Footer from '../Components/Footer/Footer';
import HeaderServiceName from '../Components/HeaderServiceName/HeaderServiceName';
import Mail from '../Components/Mail/Mail';
import ServiceNameBody from '../Components/ServiceNameBody/ServiceNameBody';

const ServiceName = () => {
    return (
        <div>
            <HeaderServiceName />
            <ServiceNameBody />
            <Mail />
            <Footer />
        </div>
    )
}
export default ServiceName;
