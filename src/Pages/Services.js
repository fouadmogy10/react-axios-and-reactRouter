import React from 'react'
import Footer from '../Components/Footer/Footer';
import HeaderServices from '../Components/HeaderService/HeaderService';
import Mail from '../Components/Mail/Mail';
import ServiceName from '../Components/ServiceName/ServiceName';

const Services = () => {
    return (
        <div>
            <HeaderServices />
            <ServiceName />
            <Mail />
            <Footer />
        </div>
    )
}
export default Services;