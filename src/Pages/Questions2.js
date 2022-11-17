import React from 'react';
import Footer from '../Components/Footer/Footer';
import HeaderQuestions from '../Components/HeaderQuestions/HeaderQuestions';
import Mail from '../Components/Mail/Mail';
import QuestionsPage from '../Components/QuestionsPage/QuestionsPage';

const CondQuestions = () => {
    return (
        <div>
            <HeaderQuestions />
            <QuestionsPage />
            <Mail />
            <Footer />
        </div>
    )
}
export default CondQuestions;
