import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon'
import Button2 from '../Button2/Button2'
import Input from '../Input/Input'
import cl from './Modal.module.css'
import cross from './img/cross.svg'
import info from './img/info.svg'

const schema = yup.object().shape({
    names: yup
        .string()
        .matches(/^([^0-9]*)$/, "Имя и фамилия не должны содержать цифр")
        .required("Имя и фамилия обязательное поле"),
    body: yup
        .string()
        .max(200, 'Максимальная длина отзыва - 200 символов')
        .required("Нужно обязательно оставить отзыв"),
    picture: yup
        .mixed()
        .test('required', "You need to provide a file", (value) =>{
            return value && value.length
        })
        .test("fileSize", "The file is too large", (value) => {
            return value && value[0] && value[0].size <= 200000;
        })
})

const Modal = ({visible, setVisible}) => {

    const [ValueLenght, setValueLenght] = useState('0')

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const rootClasses = [cl.modal]

 
    if(visible) {
        rootClasses.push(cl.active)
    }

    const fileLoader = () => {
        const input = document.querySelector('#fileLoader');
        input.click();
    }

    const onSubmit = (data) => {
        console.log(data.names);
        console.log(data.body);
        console.log(data.picture[0].name);
        reset();
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.centered} onClick={ (e)=> e.stopPropagation()}>
                <form noValidate className={cl.modalContent} onSubmit={handleSubmit(onSubmit)}>
                    <div className={cl.inline}>
                        <div className={cl.header}>Отзыв</div>
                        <button type='button' onClick={() => setVisible(false)} className={cl.button}><img src={cross} alt='cross'/></button>
                    </div>
                    <div className={cl.information}>
                        <div className={cl.width}>
                            <div className={cl.label}>Как вас зовут?</div>
                            <Input 
                                {...register("names")}  
                                placeholder='Имя Фамилия'
                            />
                        </div>
                        <ButtonWithIcon 
                            style={{alignSelf: 'flex-end'}}
                            type='button' 
                            onClick={fileLoader}
                        >
                            Загрузить фото
                        </ButtonWithIcon>
                        <input 
                            {...register("picture")} 
                            type='file' 
                            className={cl.inputLoader} 
                            id="fileLoader"
                        />
                    </div>
                    { errors.picture && <div>{errors.picture.message}</div>}
                    { errors.names && <div>{errors.names.message}</div>}
                    <div className={cl.inputHeight}>
                        <div className={cl.label}>Все ли вам понравилось?</div>
                        <textarea 
                            {...register("body")} 
                            className={cl.textarea} 
                            placeholder="Напишите пару слов о вашем опыте..."
                            onChange={e => setValueLenght(e.target.value.length)}    
                        > 
                        </textarea>
                        <div className={cl.ValueLenght}>{ValueLenght}/200</div>
                        { errors.body && <span>{errors.body.message}</span>}
                    </div>
                    <div className={cl.submit}>
                        <Button2 type="submit">Отправить отзыв</Button2>
                        <div className={cl.info}><img style={{marginRight: '8px'}} src={info} alt=''/>Все отзывы проходят модерацию в течение 2 часов</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal