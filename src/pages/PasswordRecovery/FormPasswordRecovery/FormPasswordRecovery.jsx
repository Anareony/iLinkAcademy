import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import ToastSucces from '../../../components/ToastSucces/ToastSucces';
import ToastError from '../../../components/ToastError/ToastError';

import {  MobileText, Text, BtnWrapper, Button, HeaderWrapper, Wrapper, StyledButton, StyledInput, Helper, Msg, StyledLink, Label, Header, Form } from './styles'

const schema = yup.object().shape({
    email: yup
        .string()
        .matches(/^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9-]){1,25}\.)([a-zA-Z0-9]{2,4})$/, "Недопустимые адрес электронной почты")
        .required("Имя и фамилия обязательное поле"),
})

const FormPasswordRecovery = () => {

    const { register, handleSubmit, formState: { errors }} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    const [emailValue, setEmailValue] = useState('');
    const [succes, setSucces] = useState(false)
    const [error, setError] = useState(false)

    const database = {
        email: "user@gmail.com",
    }

    const onSubmit = (data) => {
        if(data.email === database.email) { 
            setTimeout(() => setSucces(true), 2000) 
            setTimeout(() => setSucces(false), 10000) 
        } else {
            setTimeout(() => setError(true), 2000) 
            setTimeout(() => setError(false), 10000) 
        }
        console.log(data.email)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <HeaderWrapper>
                <StyledLink to='/auth'></StyledLink>
                <Header>Сброс пароля</Header>
            </HeaderWrapper>
            <Wrapper>
                <Label>Электронная почта
                    <StyledInput 
                        {...register("email", {
                                onChange: (e) => {
                                    setEmailValue(e.target.value)
                                }
                        })}
                        value={emailValue}
                        placeholder="Введите адрес эл. почты"
                        className={[ 
                            errors.email ? 'hasError' : null,
                            emailValue ? 'active' : null
                        ]}
                    />
                    { errors.email &&   <Helper>
                                            <Msg>{ errors.email.message}</Msg>
                                        </Helper>
                    }
                </Label>
            </Wrapper>
            <BtnWrapper> 
                <Button>
                    <Text type='submit'>Отправить код</Text>
                    <MobileText type='submit'>Сбросить</MobileText>
                </Button>
                <Link to='/auth'><StyledButton>Отмена</StyledButton></Link>
            </BtnWrapper>  
            <ToastSucces 
                title="Пароль изменен"
                body="Код успешно отправлен на вашу почту!"
                show={succes} 
                setShow={setSucces}
            ></ToastSucces>
            <ToastError show={error} setShow={setError}/>
        </Form>
    )
}

export default FormPasswordRecovery