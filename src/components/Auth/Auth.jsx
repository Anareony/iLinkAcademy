import React, { useState, useEffect } from 'react'
import { useNavigate }  from "react-router-dom"
import Input from '../Input/Input'
import Button2 from '../Button2/Button2';
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import eye from './img/eye.svg'
import eyeHover from './img/eyeHover.svg'
import eyeHide from './img/eyeHide.svg'
import eyeHideHover from './img/eyeHideHover.svg'
import info from './img/InfoSquare.svg'

import styled from 'styled-components';

const Form = styled.form`
    padding: 40px 40px 24px;
    background: #FFF;
    min-width: 628px;
    min-height: 436px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.h3`
    font-family: 'Factor A';
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #3333333;
    margin-bottom: 32px;
    text-align: center;
`

const Label = styled.label`
    font-family: 'Factor A';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #3333333;
    margin-bottom: 4px;
    position: relative;
`

const Wrapper = styled.div`
    min-width: 548px;
    margin-bottom: ${props => props.primary ? "40px" : "32px"};
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
    bottom: -7px;
    right: 40px;
    cursor: pointer;
    background-image: url(${eye});
    width: 24px;
    height: 24px;

    &.active {
        background-image: url(${eyeHide});
    }

    &:hover.active {
        background-image: url(${eyeHideHover});
    }

    &:hover {
        background-image: url(${eyeHover});
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
    right: 10px;
    bottom: -5px;
    cursor: pointer;

    &:hover ${Msg} {
        display: block;
    }
`
const schema = yup.object().shape({
    email: yup
        .string()
        .matches(/^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$/, "Введенные данные не соответствуют требованиям")
        .required("Это обязательно поле"),
    password: yup
        .string()
        .matches(/^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$/, 'Пароль должен содержать латиницу и прописные буквы')
        .required("Это обязательно поле"),
})

const Auth = () => {
    const navigate = useNavigate()

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = (e) => {
        e.preventDefault();
        setActive(!isActive)
        setPasswordShown(passwordShown ? false : true);
    };

    const database = {
        email: "user@mail.com",
        password: "user@mail.com"
    }
    const [isActive, setActive] = useState("false");

    const { register, handleSubmit, setError ,formState: { errors, isValid, isDirty } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        if(data.email === database.email) { 
            if(data.password === database.password) {
                navigate('/')
            } else { 
                setError('server', {
                    type: 'server',
                    message: '1Email or Password is not matching with our record'
                })             
            }
        } else {
            setError('server', {
                type: 'server',
                message: '2Email or Password is not matching with our record'
            }) 
        }
        console.log(data.email)
        console.log(data.password)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Header>Войти</Header>
                <Wrapper>
                    <Label>Логин
                        <Input {...register("email")} placeholder="Введите логин"/>
                        { errors.email &&   <Helper>
                                                <Msg>{ errors.email.message}</Msg>
                                            </Helper>
                        }
                    </Label>
                </Wrapper>
                <Wrapper primary>
                    <Label> Пароль
                        <Input 
                            {...register("password")} 
                            placeholder="Введите пароль" 
                            type={passwordShown ? "text" : "password"}
                            
                        />
                        <EyeBtn className={isActive ?  null : "active"} onClick={togglePasswordVisiblity}/>
                        { errors.password &&    <Helper>
                                                    <Msg>{ errors.password.message}</Msg>
                                                </Helper>
                        }
                    </Label>
                </Wrapper>
                <Button2>
                    Войти
                </Button2>
                <StyledLink to='/passwordrecovery'>Забыли пароль?</StyledLink>
            </Form>
            { errors.server && <p>{errors.server.message}</p>}
        </div>
    )
}

export default Auth