import React from 'react';
import HeaderMain from "../Components/HeaderMain/HeaderMain";
import OurServices from "../Components/OurServices/OurServices";
import Gallerys from '../Components/Gallery/Gallery';
import Questions from "../Components/Questions/Questions";
import Mail from "../Components/Mail/Mail";
import Footer from "../Components/Footer/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <HeaderMain />
            <OurServices />
            <Gallerys />
            <Questions />
            <Mail />
            <Footer />
        </React.Fragment>
    )
}
export default Home ;
