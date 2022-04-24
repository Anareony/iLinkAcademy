import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import cross from '../assets/cross.svg'

import { Modal, Content, Centered, Textarea, CancelBtn, Text, Header, Value, Container, HeaderText, Button, ButtonTomato, Btns } from './styles'

type IModalReview = {
    closeModal(value: boolean): void;
    review: string;
    setSucces(value: boolean): void;
}

const schema = yup.object().shape({
    body: yup
        .string()
        .required("Нужно обязательно оставить отзыв")
        .max(200, 'Максимальная длина отзыва - 200 символов'),
})

const ReviewModal: React.FC<IModalReview> = ({closeModal, review, setSucces}) => {
    
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });

    const [textValue, setTextValue] = useState(review);

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        closeModal(false)
        setSucces(true)
    });

    return (
        <Modal onClick={() => closeModal(false)}>
            <Centered onClick={ (e)=> e.stopPropagation()}>
                <Content onSubmit={onSubmit}>
                    <Header>
                        <HeaderText>Редактирование отзыва</HeaderText>
                        <CancelBtn type='button' onClick={() => closeModal(false)}><img src={cross} alt='cross'/></CancelBtn>
                    </Header>
                    <Container>
                        <Text>Отзыв</Text>
                        <Textarea
                            {...register("body")}
                            placeholder="Напишите пару слов о вашем опыте..."
                            value={textValue}
                            onChange={(e) => {
                                setTextValue(e.target.value)
                            }}    
                        > 
                        </Textarea>
                        <Value>{textValue.length}/200</Value>
                    </Container>
                    <Btns>
                        <Button type='submit'>Подтвердить редактирование</Button>
                        <ButtonTomato onClick={() => closeModal(false)}>Отмена</ButtonTomato>
                    </Btns>
                </Content>
            </Centered>      
        </Modal>
    )
}

export default ReviewModal