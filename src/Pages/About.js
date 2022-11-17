import React from 'react';
import Footer from '../Components/Footer/Footer';
import { HeaderAbout } from '../Components/HeaderAbout/HeaderAbout';
import Mail from '../Components/Mail/Mail';
import NgranArea from '../Components/NgranArea/NgranArea';

const About = () => {
    return (
        <div>
            <HeaderAbout />
            <NgranArea />
            <Mail />
            <Footer />
        </div>
    )
}
export default About;