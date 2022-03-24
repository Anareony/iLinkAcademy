import React, {useState} from "react";
import './styles/App.css';
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer";
import plus from "./img/Vector.svg"
import Modal from "./components/Modal/Modal";
import Carousel from "./components/Carousel/Carousel";
import UserCard from "./components/UserCard/UserCard";
import ToastSucces from "./components/ToastSucces/ToastSucces";
import img1 from './components/FeedbackCard/img/1.png'
import avatar from './components/FeedbackCard/img/Camera.svg'
import img2 from './components/FeedbackCard/img/3.png'
import img3 from './components/FeedbackCard/img/4.png'

function App() {

    const [modal, setModal] = useState(false)
    const [toast, setToast] = useState(false)

    const user = {name:'Роман', surname:'Чудояков', city:'Томск', sex:'мужчина', age:'21', pets: 'нету', date: '20.09.2000',
        info: 'Всем привет! Меня зовут Роман, мне 21 года. Раньше учился в ТУСУРе по направлению квантовая и оптическая электроника, но решил сменить направление своей деятельности из-за интереса к программированию, да и перспективы и качество условий труда выше.'
    }
    const [reviewers] = useState([
        { id: 1, name:"Буба", surname: 'Бубенцов', avatar: img1, date: '08.01.2022', body: 'Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.'},
        { id: 2, name:"Илья", surname: 'Анташкевич', avatar: avatar, date: '08.01.2022', body: 'Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.'},
        { id: 3, name:"Юрина", surname: 'Маргарита', avatar: img2, date: '26.12.2021', body: 'Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.'},
        { id: 4, name:"Дмитрий", surname: ' Иванов', avatar: img3, date: '16.12.2021', body: 'Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. Всему научилась здесь. Как теории, так и практике. Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.'}
      ])
    
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
                                <Modal show={toast} setShow={setToast} visible={modal} setVisible={setModal}></Modal>
                                <Carousel reviewers={reviewers}/>
                            </div>
                            <button className="prevBtn" onClick={prev}><div className="prevInner"></div></button>
                            <button className="nextBtn" onClick={next}><div className="nextInner"></div></button>
                        </div>
                    </div>
                </main>
                <Footer/>
                <ToastSucces show={toast} setShow={setToast}></ToastSucces>
            </div>
        </div>
    );
}

export default App;
