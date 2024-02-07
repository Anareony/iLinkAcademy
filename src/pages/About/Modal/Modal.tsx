import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import ButtonWithIcon from '../../../components/ButtonWithIcon/ButtonWithIcon'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import cl from './Modal.module.css'

import cross from '../assets/cross.svg'
import info from '../assets/info.svg'
import error from '../assets/error.svg'
import fileIcon from '../assets/fileIcon.svg'
import deleteIcon from '../assets/Delete.svg'

import { Container, ModalForm, Header, Feedback, Error} from './styles'

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
        .test('required', 'You need to provide a file', (value) =>{
            return value && value.length
        })
        .test("fileSize", "The file is too large", (value) => {
            return value && value[0] && value[0].size <= 200000;
        })
})

interface IModal {
    visible: boolean;
    setVisible: (isOpen: boolean) => void;
    setShow: (isOpen: boolean) => void;
}

const Modal = ({visible, setVisible, setShow}: IModal) => {

    const [ValueLenght, setValueLenght] = useState<number>(0)

    const { register, handleSubmit,resetField, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    const [file, setFile] = useState('')

    const rootClasses = [cl.modal]

    if(visible) {
        rootClasses.push(cl.active)
    }

    const fileLoader = () => {
        const input: HTMLElement = document.querySelector('#fileLoader') as HTMLElement;
        input.click();
    }
    
    const onSubmit = (data:any) => {
        console.log(data.names);
        console.log(data.body);
        console.log(data.picture[0].name);
        setShow(true);
        setVisible(false);
        setValueLenght(0);
        setFile('');
        reset();
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <Container onClick={ (e)=> e.stopPropagation()}>
                <ModalForm noValidate className={cl.modalContent} onSubmit={handleSubmit(onSubmit)}>
                    <Header>
                        <div className={cl.header}>Отзыв</div>
                        <button type='button' onClick={() => setVisible(false)} className={cl.button}><img src={cross} alt='cross'/></button>
                    </Header>
                    <div className={cl.information}>
                        <div className={cl.width}>
                            <div className={cl.label}>Как вас зовут?</div>
                            <Input 
                                {...register("names")}  
                                placeholder={'Имя Фамилия'}
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
                            {...register("picture", {
                                onChange: (e)  => {
                                    setFile(e.target.files[0].name)
                                }
                            })} 
                            type='file' 
                            className={cl.inputLoader} 
                            id="fileLoader"
                            accept=".jpg, .jpeg, .png"                
                        />
                    </div>
                    { !file ? <p></p> : <div className={cl.fileDisplay}>
                                        <img src={fileIcon} alt='fileicon'/>
                                        <div className={cl.fileName}>
                                            <p>{file}</p>
                                        </div>
                                        <button 
                                            onClick={() => {
                                                resetField('picture')
                                                setFile('')}
                                            } 
                                            className={cl.deleteBtn} 
                                             type='button'
                                        >
                                            <img src={deleteIcon} alt='deleteIcon'/>
                                        </button>
                                    </div>
                    }
                    { errors.picture && <Error><img src={error} alt='error'/>{errors.picture.message}</Error>}
                    { errors.names && <Error><img src={error} alt='error'/>{errors.names.message}</Error>}
                    <Feedback>
                        <div className={cl.label}>Все ли вам понравилось?</div>
                        <textarea 
                            {...register("body")} 
                            className={cl.textarea} 
                            placeholder="Напишите пару слов о вашем опыте..."
                            onChange={e => setValueLenght(e.target.value.length)}    
                        > 
                        </textarea>
                        <div className={cl.ValueLenght}>{ValueLenght}/200</div>
                    </Feedback>
                    { errors.body && <Error className={cl.error}><img src={error} alt='error'/>{errors.body.message}</Error>}
                    <div className={cl.submit}>
                        <Button type="submit">Отправить отзыв</Button>
                        <div className={cl.info}><img style={{marginRight: '8px'}} src={info} alt=''/>Все отзывы проходят модерацию в течение 2 часов</div>
                    </div>
                </ModalForm>
            </Container>
        </div>
    )
}

export default Modal