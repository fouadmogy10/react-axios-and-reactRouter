import React from 'react';
import ConditionsPage from '../Components/ConditionsPage/ConditionsPage';
import Footer from '../Components/Footer/Footer';
import HeaderConditions from '../Components/HeaderConditions/HeaderConditions';
import Mail from '../Components/Mail/Mail';

const Conditions = () => {
    return (
        <div>
            <HeaderConditions />
            <ConditionsPage />
            <Mail />
            <Footer />
        </div>
    )
}
export default Conditions;
