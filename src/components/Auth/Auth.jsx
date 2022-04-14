import React, { useState } from 'react'
import { useNavigate, Link  }  from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import styled from 'styled-components';

import Input from '../Input/Input'
import Button2 from '../Button2/Button2';

import eye from './img/eye.svg'
import eyeHover from './img/eyeHover.svg'
import eyeHide from './img/eyeHide.svg'
import eyeHideHover from './img/eyeHideHover.svg'
import info from './img/InfoSquare.svg'
import show from './img/Show.svg'

const Form = styled.form`
    padding: 40px 40px 24px;
    background: #FFF;
    min-width: 628px;
    min-height: 436px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 700px) {
        min-width: 400px;
        max-width: 400px;
        min-height: 386px;
        padding: 30px;
    }
    @media (max-width: 430px) {
        min-width: 288px;
        max-width: 288px;
        min-height: 386px;
        padding: 16px;
    }
`

const Header = styled.h3`
    font-family: 'Factor A';
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #3333333;
    margin-bottom: 32px;
    text-align: center;
    @media (max-width: 430px) {
        margin-bottom: 24px;
        font-size: 24px;
        line-height: 32px;
    }

`

const Label = styled.label`
    font-family: 'Factor A';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
    position: relative;
    @media (max-width: 700px) {
        min-width: 350px;
        max-width: 350px;
    }
    @media (max-width: 430px) {
        max-width: 288px;
        min-width: 288px;
    }

`

const Wrapper = styled.div`
    min-width: 548px;
    margin-bottom: ${props => props.primary ? "40px" : "32px"};

    @media (max-width: 700px) {
        min-width: 350px;
        max-width: 350px;
    }
    @media (max-width: 430px) {
        min-width: 256px;
        max-width: 256px;
    }

`

const StyledLink  = styled(Link)`
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #585CC6;
    margin-top: 16px;
    &:hover {
        text-decoration: underline;
    }
`
const EyeBtn = styled.button`
    border: none;
    position: absolute;
    bottom: -4px;
    right: 15px;
    cursor: pointer;
    background-image: url(${eye});
    background-color: #fff;
    width: 24px;
    height: 24px;
    &.hasError {
        right: 45px;
        background-image: url(${show});
    }
    &.active {
        background-image: url(${eyeHide});
    }
    &.activeInput {
        background-image: url(${show});
    }
    &.active.hasError{
        background-image: url(${eyeHide});
    }
    &:hover.active.hasError {
        background-image: url(${eyeHideHover});
    }
    &:hover.active {
        background-image: url(${eyeHideHover});
    }
    &:hover {
        background-image: url(${eyeHover});
    }
`

const StyledInput = styled(Input)`
    margin-top: 2px;
    color: #333333;
    letter-spacing: ${props => props.password ? "0.2em" : "0"};
    font-weight: ${props => props.password ? "600" : "400"};
    &.active {
        border: 1px solid #585CC6;
    }
    &.hasError {
        border: 1px solid #EB5757;
    }
    &::placeholder{
        font-size: 14px;
        font-weight: 400;
        color: #8A8A8A;
        line-height: 22px;
        letter-spacing: 0;
    }
    &:focus + ${EyeBtn} {
        background-image: url(${show});
    }
`

const Msg = styled.span`
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    display: none;
    position: absolute;
    top: -30px;
    right: -14px;
    background: #fff;
    min-width: 166px;
    max-height: 44px;
`

const Helper = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    background-image: url(${info});
    right: 14px;
    bottom: -2px;
    cursor: pointer;
    &:hover ${Msg} {
        display: block;
    }
`

const FormWrapper = styled.div`
    margin-top: 44px;
`

const Error = styled.div`
    width: 100%;
    min-height: 62px;
    background-color: #EB5757;
    display: flex;
    padding: 20px 0;
    color: #FFFFFF;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 969px;
    bottom: -214px;
    right: 0%;    
    &.active {
        display: flex;
    }
    @media (max-width: 900px){
        top: 807px;
        bottom: -91px;
    }
    @media (max-width: 430px){
        top: 650px;
        bottom: 110px;
    }
`

const StyledButton = styled(Button2)`
    @media (max-width: 430px){
        width: 100%;
        padding: 12px;
        font-size: 14px;
    }
`

const schema = yup.object().shape({
    email: yup
        .string()
        .matches(/^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9-]){1,25}\.)([a-zA-Z0-9]{2,4})$/, "Недопустимые адрес электронной почты")
        .required("Это обязательно поле"),
    password: yup
        .string()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,24}$/, 'Пароль должен содержать как минимум 8 символов: заглавные буквы, прописные буквы, цифры и спецсимволы')
        .required("Это обязательно поле"),
})

const Auth = () => {

    const { register, handleSubmit, setError ,formState: { errors, isDirty, isValid } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate()
    const [isActive, setActive] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = (e) => {
        e.preventDefault();
        setActive(!isActive)
        setPasswordShown(passwordShown ? false : true);
    };

    const database = {
        email: "user@gmail.com",
        password: "Awa1dsa23?"
    }

    const onSubmit = (data) => {
        if(data.email === database.email) { 
            if(data.password === database.password) {
                navigate('/')
            } else { 
                setError('server')      
            }
        } else {
            setError('server')    
        }
        console.log(data.email)
        console.log(data.password)
    }

    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Header>Войти</Header>
                <Wrapper>
                    <Label>Электронная почта
                        <StyledInput 
                            {...register("email", {
                                onChange: (e) => {
                                    setEmailValue(e.target.value)
                                }
                            })}
                            placeholder="Введите адрес эл. почты"
                            value={emailValue}
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
                <Wrapper primary>
                    <Label> Пароль
                        <StyledInput password
                            {...register("password", {
                                onChange: (e) => {
                                    setPasswordValue(e.target.value)
                                }
                            })} 
                            placeholder="Введите пароль" 
                            type={passwordShown ? "text" : "password"}
                            value={passwordValue}
                            className={ [
                                errors.password ? 'hasError' : null,
                                passwordValue ? 'active' : null
                            ]}
                        />
                        <EyeBtn 
                            className={[
                                isActive ? 'active' : null,
                                passwordValue ? 'activeInput' : null,
                                errors.password ? 'hasError' : null
                            ]} 
                            onClick={togglePasswordVisiblity}
                        />
                        { errors.password &&    <Helper>
                                                    <Msg>{ errors.password.message}</Msg>
                                                </Helper>
                        }
                    </Label>
                </Wrapper>
                <StyledButton disabled={isDirty && !isValid }>Войти</StyledButton>
                <StyledLink to='/passwordrecovery'>Забыли пароль?</StyledLink>
            </Form>
            {errors.server && <Error>Пользователь не найден</Error>}
        </FormWrapper>
    )
}

export default Auth