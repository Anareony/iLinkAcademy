import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import cross from '../assets/cross.svg'

const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;  
    left: 0;
    right: 0;
    display: block;
    background-color:rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);
    width: 100%;
    height: 100%;
    z-index: 500;
`

const Content = styled.form`
    display: flex;
    flex-direction: column;
    padding: 24px;
    background: white;
    @media (max-width: 768px) {
        padding: 16px;
    }  
`
const Centered = styled.div`
    max-width: 676px;
    margin: 150px auto;
    max-height: 443px;
    @media (max-width: 768px) {
        min-height: 476px;
        margin: 80px 16px;
    }
`

const Textarea = styled.textarea`
    outline: none;
    border: 1px solid rgba(224, 224, 224, 1);
    padding: 12px 12px 0 12px;
    min-height: 105px;
    resize: none;
    width: 100%;
    font-family: "Gilroy";
    font-size: 14px;
    line-height: 22px;
    color: #8A8A8A;
    @media (max-width: 768px) {
        min-height: 222px;
    }
`

const CancelBtn = styled.button`
    border: none;
    cursor: pointer;
    @media (max-width: 768px) {
        align-self: flex-start
    }
`
const Text = styled.div`
    font-family: 'Factor A';
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.0124rem;
    margin-bottom: 12px;
`

const Header = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
`

const HeaderText = styled.div`
    font-family: 'Factor A';
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.0124rem;
    @media (max-width: 768px) {
        font-size: 22px;
        line-height: 26px;
    }
`
const Value = styled.div`
    font-family: 'Gilroy';
    font-size: 10px;
    line-height: 14px;
    position: absolute;
    bottom: 10px;
    right: 5px;
`

const Container = styled.div`
    position: relative;
`

const Button = styled.button`
    padding: 17px 28px;
    border: none;
    background: #585CC6;
    color: #fff;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.01rem;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 12px 25px;
    }
`

const ButtonTomato = styled(Button)`
    margin-left: 12px;
    background: #EB5757;
    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 8px;
        font-size: 14px;
        padding: 12px 25px;
    }
`

const Btns = styled.div`
    display: flex;
    margin-top: 40px;

    @media (max-width: 768px) {
        margin-top: 32px;
        flex-direction: column;
    }
`

const schema = yup.object().shape({
    body: yup
        .string()
        .max(200, 'Максимальная длина отзыва - 200 символов')
        .required("Нужно обязательно оставить отзыв"),
})

interface IModalReview {
    closeModal(value: boolean): void;
    review: string;
    setSucces(value: boolean): void;
}

const ReviewModal: React.FC<IModalReview> = ({closeModal, review, setSucces}) => {
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
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