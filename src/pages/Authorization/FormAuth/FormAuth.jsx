import React, { useState } from 'react'
import { useNavigate }  from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

import { StyledButton, Error, FormWrapper, Header, StyledInput, StyledLink, Wrapper, Form } from './styles'

const schema = yup.object().shape({
    email: yup
        .string()
        .matches(/^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9-]){1,25}\.)([a-zA-Z0-9]{2,4})$/, "Недопустимые адрес электронной почты")
        .required("Это обязательно поле"),
    password: yup
        .string()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,24}$/, 'Пароль должен содержать как минимум 8 символов: английские заглавные и прописные буквы, цифру и один из спецсимволов: "!#$%&"')
        .required("Это обязательно поле"),
})

const Auth = () => {

    const { register, handleSubmit, setError ,formState: { errors, isDirty, isValid, isSubmitted } } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate()
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

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
                    <StyledInput 
                        {...register("email", {
                            onChange: (e) => {
                                setEmailValue(e.target.value)
                            }
                        })}
                        placeholder="Введите адрес эл. почты"
                        label='Электронная почта'
                        inputValue={emailValue}
                        errors={errors.email}
                        errorMsg={errors.email && errors.email.message}
                    />
                </Wrapper>
                <Wrapper primary>
                    <StyledInput password
                        {...register("password", {
                            onChange: (e) => {
                                setPasswordValue(e.target.value)
                            }
                        })}
                        label='Пароль'
                        placeholder="Введите пароль" 
                        isPassword={true}
                        inputValue={passwordValue}
                        errors={errors.password}
                        errorMsg={errors.password && errors.password.message}
                    />
                </Wrapper>
                <StyledButton type='submit' disabled={isDirty && !isValid && isSubmitted }>Войти</StyledButton>
                <StyledLink to='/passwordrecovery'>Забыли пароль?</StyledLink>
            </Form>
            {errors.server && <Error>Пользователь не найден</Error>}
        </FormWrapper>
    )
}

export default Auth