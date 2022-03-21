import React, { useState } from 'react'
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon'
import Button2 from '../Button2/Button2'
import Input from '../Input/Input'
import cl from './Modal.module.css'

const Modal = ({visible, setVisible}) => {

    const [name, setName] = useState("");
    const rootClasses = [cl.modal]
    if(visible) {
        rootClasses.push(cl.active)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.centered} onClick={ (e)=> e.stopPropagation()}>
                <form className={cl.modalContent} onSubmit={handleSubmit} >
                    <div className={cl.inline}>
                        <div className={cl.header}>Отзыв</div>
                        <button className={cl.button}>x</button>
                    </div>
                    <div className={cl.information}>
                        <div className={cl.width}>
                            <div className={cl.label}>Как вас зовут?</div>
                            <Input value={name} placeholder='Имя Фамилия' onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <ButtonWithIcon>Загрузить фото</ButtonWithIcon>
                    </div>
                    <div className={cl.inputHeight}>
                        <div className={cl.label}>Все ли вам понравилось?</div>
                        <textarea  required className={cl.textarea} maxLength='200' placeholder="Напишите пару слов о вашем опыте..."></textarea>
                    </div>
                    <div className={cl.inline}>
                        <Button2 type="submit">Отправить отзыв</Button2>
                        <div>Все отзывы проходят модерацию в течение 2 часов</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal