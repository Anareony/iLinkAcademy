import React, {useState, useEffect} from "react";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import plus from "./assets/Vector.svg"
import Modal from "./Modal/Modal";
import Carousel from "./Carousel/Carousel";
import UserCard from "./UserCard/UserCard";
import ToastSucces from "../../components/ToastSucces/ToastSucces";
import { useStore } from "effector-react";
import { userStore } from "../../store/store";
import { userReviewsStore } from "../../store/reviews";
import Loader from "../../components/Loader/Loader";

const About = () => {

    const [modal, setModal] = useState<boolean>(false)
    const [toast, setToast] = useState<boolean>(false)
    
    const handleClick = (className:string) => {
        const prevBtn:HTMLElement = document.querySelector(className) as HTMLElement;
        prevBtn.click();
    }

    useEffect(() => {
        userStore.getUserInfo()
        userReviewsStore.getUserReviews([]);
    }, []);

    const userInfo = useStore(userStore.$userInfo);
    console.log(userInfo)
    
    return (
    <div className="App">
             {userInfo.id ? <div className="wrapper">
                    <Header/>
                    <main className="main">
                        <div className="content">
                            <h3 className="mainText">Добро пожаловать<br/>в академию!</h3>
                            <UserCard/>
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
                                    <Carousel/>
                                </div>
                                <button className="prevBtn" onClick={() => handleClick('.swiper-button-prev')}></button>
                                <button className="nextBtn" onClick={() => handleClick('.swiper-button-next')}></button>
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
                </div> :
                <Loader/>}   
            </div>
  )
}

export default About