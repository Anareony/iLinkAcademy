import React, { useEffect, useState } from 'react'
import { useNavigate }  from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import { authStore } from '../../../store/auth';
import { useStore } from 'effector-react'
import { StyledButton, Error, FormWrapper, Header, StyledInput, StyledLink, Wrapper, Form } from './styles'
import { Regulars } from '../../../shared/const/regExp';

const schema = yup.object().shape({
    email: yup
        .string()
        .matches(Regulars.regEmail, "Недопустимые адрес электронной почты")
        .required("Это обязательно поле"),
    password: yup
        .string()
        .matches(Regulars.regPassword, 'Пароль должен содержать как минимум 8 символов: английские заглавные и прописные буквы, цифру и один из спецсимволов: "!#$%&"')
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

    const auth = useStore(authStore.$token);
    
    useEffect(() => {
        if(auth.accessToken) {
            localStorage.setItem("auth", JSON.stringify(auth));
            navigate(`/about`);
        }
    },[auth])
    
    const onSubmit = (data) => {
        authStore.getToken({ email: data.email, password: data.password });
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