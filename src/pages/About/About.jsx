import React, {useState} from "react";
import Header from "../../components/Header/Header.jsx"
import Footer from "../../components/Footer/Footer";
import plus from "./assets/Vector.svg"
import Modal from "./Modal/Modal";
import Carousel from "./Carousel/Carousel";
import UserCard from "./UserCard/UserCard";
import ToastSucces from "../../components/ToastSucces/ToastSucces";

const About = () => {

    const [modal, setModal] = useState(false)
    const [toast, setToast] = useState(false)

    const user = {name:'Роман', surname:'Чудояков', city:'Томск', sex:'мужчина', age:'21', pets: 'нету', date: '20.09.2000',
        info: 'Всем привет! Меня зовут Роман, мне 22 года. Учусь в ТУСУРе, и параллельно изучаю программирование.'
    }
    const [reviewers] = useState(require('../../students.json'))
    
    const prev = () => {
        const prevBtn = document.querySelector('.prev')
        prevBtn.click();
    }

    const next = () => {
        const nextBtn = document.querySelector('.next')
        nextBtn.click();
    }
  return (
    <div className="App">
                <div className="wrapper">
                    <Header user={user}/>
                    <main className="main">
                        <div className="content">
                            <h3 className="mainText">Добро пожаловать<br/>в академию!</h3>
                            <UserCard user={user}/>
                            <div className="review">
                                <div className="review__container">
                                    <div className="inline">
                                        <h2 className="reviewHeader">Отзывы</h2>
                                        <button className='reviewBtn' onClick={()=>setModal(true)}>
                                            <img className='btnIcon' src={plus} alt='profile'/>
                                            <span className='inner'>Добавить отзыв</span>
                                        </button>
                                    </div>
                                    <Modal setShow={setToast} visible={modal} setVisible={setModal}></Modal>
                                    <Carousel reviewers={reviewers}/>
                                </div>
                                <button className="prevBtn" onClick={prev}><div className="prevInner"></div></button>
                                <button className="nextBtn" onClick={next}><div className="nextInner"></div></button>
                            </div>
                        </div>
                    </main>
                    <Footer/>
                    <ToastSucces 
                        title="Успешно!"
                        body="Спасибо за отзыв о нашей компании :)"
                        show={toast} 
                        setShow={setToast}       
                    />
                </div>
            </div>
  )
}

export default About