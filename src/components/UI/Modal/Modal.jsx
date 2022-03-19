import React from 'react'
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon'
import Button2 from '../Button2/Button2'
import Input from '../Input/Input'
import classes from './Modal.module.css'

const Modal = ({visible, setVisible}) => {

    const rootClasses = [classes.modal]
    
    if(visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                <div>Отзыв</div>
                <div>Как вас зовут?</div>
                <Input placeholder='Имя Фамилия'/>
                <ButtonWithIcon>Загрузить фото</ButtonWithIcon>
                <div>Все ли вам понравилось?</div>
                <Input placeholder='Напишите пару слов о вашем опыте...'/>
                <Button2>Отправить отзыв</Button2>
                <div>Все отзывы проходят модерацию в течение 2 часов</div>
            </div>
        </div>
    )
}

export default Modal