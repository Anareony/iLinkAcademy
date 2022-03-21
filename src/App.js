import React, {useState} from "react";
import './styles/App.css';
import Header from "./components/UI/Header/Header.jsx"
import Footer from "./components/UI/Footer/Footer";
import ButtonWithIcon from "./components/UI/ButtonWithIcon/ButtonWithIcon";
import Modal from "./components/UI/Modal/Modal";
import Carousel from "./components/UI/Carousel/Carousel";
import UserCard from "./components/UI/UserCard/UserCard";


function App() {

    const [modal, setModal] = useState(false)
    const user = {name:'Роман', surname:'Чудояков', city:'Томск', sex:'Мужчина', age:'21', pets: 'Нету'  }
    const [reviewers] = useState([
        { id: 1, name:"Буба", surname: 'Бубенцов', date: '08.01.2022', body: 'Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.'},
        { id: 2, name:"Илья", surname: 'Анташкевич', date: '08.01.2022', body: 'Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.'},
        { id: 3, name:"Юрина", surname: 'Маргарита', date: '26.12.2021', body: 'Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.'},
        { id: 4, name:"Дмитрий", surname: ' Иванов', date: '16.12.2021', body: 'Отвечала за найм и адаптацию сотрудников в компании, за поддержание на нужном уровне HR-бренда и трудового настроя коллектива. В компанию пришла без опыта работы HR-ом. Всему научилась здесь. Как теории, так и практике. Набрала опыт достаточно быстро. Есть программа обучения, поощряются различные курсы, и это большой плюс. В коллективе очень дружная атмосфера. Все дружелюбные, амбициозные.'}
      ])

    return (
        <div className="App">
            <div className="wrapper">
                <Header user={user}/>
                <main className="main">
                    <div className="content">
                        <h3 className="mainText">Добро пожаловать<br/>в академию!</h3>
                        <UserCard user={user}/>
                        <div className="review">
                            <h2 className="reviewHeader">Отзывы</h2>
                            <ButtonWithIcon onClick={()=>setModal(true)}>Добавить отзыв</ButtonWithIcon>
                            <Modal visible={modal} setVisible={setModal}></Modal>
                            <Carousel reviewers={reviewers}/>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
