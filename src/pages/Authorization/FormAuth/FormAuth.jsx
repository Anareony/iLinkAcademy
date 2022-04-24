import React, { useState } from 'react'
import { useNavigate }  from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import { StyledButton, Error, FormWrapper, Helper, Header, Msg, StyledInput, EyeBtn, StyledLink, Wrapper, Label, Form } from './styles'

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
                <StyledButton type='submit' disabled={isDirty && !isValid }>Войти</StyledButton>
                <StyledLink to='/passwordrecovery'>Забыли пароль?</StyledLink>
            </Form>
            {errors.server && <Error>Пользователь не найден</Error>}
        </FormWrapper>
    )
}

export default Auth