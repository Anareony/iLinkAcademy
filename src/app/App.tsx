import './app.css';

import { Route, Routes } from "react-router-dom";
import Authorization from "../pages/Authorization/Authorization";
import About from "../pages/About/About";
import PasswordRecovery from '../pages/PasswordRecovery/PasswordRecovery';
import Students from '../pages/Students/Students';
import Feedback from '../pages/Feedback/Feedback';
import AboutMe from '../pages/AboutMe/AboutMe';

const App:React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Authorization/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/passwordrecovery' element={<PasswordRecovery/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/aboutme' element={<AboutMe/>}/>
        </Routes>
    );  
}

export default App;
