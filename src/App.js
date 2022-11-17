import './App.css';
import {Routes,Route} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Services from './Pages/Services';
import ServiceName from './Pages/ServiceName';
import Images from './Pages/Images';
import Videos from './Pages/Videos';
import CondQuestions from './Pages/Questions2.js';
import Conditions from './Pages/Conditions';
import ContactUs from './Pages/ContactUs';
import NavBar from './Components/NavOneTwo/NavBar';
function App() {
  return (
    <div className="App">
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route  path='about' element={<About />} />
                <Route  path='services' element={<Services />} />
                <Route  path='serviceName' element={<ServiceName />} />
                <Route  path='images' element={<Images />} />
                <Route  path='videos' element={<Videos />} />
                <Route  path='conditionsQuestions' element={<CondQuestions />} />
                <Route  path='conditions' element={<Conditions />} />
                <Route  path='contactUs' element={<ContactUs />} />
            </Routes>
            
    </div>
  );
}

export default App;
