import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import styled from 'styled-components';

import ToastSucces from '../../../components/ToastSucces/ToastSucces';
import Input from '../../../components/Input/Input'
import Button2 from '../../../components/Button2/Button2';
import ToastError from '../../../components/ToastError/ToastError';

import arrow from '../assets/arrow.svg'
import info from '../assets/InfoSquare.svg'
import arrowHover from '../assets/arrowHover.svg'

const Form = styled.form`
    min-width: 628px;
    min-height: 288px;
    padding: 40px 40px 24px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 44px;
    @media (max-width: 700px) {
        min-width: 400px;
        max-width: 400px;
        padding: 25px;
    }
    @media (max-width: 430px) {
        min-width: 288px;
        max-width: 288px;
        min-height: 246px;
        padding: 16px;
    }
`;

const Header = styled.header`
    font-family: 'Factor A';
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #333333;
    text-align: center;
    margin-bottom: 32px;
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
    margin-bottom: 4px;
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

const StyledLink  = styled(Link)`
    display: block;
    width: 24px;
    height: 24px;
    background-image: url('${arrow}');
    margin-right: 150px;
    &:hover {
        background-image: url('${arrowHover}');
    }
    @media (max-width: 700px) {
        margin-right: 45px;
    }
    @media (max-width: 430px) {
        margin-right: 21px;
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
    right: -10px;
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

const StyledInput = styled(Input)`
    margin-top: 4px;
    &.active {
        border: 1px solid #585CC6;
    }
    &.hasError {
        border: 1px solid red;
    }
`

const StyledButton = styled(Button2)`
    background: #fff;
    color: #585CC6;
    border: 1px solid #585CC6;
    margin-left: 12px;
    &:hover {
        background: #fff;
        border: 1px solid #797DDF;
        color: #797DDF;
    }
    @media (max-width: 430px) {
        display:none;
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
        margin-bottom: 40px;
    }
`

const HeaderWrapper = styled.div`
    display: flex;
    align-self: flex-start;
`

const Button = styled(Button2)`
    @media (max-width: 430px){
        width: 100%;
        padding: 12px;
        font-size: 14px;
    }
`
const BtnWrapper = styled.div`
     @media (max-width: 430px){
        width: 100%;
    }
`
const Text = styled.span`
    @media (max-width: 700px) {
        display:none
    }
`

const MobileText = styled.span`
    display: none;
    @media (max-width: 700px) {
        display:block;
    }
`

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