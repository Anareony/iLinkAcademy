import React from "react";
import './styles/App.css';
import Header from "./components/UI/Header/Header.jsx"
import Footer from "./components/UI/Footer/Footer";
import Button1 from "./components/UI/Button1/Button1";
import ButtonWithIcon from "./components/UI/ButtonWithIcon/ButtonWithIcon";
import FeedbackCard from "./components/UI/FeedbackCard/FeedbackCard";
import ToastSucces from "./components/UI/ToastSucces/ToastSucces";
import Input from "./components/UI/Input/Input";

function App() {
    return (
        <div className="App">
            <Header/>
            <Footer/>
            <Button1>Кнопка</Button1>
            <ButtonWithIcon>Button 2</ButtonWithIcon>
            <FeedbackCard>Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.</FeedbackCard>
            <ToastSucces></ToastSucces>
            <Input></Input>
        </div>
    );
}

export default App;
