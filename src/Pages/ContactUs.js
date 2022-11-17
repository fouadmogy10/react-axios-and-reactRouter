import React from 'react';
import ContactUsPage from '../Components/ContactUsPage/ContactUsPage';
import Footer from '../Components/Footer/Footer';
import HeaderContactUs from '../Components/HeaderContactUs/HeaderContactUs';
import Mail from '../Components/Mail/Mail';

const ContactUs = () => {
    return (
        <div>
            <HeaderContactUs />
            <ContactUsPage />
            <Mail />
            <Footer />
        </div>
    )
}
export default ContactUs;
