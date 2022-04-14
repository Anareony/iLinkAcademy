import './styles/App.css';

import { Route, Routes } from "react-router-dom";
import Authorization from "./pages/Authorization";
import About from "./pages/About";
import PasswordRecovery from './pages/PasswordRecovery';

function App() {

    return (
        <Routes>
            <Route exact path='/' element={<About/>}/>
            <Route path='/auth' element={<Authorization/>}/>
            <Route path='/passwordrecovery' element={<PasswordRecovery/>}/>
        </Routes>
    );  
}

export default App;
